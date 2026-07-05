import type { DesignSystemStory } from "@/lib/case-studies/design-system/types";

export const aiNativeDesignSystemStory: DesignSystemStory = {
  slug: "ai-native-design-system",
  title: "Ai-Native Design System",
  subtitle:
    "A design system built for humans and AI agents to design, code, document, and ship products faster.",
  meta: [
    {
      label: "Role",
      value: "Product Designer · Design Engineer · Founder",
    },
    { label: "Context", value: "Nara Labs" },
    { label: "Timeline", value: "Ongoing" },
    {
      label: "Stack",
      value:
        "Figma · React · Next.js · Tailwind · TypeScript · Cursor · Claude Code · OpenAI",
    },
  ],
  tldr: "Modern design systems should do more than keep interfaces visually consistent. They should help AI generate better code.\n\nI built this system as a shared language between designers, engineers, and AI agents. Every component is tokenized, documented, reusable, and optimized for AI-assisted development.\n\nThe goal is to move from idea to production in hours instead of days.",
  problem: {
    heading: "The problem",
    intro: "Traditional design systems were built for human handoff. But modern product teams increasingly build with AI coding assistants.",
    bullets: [
      "Inconsistent documentation",
      "Missing implementation details",
      "Duplicated components",
      "Disconnected Figma and code",
      "Poor token management",
      "No AI-readable specifications",
    ],
    closing:
      "AI can only generate high-quality interfaces if the design system itself is structured, reusable, and machine-readable.",
  },
  thesis: {
    heading: "Design systems are becoming AI infrastructure",
    body: "A modern design system is no longer just a UI library. It is an operating layer that helps humans and AI agents design, build, and maintain products together.\n\nThe better the system, the better AI can generate consistent, production-ready interfaces.",
  },
  principles: {
    heading: "Design principles",
    cards: [
      {
        title: "AI-readable",
        description:
          "Every component includes clear usage rules, props, states, and implementation guidance.",
      },
      {
        title: "Single source of truth",
        description:
          "Design tokens, components, and code map to the same system.",
      },
      {
        title: "Code-first",
        description:
          "Design decisions translate directly into reusable React components.",
      },
      {
        title: "Composable",
        description:
          "Components are built as primitives, patterns, and templates rather than one-off screens.",
      },
      {
        title: "Agent-friendly",
        description:
          "The system is optimized for Cursor, Claude Code, OpenAI, and future coding agents.",
      },
    ],
  },
  architecture: {
    heading: "System architecture",
    layers: [
      "Design Tokens",
      "Primitive Components",
      "Composite Components",
      "Product Patterns",
      "Templates",
      "Shipped Products",
    ],
    body: "Each layer builds on the previous one. Changing a token updates the entire product surface, while reusable patterns allow new AI products to be created faster without redesigning the same foundations.",
  },
  workflow: {
    heading: "AI-native workflow",
    steps: [
      "Problem framing",
      "AI-assisted user flows",
      "Component selection",
      "Cursor implementation",
      "Claude Code review",
      "Human refinement",
      "Production deployment",
    ],
    body: "The workflow reduces repetitive production work while keeping product judgment, interaction quality, and final taste under human control.",
  },
  componentSystem: {
    heading: "Component system",
    image: "/images/work/ai-native-design-system.png",
    imageAlt: "AI-native design system overview",
    categories: [
      {
        title: "Core UI",
        items: [
          "Buttons",
          "Inputs",
          "Cards",
          "Modals",
          "Tabs",
          "Tables",
          "Forms",
        ],
      },
      {
        title: "AI Product Components",
        items: [
          "Prompt Inputs",
          "Streaming Responses",
          "Agent Status",
          "Memory Cards",
          "Tool Calls",
          "File Upload",
          "Knowledge Search",
          "Voice Controls",
        ],
      },
      {
        title: "Product Patterns",
        items: [
          "Dashboards",
          "Chat Interfaces",
          "Command Palettes",
          "Workflow Timelines",
          "Research Panels",
          "Onboarding Flows",
        ],
      },
    ],
  },
  toolkit: {
    heading: "Toolkit",
    groups: [
      {
        title: "Models",
        items: [
          "OpenAI",
          "Claude",
          "Gemini",
          "Qwen",
          "MiniMax",
          "DeepSeek",
        ],
      },
      {
        title: "Engineering",
        items: [
          "TypeScript",
          "React",
          "Next.js",
          "Python",
          "FastAPI",
          "Convex",
          "Vercel",
        ],
      },
      {
        title: "AI Systems",
        items: [
          "Agents",
          "MCP",
          "RAG",
          "Memory",
          "Vector Databases",
          "Vapi",
          "LiveKit",
          "Evals",
        ],
      },
      {
        title: "Workflow",
        items: ["Cursor", "Claude Code", "GitHub", "Figma"],
      },
    ],
  },
  exampleProducts: {
    heading: "Products built with this system",
    body: "The system allowed multiple AI products to share consistent visual language, interaction patterns, and engineering foundations without starting from zero each time.",
    projects: [
      {
        title: "ReadyLead",
        description: "AI growth intelligence for commercial HVAC",
        href: "/projects/readylead",
      },
      {
        title: "Local PM OS",
        description: "Local-first product operating system",
        href: "/projects/local-pm-os",
      },
      {
        title: "ProbeIQ",
        description: "Multimodal AI tutor for educational video",
        href: "/projects/probeiq",
      },
      {
      title: "Ahead Agent",
      description: "Memory-driven financial decision agent (coming soon)",
      href: "/#ai-products",
      },
      {
        title: "Nara Labs Website",
        description: "Nara Labs product and company surface",
        href: "https://naralabs.com",
      },
    ],
  },
  built: {
    heading: "What I built",
    intro:
      "I designed and built the foundation for an AI-native product system that supports both human creativity and AI-assisted implementation.",
    items: [
      "Visual language",
      "Design tokens",
      "Reusable React components",
      "AI-specific interaction patterns",
      "Prompt and agent UI components",
      "Documentation structure",
      "Cursor implementation workflows",
      "Portfolio and Nara Labs product surfaces",
    ],
  },
  lessons: {
    heading: "Lessons learned",
    items: [
      "Design systems are no longer static UI kits; they are product infrastructure.",
      "AI-generated interfaces are only as good as the systems they are grounded in.",
      "The most valuable design work is often deciding what should become reusable.",
      "The future of design engineering is not handoff. It is co-building with AI.",
    ],
  },
  outcome: {
    heading: "Outcome",
    result:
      "A reusable AI-native design system powering Nara Labs projects and my personal portfolio.",
    impacts: [
      "Faster prototyping",
      "More consistent AI product interfaces",
      "Reduced design duplication",
      "Better design-to-code alignment",
      "Stronger foundation for future products",
    ],
  },
  relatedHeading: "Related work",
  relatedProjects: [
    {
      title: "ReadyLead",
      description: "AI growth intelligence for commercial HVAC",
      href: "/projects/readylead",
    },
    {
      title: "Local PM OS",
      description: "Local-first product operating system",
      href: "/projects/local-pm-os",
    },
    {
      title: "ProbeIQ",
      description: "Multimodal AI tutor for educational video",
      href: "/projects/probeiq",
    },
    {
      title: "Connected Wealth",
      description: "Unified wealth platform for global advisors",
      href: "/projects/connected-wealth",
    },
  ],
  backLabel: "Back to Design Work",
  backHref: "/#product-design",
};
