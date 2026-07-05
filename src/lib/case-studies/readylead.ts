import type { CaseStudy } from "@/lib/case-studies/types";

export const readyleadCaseStudy: CaseStudy = {
  slug: "readylead",
  title: "ReadyLead",
  eyebrow: "2nd Place · YC AI Growth Hackathon",
  tagline: "AI Growth Intelligence for Commercial HVAC",
  description:
    "ReadyLead turns scattered public maintenance signals into ranked commercial sales opportunities, helping contractors focus on buildings that show evidence of maintenance needs instead of cold-calling every property.",
  demoUrl: "https://www.youtube.com/watch?v=GSe8ArMNCjc",
  githubUrl: "https://github.com/nagisaikeda/ReadyLead",
  demoLabel: "Watch Demo",
  githubLabel: "GitHub",
  backLabel: "Back to AI Work",
  backHref: "/#ai-products",
  heroImage: "/images/projects/readylead/dashboard.png",
  heroImageAspect: "1024/657",
  screenshots: {
    heading: "Product in practice",
    items: [
    {
      src: "/images/projects/readylead/hero.png",
      alt: "ReadyLead landing page",
      caption:
        "Product landing — positioning ReadyLead as an HVAC GTM signal engine for San Francisco.",
    },
    {
      src: "/images/projects/readylead/dashboard.png",
      alt: "ReadyLead signals dashboard",
      caption:
        "Signals dashboard — ranked opportunities on a live map with category and 311 filters.",
    },
    {
      src: "/images/projects/readylead/building-analysis.png",
      alt: "ReadyLead building analysis detail",
      caption:
        "Building analysis — evidence-backed scoring, decision-maker contact, and AI reasoning.",
    },
    {
      src: "/images/projects/readylead/opportunity-ranking.png",
      alt: "ReadyLead opportunity ranking list",
      caption:
        "Opportunity ranking — scored leads with estimated value and maintenance signal tags.",
    },
    {
      src: "/images/projects/readylead/outreach.png",
      alt: "ReadyLead outreach workflow",
      caption:
        "Outreach workflow — evidence-backed email drafts grounded in public maintenance signals.",
    },
    {
      src: "/images/projects/readylead/voice-agent.png",
      alt: "ReadyLead Vapi voice agent",
      caption:
        "Voice agent — Vapi-powered call flow that books inspections and captures owner contact.",
    },
    ],
  },
  opportunity: {
    heading: "The opportunity",
    body: "Commercial HVAC contractors spend thousands of dollars every month on Google Ads, referrals, cold outreach, and purchased lead lists. Most sales efforts are reactive, expensive, and poorly targeted.\n\nCities like San Francisco publish valuable maintenance signals, including 311 complaints, building permits, and public records. These signals can reveal buildings with potential HVAC or maintenance needs, but the data is fragmented, noisy, and impossible to monitor manually.",
    takeaway:
      "ReadyLead reframes public infrastructure data as a proactive growth signal for commercial contractors.",
  },
  thesis: {
    heading: "From cold outreach to evidence-backed selling",
    body: "Rather than helping contractors contact more buildings, ReadyLead helps them identify the right buildings. The product thesis is simple: public maintenance activity can become a high-intent commercial signal when AI can collect, reason over, rank, and explain it.",
  },
  workflow: {
    heading: "Product workflow",
    steps: [
      {
        title: "Public maintenance data",
        description:
          "Collect San Francisco 311 complaints and public building records.",
      },
      {
        title: "Building-level analysis",
        description:
          "Generate building profiles and identify maintenance indicators.",
      },
      {
        title: "Opportunity scoring",
        description:
          "Use AI reasoning to rank likely commercial opportunities.",
      },
      {
        title: "Contact path discovery",
        description:
          "Find likely property owners, managers, or decision-maker paths.",
      },
      {
        title: "Contractor matching",
        description:
          "Match opportunities to relevant contractors by trade, service area, and need.",
      },
      {
        title: "Evidence-backed outreach",
        description:
          "Generate personalized outreach grounded in the public signals.",
      },
      {
        title: "Voice scheduling",
        description:
          "Use a Vapi voice agent to help schedule an inspection.",
      },
    ],
  },
  contributions: {
    heading: "My role",
    intro:
      "I worked across product strategy, AI workflow design, UX architecture, interaction design, frontend implementation, product positioning, and the final hackathon pitch.",
    items: [
      "Framed the commercial HVAC lead-generation opportunity",
      "Helped define the end-to-end AI GTM workflow",
      "Designed the core product experience around ranked opportunities",
      "Shaped the evidence-backed reasoning and outreach flow",
      "Contributed to the frontend prototype and demo narrative",
      "Helped translate the product into a clear hackathon pitch",
    ],
  },
  designDecisions: {
    heading: "Key product decisions",
    cards: [
      {
        title: "Prioritize intent over volume",
        description:
          "The goal was not to generate more leads. It was to help contractors focus on buildings with visible evidence of maintenance need.",
      },
      {
        title: "Use public data as commercial signal",
        description:
          "311 complaints, permits, and building records create a more timely signal than generic purchased lead lists.",
      },
      {
        title: "Explain the score",
        description:
          "For sales teams to trust AI ranking, the system needs to show why a building is recommended, not just assign a black-box score.",
      },
      {
        title: "Design for action, not dashboards",
        description:
          "The workflow moves from signal to opportunity to outreach to scheduling, so the product supports execution rather than passive analysis.",
      },
    ],
  },
  architecture: {
    heading: "Technical architecture",
    layers: [
      "Frontend dashboard",
      "Convex backend",
      "Public datasets",
      "OpenAI reasoning layer",
      "Opportunity scoring",
      "Outreach generation",
      "Vapi voice agent",
    ],
    stack: [
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Convex" },
      { label: "LLM", value: "OpenAI" },
      { label: "Voice Agent", value: "Vapi" },
      {
        label: "Data Sources",
        value: "San Francisco 311 and public building datasets",
      },
      { label: "Development Tools", value: "Cursor / Codex" },
    ],
  },
  challenges: {
    heading: "Challenges",
    items: [
      "Combining multiple public datasets into a unified building profile",
      "Ranking maintenance opportunities while avoiding unsupported predictive claims",
      "Identifying realistic contact paths for commercial buildings",
      "Designing an end-to-end agent workflow that could be demonstrated within a hackathon timeframe",
    ],
  },
  mvp: {
    heading: "What we shipped",
    body: "The hackathon MVP demonstrated the full ReadyLead workflow using real San Francisco public maintenance data.",
    items: [
      "Real public maintenance data",
      "Thousands of buildings analyzed",
      "AI-ranked commercial opportunities",
      "Evidence-backed outreach recommendations",
      "End-to-end workflow from signal → opportunity → outreach → voice scheduling",
    ],
  },
  outcome: {
    heading: "Outcome",
    body: "ReadyLead successfully demonstrated how fragmented public maintenance data can be converted into actionable commercial sales opportunities. The project validated the core thesis that AI can transform noisy public signals into evidence-backed GTM workflows.",
    highlight: "2nd Place · YC AI Growth Hackathon",
  },
  lessons: {
    heading: "Lessons learned",
    items: [
      "The strongest growth AI products connect signal detection to actionable workflow, not just dashboards or scores.",
      "Explainability matters when AI is used to prioritize sales opportunities.",
      "Hackathon MVPs need clear product judgment: what to automate, what to fake, and what to prove.",
    ],
  },
  futureWork: {
    heading: "Future work",
    items: [
      "CRM integrations",
      "Multi-city expansion",
      "Memory for account history",
      "Contractor feedback loops",
      "Lead scoring evaluation framework",
      "Multi-agent collaboration for research, scoring, outreach, and scheduling",
    ],
  },
  relatedHeading: "More AI Work",
  relatedProjects: [
    {
      title: "ProbeIQ",
      description: "Research intelligence agent",
      href: "/projects/probeiq",
    },
    {
      title: "Local PM OS",
      description: "Local-first product operating system",
      href: "/projects/local-pm-os",
    },
    {
      title: "Ahead Agent",
      description: "Memory-driven financial decision agent (coming soon)",
      href: "/#ai-products",
    },
    {
      title: "FedEx AI Concierge",
      description: "Multi-agent enterprise onboarding",
      href: "/#ai-products",
    },
  ],
};
