import type { Metadata } from "next";
import { ConnectedWealthPageClient } from "@/app/projects/connected-wealth/ConnectedWealthPageClient";
import { connectedWealthStory } from "@/lib/case-studies/connected-wealth";

export const metadata: Metadata = {
  title: "Connected Wealth — Nagisa Ikeda",
  description: connectedWealthStory.tldr,
  openGraph: {
    title: "Connected Wealth — Unified Wealth Platform at J.P. Morgan Chase",
    description: connectedWealthStory.headline,
    type: "article",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConnectedWealthPage() {
  return <ConnectedWealthPageClient />;
}
