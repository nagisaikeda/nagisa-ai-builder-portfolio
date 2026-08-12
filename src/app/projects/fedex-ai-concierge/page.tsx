import type { Metadata } from "next";
import { FedExAiConciergePageClient } from "@/app/projects/fedex-ai-concierge/FedExAiConciergePageClient";
import { fedexAiConciergeStory } from "@/lib/case-studies/fedex/fedex-ai-concierge";

export const metadata: Metadata = {
  title: "FedEx AI Concierge Experience — Nagisa Ikeda",
  description: fedexAiConciergeStory.problem,
  openGraph: {
    title: `${fedexAiConciergeStory.title} — Nagisa Ikeda`,
    description: fedexAiConciergeStory.subtitle,
    type: "article",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function FedExAiConciergePage() {
  return <FedExAiConciergePageClient />;
}
