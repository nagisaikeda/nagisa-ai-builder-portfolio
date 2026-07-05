import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/project/CaseStudyTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { localPmOsCaseStudy } from "@/lib/case-studies/local-pm-os";

export const metadata: Metadata = {
  title: "LocalPMOS — Nagisa Ikeda",
  description: localPmOsCaseStudy.description,
  openGraph: {
    title: "LocalPMOS — The Company Brain for Autonomous Software Teams",
    description: localPmOsCaseStudy.description,
    type: "article",
  },
};

export default function LocalPMOSPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <CaseStudyTemplate study={localPmOsCaseStudy} />
      </main>
      <Footer />
    </>
  );
}
