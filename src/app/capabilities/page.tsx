import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatIBring } from "@/components/WhatIBring";
import { whatIBring } from "@/lib/data";

export const metadata: Metadata = {
  title: "What I Bring — Nagisa Ikeda",
  description: whatIBring.headline,
  openGraph: {
    title: "What I Bring — Nagisa Ikeda",
    description: whatIBring.headline,
    type: "website",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <WhatIBring standalone />
      </main>
      <Footer />
    </>
  );
}
