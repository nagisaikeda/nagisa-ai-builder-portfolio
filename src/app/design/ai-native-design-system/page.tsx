import type { Metadata } from "next";
import { DesignSystemStoryTemplate } from "@/components/design-system-story/DesignSystemStoryTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { aiNativeDesignSystemStory } from "@/lib/case-studies/design-system/ai-native-design-system";

export const metadata: Metadata = {
  title: "AI-Native Design System — Nagisa Ikeda",
  description: aiNativeDesignSystemStory.subtitle,
  openGraph: {
    title: aiNativeDesignSystemStory.title,
    description: aiNativeDesignSystemStory.subtitle,
    type: "article",
  },
};

export default function AiNativeDesignSystemPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <DesignSystemStoryTemplate story={aiNativeDesignSystemStory} />
      </main>
      <Footer />
    </>
  );
}
