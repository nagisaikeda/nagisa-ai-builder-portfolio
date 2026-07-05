import type { Metadata } from "next";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { capabilities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Capabilities — Nagisa Ikeda",
  description: capabilities.headlineLines.join(" "),
  openGraph: {
    title: "Capabilities — Nagisa Ikeda",
    description: capabilities.headlineLines.join(" "),
    type: "website",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <Capabilities standalone />
      </main>
      <Footer />
    </>
  );
}
