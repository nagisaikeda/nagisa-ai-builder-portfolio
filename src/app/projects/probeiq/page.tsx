import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/project/CaseStudyTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { probeiqCaseStudy } from "@/lib/case-studies/probeiq";

export const metadata: Metadata = {
  title: "ProbeIQ — Nagisa Ikeda",
  description: probeiqCaseStudy.description,
  openGraph: {
    title: "ProbeIQ — Transforming Educational Videos into Interactive AI Tutors",
    description: probeiqCaseStudy.description,
    type: "article",
  },
};

export default function ProbeIQPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <CaseStudyTemplate study={probeiqCaseStudy} />
      </main>
      <Footer />
    </>
  );
}
