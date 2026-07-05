import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(
  __dirname,
  "../public/images/projects/local-pm-os"
);
const BASE = process.env.LOCALPMOS_URL || "http://127.0.0.1:5174";

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

  await page.goto(BASE);
  await page.waitForLoadState("networkidle");
  await page.waitForSelector("text=Enterprise Checkout", { timeout: 20000 });
  await page.waitForTimeout(2000);

  await capture(page, "dashboard.png");
  await capture(page, "hero.png");

  await browser.close();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
