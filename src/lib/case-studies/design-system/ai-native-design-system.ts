import type { AtlasStory } from "@/lib/case-studies/design-system/types";

export const atlasStory: AtlasStory = {
  slug: "ai-native-design-system",
  eyebrow: "Nara Labs · Design Engineering",
  title: "Atlas",
  headline: "An interaction framework for AI-native software.",
  supportingCopy:
    "A reusable system for designing how humans and AI agents plan, act, communicate uncertainty, request approval, and collaborate.",
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
        "Figma · React · Next.js · TypeScript · Tailwind · Cursor · Claude Code",
    },
  ],
  whyBuilt: {
    heading: "Why I built Atlas",
    quote:
      "After building several AI-native products, I realized that traditional design systems stop at buttons, forms, and dialogs. They don't define how AI agents plan, ask for approval, stream responses, manage memory, or collaborate with humans. Atlas is my attempt to create a reusable interaction framework for AI-native software.",
    progression: [
      "AI products",
      "recurring interaction problems",
      "reusable patterns",
      "Atlas",
    ],
  },
  patterns: {
    heading: "AI Interaction Patterns",
    intro:
      "Atlas defines interaction patterns for agent-native software—not generic UI primitives. Each pattern addresses a specific moment in how humans and agents collaborate.",
    items: [
      {
        id: "agent-status",
        name: "Agent Status",
        purpose:
          "Makes agent identity, objective, lifecycle state, and activity continuously visible.",
        stateExample:
          "idle · planning · executing · awaiting approval · blocked · completed · failed",
        implementation:
          "Typed React component with 12 lifecycle states, live regions, and progress semantics.",
        status: "experimental",
      },
      {
        id: "plan-preview",
        name: "Plan Preview",
        purpose:
          "Surfaces intended steps before execution so users can evaluate agent intent.",
        stateExample:
          "Proposed plan → step completion → active step highlight",
        status: "draft",
      },
      {
        id: "human-approval",
        name: "Human Approval",
        purpose:
          "Pauses high-impact actions and requests explicit human authorization.",
        stateExample:
          "Review action → approve · reject · edit",
        status: "draft",
      },
      {
        id: "streaming-response",
        name: "Streaming Response",
        purpose:
          "Communicates progress and partial results during long-running agent work.",
        stateExample:
          "Partial output · progress indicator · activity updates",
        implementation:
          "Currently expressed through Agent Status progress and activity surfaces; dedicated streaming component in development.",
        status: "draft",
      },
      {
        id: "memory",
        name: "Memory",
        purpose:
          "Surfaces saved context, preferences, and prior decisions for review and control.",
        stateExample:
          "Retrieved context · key-value memory · last review",
        status: "planned",
      },
      {
        id: "tool-call",
        name: "Tool Call",
        purpose:
          "Shows when an agent invokes an external service, what it is doing, and the outcome.",
        stateExample:
          "search_contracts → input payload → success · failure",
        status: "draft",
      },
    ],
  },
  principles: {
    heading: "Design principles",
    items: [
      {
        title: "AI-readable",
        description:
          "Documentation, naming, and APIs are structured so coding agents can implement patterns correctly.",
      },
      {
        title: "Human-legible",
        description:
          "Agent behavior remains understandable at a glance—never hidden behind generic loading states.",
      },
      {
        title: "Explicit state",
        description:
          "Lifecycle, intent, and accountability are visible through structured status surfaces.",
      },
      {
        title: "Composable",
        description:
          "Patterns combine into workflows rather than forcing one-off screen designs.",
      },
      {
        title: "Code-aligned",
        description:
          "Design decisions map directly to typed React components and documented behavior.",
      },
      {
        title: "Safe by default",
        description:
          "High-impact actions pause for approval; oversight scales with risk.",
      },
    ],
  },
  architecture: {
    heading: "System architecture",
    layers: [
      "Design tokens",
      "UI primitives",
      "AI interaction components",
      "Product patterns",
      "Examples and templates",
      "Production interfaces",
    ],
    body: "Atlas connects visual foundations, interaction behavior, documentation, and code so the same pattern can be understood by designers, engineers, and AI coding agents.",
  },
  documentation: {
    heading: "Built as a working system, not a concept",
    body: "Atlas includes documented interaction patterns, typed React components, implementation guidance, examples, and a machine-readable registry.",
  },
  workflow: {
    heading: "AI-native workflow",
    steps: [
      "Problem framing",
      "Interaction model",
      "Pattern selection",
      "Interface design",
      "React implementation",
      "Documentation and registry",
    ],
    body: "The workflow moves from recurring product problems to documented, implementable patterns—keeping product judgment and interaction quality under human control.",
  },
  informedBy: {
    heading: "Patterns emerged through practice",
    body: "Across several AI product explorations, the same interaction challenges kept appearing: unclear agent state, invisible tool use, weak approval moments, and limited user control. Atlas turns those observations into reusable patterns.",
    projects: [
      {
        title: "ReadyLead",
        href: "/projects/readylead",
        image: "/images/projects/readylead/hero.png",
      },
      {
        title: "ProbeIQ",
        href: "/projects/probeiq",
        image: "/images/projects/probeiq/hero.png",
      },
      {
        title: "Local PM OS",
        href: "/projects/local-pm-os",
        image: "/images/projects/local-pm-os/hero.png",
      },
      {
        title: "FedEx AI Concierge",
      },
    ],
  },
  outcome: {
    heading: "Outcome",
    items: [
      "A documented AI interaction framework",
      "Typed React components with maturity stages",
      "Reusable behavior and state models",
      "An interactive component playground for Agent Status",
      "A machine-readable component registry",
      "A foundation for future AI-native products",
    ],
  },
  ctas: {
    docsLabel: "Explore Atlas documentation",
    docsHref: "https://atlas.design/docs/introduction",
    sourceLabel: "View source code",
    sourceHref:
      "https://github.com/nagisaikeda/atlas-agent-native-design-system",
  },
  backLabel: "Back to work",
  backHref: "/#ai-products",
};

/** @deprecated Use atlasStory */
export const aiNativeDesignSystemStory = atlasStory;
