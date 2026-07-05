import type { Metadata } from "next";
import { AheadIosStoryTemplate } from "@/components/ahead-ios-story/AheadIosStoryTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { aheadIosStory } from "@/lib/case-studies/ahead-ios/ahead-ios";

export const metadata: Metadata = {
  title: "Ahead iOS — Nagisa Ikeda",
  description: aheadIosStory.description,
  openGraph: {
    title: "Ahead iOS — Native iOS Personal Finance",
    description: aheadIosStory.description,
    type: "article",
  },
};

export default function AheadIosPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <AheadIosStoryTemplate story={aheadIosStory} />
      </main>
      <Footer />
    </>
  );
}
