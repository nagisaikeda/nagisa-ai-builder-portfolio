import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(
  __dirname,
  "../public/images/projects/readylead"
);
const BASE = process.env.READYLEAD_URL || "http://localhost:3001";

async function waitForApp(page) {
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);
}

async function capture(page, name, options = {}) {
  const file = path.join(OUT_DIR, name);
  await page.screenshot({ path: file, type: "png", ...options });
  console.log(`Saved ${file}`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1728, height: 1080 },
    deviceScaleFactor: 2,
    locale: "en-US",
  });
  const page = await context.newPage();

  // Clean outreach state
  await page.goto(`${BASE}/signals`);
  await page.evaluate(() => localStorage.clear());

  // hero — landing page hero
  await page.goto(`${BASE}/`);
  await waitForApp(page);
  const heroSection = page.locator("section").first();
  await heroSection.waitFor({ state: "visible" });
  await capture(page, "hero.png", {
    clip: await heroSection.boundingBox(),
  });

  // building analysis — signals map with selected building detail
  await page.goto(`${BASE}/signals`);
  await page.waitForSelector("text=480 ELLIS ST", { timeout: 20000 });
  await page.getByRole("button", { name: /480 ELLIS ST/i }).click();
  await page.waitForSelector("text=Add to Outreach", { timeout: 10000 });
  await page.waitForTimeout(3500);
  await capture(page, "building-analysis.png");

  // opportunity ranking — ranked list sidebar
  const aside = page.locator("aside").first();
  await aside.waitFor({ state: "visible" });
  await capture(page, "opportunity-ranking.png", {
    clip: await aside.boundingBox(),
  });

  // Seed outreach lead
  await page.getByRole("button", { name: "Add to Outreach" }).click();
  await page.waitForTimeout(500);

  // outreach — email draft view
  await page.goto(`${BASE}/calls`);
  await page.waitForSelector("text=480 ELLIS ST", { timeout: 10000 });
  await page.getByRole("button", { name: /480 ELLIS ST/i }).click();
  await page.getByRole("button", { name: "Email" }).click();
  await page.waitForSelector("text=Subject", { timeout: 10000 });
  await page.waitForTimeout(800);
  await capture(page, "outreach.png");

  // voice agent — simulated call transcript
  await page.getByRole("button", { name: "Call again" }).click().catch(() =>
    page.getByRole("button", { name: "Call", exact: true }).click()
  );
  await page.waitForSelector("text=Summit Mechanical", { timeout: 45000 });
  await page.waitForSelector("text=inspection booked", { timeout: 45000 });
  await page.waitForTimeout(1200);
  await capture(page, "voice-agent.png");

  await browser.close();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
