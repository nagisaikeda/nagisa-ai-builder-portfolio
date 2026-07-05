import type { Metadata } from "next";
import { HealthiiStoryTemplate } from "@/components/healthii-story/HealthiiStoryTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { healthiiStory } from "@/lib/case-studies/healthii/healthii";

export const metadata: Metadata = {
  title: "Healthii — Nagisa Ikeda",
  description: healthiiStory.description,
  openGraph: {
    title: "Healthii — Designing Behavior Change for Everyday Wellness",
    description: healthiiStory.description,
    type: "article",
  },
};

export default function HealthiiPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <HealthiiStoryTemplate story={healthiiStory} />
      </main>
      <Footer />
    </>
  );
}
