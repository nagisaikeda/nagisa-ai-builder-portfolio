import type { Metadata } from "next";
import { FedExStoryTemplate } from "@/components/fedex-story/FedExStoryTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { fedexAiConciergeStory } from "@/lib/case-studies/fedex/fedex-ai-concierge";

export const metadata: Metadata = {
  title: "FedEx AI Concierge Experience — Nagisa Ikeda",
  description: fedexAiConciergeStory.problem,
  openGraph: {
    title: `${fedexAiConciergeStory.title} — Nagisa Ikeda`,
    description: fedexAiConciergeStory.subtitle,
    type: "article",
  },
};

export default function FedExAiConciergePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <FedExStoryTemplate story={fedexAiConciergeStory} />
      </main>
      <Footer />
    </>
  );
}
