import type { Metadata } from "next";
import { AtlasStoryTemplate } from "@/components/atlas-story/AtlasStoryTemplate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { atlasStory } from "@/lib/case-studies/design-system/ai-native-design-system";

export const metadata: Metadata = {
  title: "Atlas — Nagisa Ikeda",
  description: atlasStory.headline,
  openGraph: {
    title: `Atlas — ${atlasStory.headline}`,
    description: atlasStory.supportingCopy,
    type: "article",
  },
};

export default function AtlasPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <AtlasStoryTemplate story={atlasStory} />
      </main>
      <Footer />
    </>
  );
}
