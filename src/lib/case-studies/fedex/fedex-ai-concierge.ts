import type { FedExStory } from "@/lib/case-studies/fedex/types";

const imageBase = "/images/projects/fedex-ai-concierge";

export const fedexAiConciergeStory: FedExStory = {
  slug: "fedex-ai-concierge",
  eyebrow: "Enterprise AI · Multimodal Interaction · Multi-Agent Systems",
  title: "FedEx AI Concierge Experience",
  problem:
    "How might enterprise users configure complex AI workflows using natural conversation, voice, and structured controls while maintaining transparency, trust, and control?",
  subtitle:
    "Designing a multimodal interaction model where natural language becomes structured enterprise configuration—without sacrificing human oversight.",
  summary:
    "I designed the interaction foundation for FedEx AI Concierge: multimodal input, intent translation, human-in-the-loop control, and reusable AI patterns later used by the Sierra AI team.",
  meta: [
    { label: "Role", value: "AI Product Designer" },
    { label: "Company", value: "FedEx Dataworks" },
    {
      label: "Focus",
      value:
        "Multimodal AI, Intent Translation, Multi-Agent Orchestration, Enterprise Trust",
    },
    {
      label: "Status",
      value: "Shipped foundation / adopted internally",
    },
  ],
  hero: {
    src: `${imageBase}/agent-mode-setup.png`,
    alt: "FedEx account setup with Ask FedEx sidebar in agent mode alongside structured onboarding controls",
    caption:
      "Sanitized concept — structured onboarding and conversational agent mode share one workflow state.",
  },
  opportunity: {
    heading: "The opportunity",
    body: "Enterprise AI systems ask users to configure workflows that used to live in forms, tickets, and tribal knowledge. Natural language makes that configuration faster—but only if the system can translate intent into structured decisions that operators can inspect, edit, and trust.\n\nThe opportunity was not to design a chatbot. It was to design the interaction layer between human intent and machine orchestration.",
    visual: {
      src: `${imageBase}/dashboard.png`,
      alt: "FedEx enterprise dashboard with Felix AI concierge entry point integrated into shipping workflows",
      caption:
        "AI enters the product as a first-class capability—not a bolt-on chat widget.",
    },
  },
  whyDifferent: {
    heading: "Why enterprise AI onboarding is different",
    intro:
      "Traditional product onboarding teaches navigation. Enterprise AI onboarding teaches a mental model: what the system can do, how it reasons, where agency sits, and when a human must intervene.",
    contrasts: [
      {
        traditional: "Learn where features live",
        enterpriseAi: "Learn what the system can and cannot decide",
      },
      {
        traditional: "Complete a setup checklist",
        enterpriseAi: "Express intent and review machine interpretation",
      },
      {
        traditional: "Configure static settings",
        enterpriseAi: "Author workflows that agents will execute",
      },
      {
        traditional: "Trust comes from familiarity",
        enterpriseAi: "Trust comes from transparency and control",
      },
    ],
    closing:
      "The first experience had to establish that contract—before users could rely on AI for operational work.",
  },
  principles: {
    heading: "Design principles",
    items: [
      {
        title: "Conversation proposes. Structure confirms.",
        description:
          "Natural language accelerates intent capture. Structured UI makes every decision visible and editable.",
      },
      {
        title: "One face, many capabilities.",
        description:
          "Users work with a coherent partner. Multi-agent orchestration stays behind a single interaction model.",
      },
      {
        title: "Reveal complexity when it earns trust.",
        description:
          "Progressive disclosure surfaces reasoning, handoffs, and constraints only when they help users act with confidence.",
      },
      {
        title: "Human control is a primary path.",
        description:
          "Correction, override, and approval are not edge cases. They are core interaction patterns.",
      },
      {
        title: "Design the reusable language.",
        description:
          "Status, handoff, waiting, explanation, and recovery must scale across agents and products.",
      },
    ],
  },
  multimodal: {
    heading: "Multimodal interaction model",
    intro:
      "Users should not choose between speaking, typing, and clicking. Each modality has a job—and the system should let them move freely between fluid expression and precise control.",
    modes: [
      {
        title: "Voice",
        description:
          "Capture intent quickly when context is spoken, situational, or faster than typing.",
      },
      {
        title: "Chat",
        description:
          "Clarify ambiguity, ask follow-ups, and keep a durable record of the exchange.",
      },
      {
        title: "Structured UI",
        description:
          "Inspect fields, constraints, permissions, and configuration states with full editability.",
      },
    ],
    flow: [
      {
        title: "Express",
        description: "User states a goal in voice or chat",
      },
      {
        title: "Interpret",
        description: "System proposes structured understanding",
      },
      {
        title: "Inspect",
        description: "User reviews editable configuration",
      },
      {
        title: "Confirm",
        description: "Human approves before execution",
      },
    ],
    visual: {
      src: `${imageBase}/tracking-conversation.png`,
      alt: "FedEx homepage with Ask FedEx sidebar showing package tracking conversation alongside structured tracking controls",
      caption:
        "Chat and structured controls coexist on the same surface—modalities share state.",
    },
    caption:
      "Modalities share one state. Switching channels never restarts the work.",
  },
  voiceStructured: {
    heading: "Voice + structured UI",
    intro:
      "Voice alone is too opaque for enterprise configuration. Forms alone are too slow for complex intent. The design couples them.",
    body: "Speech and chat open the workflow. Structured controls close it. The AI drafts a configuration object; the interface exposes that object as something a person can verify field by field—without forcing them to rebuild it from scratch.",
    pairings: [
      {
        title: "Speak the goal",
        description:
          "“Set up routing for exception handling across these lanes.”",
      },
      {
        title: "See the interpretation",
        description:
          "Goals become parameters, constraints, and proposed agent responsibilities.",
      },
      {
        title: "Edit with precision",
        description:
          "Operators adjust values, permissions, and escalation paths in structured controls.",
      },
      {
        title: "Return to conversation",
        description:
          "Ambiguity or exceptions can be resolved in chat without leaving the configuration context.",
      },
    ],
    visual: {
      src: `${imageBase}/introduction-step.png`,
      alt: "FedEx account setup step with voice-ready indicator, account type selection cards, and Ask FedEx guidance",
      caption:
        "Voice-ready entry points sit alongside structured selection—users choose how to proceed.",
    },
  },
  intent: {
    heading: "Intent translation",
    intro:
      "The core system behavior is translation: turning natural language into enterprise-ready configuration while keeping every inference inspectable.",
    stages: [
      {
        title: "Raw intent",
        description: "What the user said or typed",
      },
      {
        title: "Interpreted goal",
        description: "Normalized objective and scope",
      },
      {
        title: "Structured draft",
        description: "Fields, constraints, and agent responsibilities",
      },
      {
        title: "Human review",
        description: "Edits, approvals, and withheld actions",
      },
      {
        title: "Executable plan",
        description: "Configuration ready for orchestration",
      },
    ],
    visual: {
      src: `${imageBase}/review-confirm.png`,
      alt: "FedEx review and confirm screen with structured account data and Ask FedEx sidebar showing agent mode activity",
      caption:
        "AI-gathered configuration rendered as editable structure—nothing ships without review.",
    },
    caption:
      "Nothing becomes operational until the human-readable draft is accepted.",
  },
  felix: {
    heading: "Felix AI as an onboarding partner",
    intro:
      "Felix is not a tour guide. It is an AI partner that helps users author their first meaningful workflow—teaching the system by doing real work.",
    body: "Instead of walking through feature lists, Felix helps users express intent, draft configuration, surface uncertainty, and invite correction. The first session establishes the operating contract: the AI proposes; the human decides.",
    responsibilities: [
      "Guide users into a first real configuration task",
      "Translate conversational intent into structured drafts",
      "Reveal uncertainty and ask for missing enterprise context",
      "Keep orchestration coherent across specialized agents",
      "Preserve clear points for human review and control",
    ],
    visual: {
      src: `${imageBase}/agent-mode-setup.png`,
      alt: "Ask FedEx in agent mode configuring a business account with structured onboarding steps visible",
      caption:
        "Agent mode drafts and queues steps—the user always sees what is planned before submission.",
    },
    caption:
      "Users perceive one partner. The system coordinates capabilities behind that relationship.",
  },
  patterns: {
    heading: "Reusable AI patterns",
    intro:
      "The interaction language was designed to outlive a single flow—so other teams could reuse the same signals for trust, status, and control.",
    items: [
      {
        name: "Intent capture",
        purpose: "Collect goals through voice or chat without forcing premature form fill.",
      },
      {
        name: "Interpretation preview",
        purpose: "Show how the system understood the request before acting.",
      },
      {
        name: "Editable configuration",
        purpose: "Expose AI drafts as structured, human-owned controls.",
      },
      {
        name: "Uncertainty prompt",
        purpose: "Ask for missing context instead of guessing silently.",
      },
      {
        name: "Agent status",
        purpose: "Communicate active work without exposing system noise.",
      },
      {
        name: "Handoff",
        purpose: "Signal when specialized capabilities take over a step.",
      },
      {
        name: "Progress and waiting",
        purpose: "Keep long-running orchestration legible and trustworthy.",
      },
      {
        name: "Explainability",
        purpose: "Surface enough reasoning for operators to judge outcomes.",
      },
      {
        name: "Human override",
        purpose: "Make correction and intervention a primary path.",
      },
      {
        name: "Permissions and consent",
        purpose: "Keep access requests scoped, explicit, and reviewable.",
      },
    ],
  },
  designSystem: {
    heading: "AI-native design system",
    metrics: [
      { value: "12", label: "Product teams" },
      { value: "200+", label: "Designers" },
      { value: "35%", label: "Faster design-to-code handoff" },
    ],
    body: "Alongside the product experience, I led the evolution of an AI-ready enterprise design system—tokens, components, semantic metadata, and implementation guidance that helped teams ship consistent AI interfaces at scale.",
    influence:
      "The Concierge interaction patterns became a foundation used by the Sierra AI team at FedEx. The machine-readable system enabled AI-assisted implementation across product delivery.",
    layers: [
      {
        title: "Design foundation",
        description:
          "Tokens, components, interaction standards, and reusable AI patterns",
      },
      {
        title: "Machine-readable documentation",
        description:
          "Semantic metadata, behavioral constraints, and implementation guidance",
      },
      {
        title: "AI-assisted delivery",
        description:
          "Structured design-system knowledge that enabled AI coding tools to support implementation",
      },
    ],
    diagramPlaceholder:
      "[AI-native design system: Figma → semantic metadata → coded components → AI-assisted implementation]",
  },
  reflection: {
    heading: "Reflection",
    items: [
      "Enterprise AI design is less about screens and more about the contract between human intent and machine action.",
      "Multimodal interfaces work when modalities share state—voice, chat, and structured controls must describe the same underlying configuration.",
      "Trust scales when interpretation is visible: users need to see what the system understood before they allow it to act.",
      "The durable output of AI product design is often the pattern language and design infrastructure that other teams inherit.",
    ],
  },
  next: {
    title: "Atlas — AI-Native Design System",
    description:
      "A machine-readable design system and reusable interaction framework for humans and AI agents.",
    href: "/design/ai-native-design-system",
    cta: "View the system behind scalable AI product delivery",
  },
  backLabel: "Back to work",
  backHref: "/#ai-products",
};
