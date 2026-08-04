import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume — Nagisa Ikeda",
  description:
    "AI Design Engineer résumé — enterprise AI, shipped AI products, and AI-native design systems.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-label">Resume</p>
            <h1 className="mt-4 text-[clamp(1.75rem,3vw,2.25rem)] font-medium tracking-tight text-ink">
              AI Design Engineer
            </h1>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-body">
              Preview the résumé, then download a PDF copy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.resumePdf}
              download={site.resumeDownloadName}
              className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium tracking-tight text-canvas-warm transition-colors hover:bg-ink-soft"
            >
              Download PDF →
            </a>
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-ink transition-colors hover:bg-canvas-warm"
            >
              Back to work
            </Link>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_40px_rgba(10,10,10,0.06)]">
          <iframe
            src={`${site.resumePdf}#view=FitH`}
            title="Nagisa Ikeda — AI Design Engineer resume"
            className="h-[min(85vh,1100px)] w-full bg-canvas-warm"
          />
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Having trouble viewing?{" "}
          <a
            href={site.resumePdf}
            download={site.resumeDownloadName}
            className="font-medium text-ink underline-offset-4 hover:underline"
          >
            Download the PDF
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
