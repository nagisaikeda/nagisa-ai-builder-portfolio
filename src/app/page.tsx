import { Capabilities } from "@/components/Capabilities";
import { BuildLog } from "@/components/BuildLog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  FeaturedAIProducts,
  ProductDesignWork,
} from "@/components/WorkSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedAIProducts />
        <ProductDesignWork />
        <BuildLog />
        <Capabilities />
      </main>
      <Footer />
    </>
  );
}
