import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/project/CaseStudyTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { readyleadCaseStudy } from "@/lib/case-studies/readylead";

export const metadata: Metadata = {
  title: "ReadyLead — Nagisa Ikeda",
  description: readyleadCaseStudy.description,
  openGraph: {
    title: "ReadyLead — AI Growth Intelligence for Commercial HVAC",
    description: readyleadCaseStudy.description,
    type: "article",
  },
};

export default function ReadyLeadPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <CaseStudyTemplate study={readyleadCaseStudy} />
      </main>
      <Footer />
    </>
  );
}
