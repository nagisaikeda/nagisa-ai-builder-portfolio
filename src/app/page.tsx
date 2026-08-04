import { BuildLog } from "@/components/BuildLog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResumeSection } from "@/components/ResumeSection";
import { WhatIBring } from "@/components/WhatIBring";
import {
  FeaturedAIProducts,
  MoreAiProductsSection,
  ProductDesignSection,
} from "@/components/WorkSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedAIProducts />
        <MoreAiProductsSection />
        <ProductDesignSection />
        <WhatIBring />
        <ResumeSection />
        <BuildLog />
      </main>
      <Footer />
    </>
  );
}
