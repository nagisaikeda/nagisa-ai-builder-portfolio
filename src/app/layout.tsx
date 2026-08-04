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
    "Building Enterprise AI, shipping AI products, and designing AI-native systems. FedEx Dataworks · Nara Labs · YC AI Growth Hackathon.",
  openGraph: {
    title: "Nagisa Ikeda — AI Design Engineer",
    description:
      "Enterprise AI, shipped AI products, and AI-native design systems—from FedEx AI Concierge to ReadyLead to Atlas.",
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
