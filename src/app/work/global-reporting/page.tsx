import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "FedEx Global Reporting — Nagisa Ikeda",
  description:
    "Designing an AI-native reporting system where ambient intelligence detects what matters, an agent helps investigate across enterprise data, and structured interfaces preserve human control.",
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    number: "01",
    title: "The challenge",
    body: "Enterprise reporting is fragmented across tools, delayed by manual assembly, and rarely connected to action. Teams spend more time pulling reports than managing outcomes.",
  },
  {
    number: "02",
    title: "Reframing reporting",
    body: "The opportunity is not a better dashboard. It is a shift from static reporting to decision intelligence—systems that detect, investigate, and support action while keeping humans in control.",
  },
  {
    number: "03",
    title: "AI interaction model",
    body: "Ambient intelligence surfaces what needs attention. An agent helps investigate across enterprise data. Structured interfaces keep recommendations inspectable, editable, and accountable.",
  },
  {
    number: "04",
    title: "Hero workflow",
    body: "Detect what matters, investigate with agent support, act through structured controls, and continuously monitor outcomes. Placeholder walkthrough coming soon.",
  },
  {
    number: "05",
    title: "Human / agent boundary",
    body: "Agents accelerate investigation. Humans remain responsible for judgment, approval, and exception handling. The interface makes that boundary explicit.",
  },
  {
    number: "06",
    title: "System architecture",
    body: "A high-level view of data sources, detection, investigation, action, and monitoring layers. Architecture diagrams will be added here.",
  },
  {
    number: "07",
    title: "Evolution & feasibility",
    body: "How the system can ship in phases—from ambient alerting to agent-assisted investigation to closed-loop outcome monitoring.",
  },
] as const;

export default function GlobalReportingPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 md:px-8">
        <article className="border-b border-border pb-16 pt-28 md:pb-20 md:pt-32">
          <p className="text-label">Work in progress</p>
          <h1 className="mt-6 text-hero-headline">FedEx Global Reporting</h1>
          <p className="mt-6 max-w-2xl text-[clamp(1.125rem,2.3vw,1.5rem)] font-medium leading-snug tracking-tight text-ink">
            From pulling reports to managing outcomes
          </p>
          <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-body md:text-base">
            Designing an AI-native reporting system where ambient intelligence
            detects what matters, an agent helps investigate across enterprise
            data, and structured interfaces preserve human control.
          </p>
        </article>

        {sections.map((section) => (
          <section
            key={section.number}
            className="border-t border-border py-16 md:py-24"
          >
            <p className="text-label">{section.number}</p>
            <h2 className="text-section-serif mt-4">{section.title}</h2>
            <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-body md:text-base">
              {section.body}
            </p>
            <div className="mt-10 flex aspect-[16/10] min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-canvas md:min-h-[320px]">
              <p className="px-6 text-center text-sm text-muted">
                {section.title} — placeholder
              </p>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
