import type { CaseStudy } from "@/lib/case-studies/types";

export const localPmOsCaseStudy: CaseStudy = {
  slug: "local-pm-os",
  title: "LocalPMOS",
  eyebrow: "Featured · Built at Dell × NVIDIA Local AI Hackathon",
  tagline: "The Company Brain for Autonomous Software Teams",
  description:
    "Built in two days at the Dell × NVIDIA Local AI Hackathon, LocalPMOS is an AI-native operating system that continuously captures organizational context, identifies risks, prioritizes work, and converts decisions into executable actions.",
  demoUrl: "https://www.youtube.com/watch?v=deE54ieqOsI",
  githubUrl: "https://github.com/nagisaikeda/LocalPMOS",
  showGithub: true,
  demoLabel: "Watch Demo",
  githubLabel: "GitHub Repo",
  backLabel: "Back to AI Work",
  backHref: "/#ai-products",
  heroImage: "/images/projects/local-pm-os/hero.png",
  heroImageAspect: "16/10",
  snapshot: [
    {
      label: "Role",
      value: "AI Product Design, AI Engineering, Product Strategy",
    },
    { label: "Timeline", value: "2 days" },
    {
      label: "Built at",
      value: "Dell × NVIDIA Local AI Hackathon",
    },
    {
      label: "Hardware",
      value: "Dell Pro Max with NVIDIA GB10",
    },
    {
      label: "Core system",
      value: "Local AI, memory, product intelligence, workflow orchestration",
    },
    {
      label: "Outcome",
      value:
        "Working end-to-end prototype · Local AI inference · Multi-agent workflow · Real reminder generation",
    },
  ],
  opportunity: {
    heading: "Overview",
    body: "Modern software teams generate thousands of signals every day across Slack, GitHub, Jira, customer feedback, documentation, meetings, and AI-generated artifacts. Yet no system understands this context as a whole.\n\nLocalPMOS explores a different approach: an AI operating system that continuously builds organizational memory, reasons across company knowledge, and converts insights into real actions.",
  },
  extraSections: [
    {
      heading: "The problem",
      body: "Product managers, engineers, founders, and operators spend hours every week gathering context before they can make decisions.\n\nCritical information is fragmented across Slack, GitHub, Jira, docs, customer feedback, meetings, dashboards, and email.\n\nTeams struggle to:\n\n• Understand what changed across tools\n• Connect customer feedback to roadmap decisions\n• Identify launch risks before they become blockers\n• Prioritize work with incomplete context\n• Preserve institutional memory across projects and team changes\n• Turn decisions into follow-up actions",
      takeaway:
        "The problem is not a lack of tools. The problem is that no system understands the full context of the business.",
    },
  ],
  thesis: {
    heading: "From assistant to operator",
    body: "Unlike traditional AI assistants that wait for questions, LocalPMOS acts as an operator. It continuously monitors company context, identifies risks and opportunities, prioritizes work, and converts recommendations into executable actions.",
  },
  workflow: {
    heading: "Product workflow",
    steps: [
      {
        title: "Collect context",
        description:
          "Slack · GitHub · Jira · Docs · Email · Customer feedback",
      },
      {
        title: "Reason",
        description: "Analyze company state and detect risks",
      },
      {
        title: "Prioritize",
        description: "Identify decisions, blockers, and next steps",
      },
      {
        title: "Recommend",
        description:
          "Generate product recommendations, PRDs, Jira tickets, and stakeholder updates",
      },
      {
        title: "Execute",
        description:
          "Create reminders, tasks, follow-ups, and operational outputs",
      },
    ],
  },
  contributions: {
    heading: "My role",
    intro:
      "I worked across product strategy, AI workflow design, system architecture, multi-agent UX, information architecture, frontend implementation, demo planning, and presentation.",
    items: [
      "Defined the product vision around organizational memory and autonomous product workflows",
      "Designed the core AI operating-system metaphor",
      "Mapped the workflow from company context → reasoning → decision → task → real-world follow-up",
      "Shaped the multi-agent UX for briefing, recommendations, context, and execution",
      "Helped design the local-first architecture for privacy-sensitive company knowledge",
      "Built and refined the prototype experience under a two-day hackathon constraint",
      "Created the demo narrative showing AI moving beyond analysis into execution",
    ],
  },
  designDecisions: {
    heading: "Key product decisions",
    cards: [
      {
        title: "Local-first by design",
        description:
          "Company context is sensitive. LocalPMOS explores how product intelligence can run close to the organization's data instead of sending every workflow to external systems.",
      },
      {
        title: "Continuous over chat",
        description:
          "The product does not wait for a user to ask, \"What should we do next?\" It continuously observes context and surfaces recommendations proactively.",
      },
      {
        title: "Memory as infrastructure",
        description:
          "The most valuable asset inside a company is accumulated knowledge, decisions, and outcomes. LocalPMOS treats memory as a first-class product layer.",
      },
      {
        title: "Action over dashboards",
        description:
          "The demo moves from analysis into execution by creating real follow-up tasks, showing that agentic products should close the loop between insight and action.",
      },
    ],
  },
  architecture: {
    heading: "System architecture",
    layers: [
      "Slack · GitHub · Jira · Docs · Email · Customer feedback",
      "Local knowledge base",
      "Memory layer",
      "Context engine",
      "Reasoning agent",
      "Planning agent",
      "Execution agent",
      "Apple Reminders · Jira tasks · Email updates · Stakeholder summaries",
    ],
  },
  aiStack: {
    heading: "Tech stack",
    tags: [
      "Next.js",
      "React",
      "Python",
      "NVIDIA NIM",
      "Local RAG",
      "Vector Database",
      "Dell Pro Max with NVIDIA GB10",
      "Multi-agent orchestration",
    ],
  },
  demo: {
    heading: "Demo",
    body: "The prototype analyzes project context and identifies a launch-critical decision.",
    example:
      "Enterprise Checkout requires a go / no-go decision. The system detects that the launch depends on QA sign-off and zero open P0 issues, then creates an actionable reminder inside Apple Reminders.",
    flow: [
      "Context",
      "reasoning",
      "decision",
      "task",
      "real-world follow-up",
    ],
    closing:
      "This proves LocalPMOS is not just a dashboard. It is an operating layer that turns company knowledge into action.",
    videoId: "deE54ieqOsI",
    caption: "Built live during the Dell × NVIDIA Local AI Hackathon.",
    screenshots: {
      items: [
        {
          src: "/images/projects/local-pm-os/dashboard.png",
          alt: "LocalPMOS dashboard",
          caption:
            "Four-panel dashboard — executive decision, top actions, Ask PM OS, and evidence explorer.",
        },
        {
          alt: "Hackathon build session",
          caption:
            "Building LocalPMOS during the Dell × NVIDIA Local AI Hackathon.",
          placeholder: true,
        },
        {
          alt: "Demo day presentation",
          caption: "Presenting the prototype at BuilderBase AI Factory.",
          placeholder: true,
        },
      ],
    },
  },
  challenges: {
    heading: "Challenges",
    items: [
      "Designing a system that could reason across fragmented company context",
      "Keeping the product local-first while still demonstrating a useful AI workflow",
      "Translating noisy signals into clear product recommendations",
      "Designing an interface that felt like an operating system rather than another chatbot",
      "Closing the loop from AI reasoning to actual task execution within a two-day build",
    ],
  },
  lessons: {
    heading: "Lessons learned",
    body: "The hardest challenge was not building another AI assistant. It was designing an operating system that remembers context, reasons over time, and takes action.",
    items: [
      "Memory is a first-class AI primitive.",
      "Context quality matters more than model size.",
      "AI becomes more valuable when it executes, not only when it answers.",
      "The future AI interface may be less about chat and more about continuous operational awareness.",
    ],
  },
  futureWork: {
    heading: "Future vision",
    body: "LocalPMOS explores a broader question: what if organizations had persistent memory?\n\nThe same architecture could support engineering, recruiting, finance, sales, customer success, operations, and every function that depends on institutional knowledge and decision quality.\n\nProduct management is simply the first environment.",
    items: [],
  },
  relatedHeading: "More AI Work",
  relatedProjects: [
    {
      title: "ReadyLead",
      description: "AI growth intelligence for commercial HVAC",
      href: "/projects/readylead",
    },
    {
      title: "ProbeIQ",
      description: "AI research intelligence for technical learning",
      href: "/projects/probeiq",
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
