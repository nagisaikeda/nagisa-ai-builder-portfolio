import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nagisa Ikeda — AI Design Engineer",
  description:
    "Designs and builds AI-native products from idea to working prototype. 2nd Place — YC AI Growth Hackathon. FedEx Dataworks · Nara Labs.",
  openGraph: {
    title: "Nagisa Ikeda — AI Design Engineer",
    description:
      "Shipped ReadyLead, ProbeIQ, Local PM OS. Building agentic products and AI-native workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-canvas text-body antialiased">
        {children}
      </body>
    </html>
  );
}
