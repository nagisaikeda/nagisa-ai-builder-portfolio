export type ProductMockupId =
  | "readylead"
  | "ahead"
  | "aheadIos"
  | "fedex"
  | "probeiq"
  | "pmos"
  | "pepper"
  | "borrow"
  | "aiDesignSystem";

export type WorkItem = {
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  tags: readonly string[];
  meta?: string;
  cta?: string;
  href: string | null;
  image?: string | null;
  imagePosition?: "center" | "right";
  imageAnchor?: "center" | "left";
  imageZoom?: number;
  video?: string | null;
  videoPoster?: string | null;
  cardVideos?: readonly string[];
  cardVideoPosters?: readonly string[];
  cardVideoDeviceFrame?: boolean;
  passwordProtected?: boolean;
  imageFit?: "cover" | "contain";
  imageSizes?: string;
  imageUnoptimized?: boolean;
  tint?: string;
  mockup?: ProductMockupId | null;
};

export const site = {
  name: "Nagisa Ikeda",
  role: "AI Design Engineer",
  headline:
    "Building Enterprise AI, shipping AI products, and designing AI-native systems.",
  credibility: [
    "AI Design Engineer @ FedEx Dataworks",
    "Founder @ Nara Labs",
    "2nd Place — YC AI Growth Hackathon",
  ],
  email: "hello@nagisaikeda.com",
  linkedin: "https://www.linkedin.com/in/nagisaikeda/",
  resumePage: "/resume",
  resumePdf: "/resume/nagisa-ikeda-ai-design-engineer.pdf",
  resumeDownloadName: "Nagisa-Ikeda-AI-Design-Engineer.pdf",
  /** @deprecated Use resumePage for links; resumePdf for the file */
  resume: "/resume",
  naraLabs: "https://www.nara-labs.com/",
  framerWork: "https://nagisaikeda.com/#work",
} as const;

export const heroPreview = {
  shipping: [
    { label: "2nd Place — YC AI Growth Hackathon", done: true },
    { label: "Shipped ReadyLead", done: true },
    { label: "Built ProbeIQ", done: true },
    { label: "Built Local PM OS", done: true },
  ],
  conversation: [
    {
      role: "user" as const,
      text: "Design a growth intelligence agent that identifies high-value leads and turns fragmented buyer signals into prioritized action.",
    },
    {
      role: "agent" as const,
      text: "I'll map the lead-scoring workflow, enrichment layer, decision logic, and outreach handoff.",
    },
  ],
  files: [
    { path: "readylead/agent.ts", change: "+142" },
    { path: "growth/signals.ts", change: "+88" },
  ],
} as const;

export const featuredWork = {
  id: "ai-products",
  label: "Featured",
  title: "Featured AI Work",
  description:
    "Enterprise AI, shipped AI products, and AI-native systems—the work that defines how I build.",
  items: [
    {
      title: "ReadyLead",
      category: "AI Product",
      subtitle: "YC AI Growth Hackathon — 2nd Place",
      description:
        "AI growth intelligence platform that transforms fragmented buying signals into prioritized commercial opportunities—built end-to-end from discovery to production.",
      tags: [
        "AI workflows",
        "Growth intelligence",
        "Shipping products",
        "Agent UX",
      ],
      cta: "View case study",
      href: "/projects/readylead",
      image: "/images/projects/readylead/building-analysis.png",
      imageAnchor: "left",
      tint: "#f3f1ee",
    },
    {
      title: "FedEx AI Concierge",
      category: "Enterprise AI",
      description:
        "Enterprise AI workflows for customer support—AI onboarding, multi-agent orchestration, and operational decision-making designed for large-scale deployment.",
      tags: [
        "AI onboarding",
        "Multi-agent workflows",
        "Agent orchestration",
        "Enterprise support",
      ],
      cta: "Coming soon",
      href: null,
      mockup: "fedex",
      tint: "#f3f2ef",
    },
    {
      title: "Atlas",
      category: "AI-Native Design System",
      description:
        "A machine-readable design system and reusable interaction framework for humans and AI agents—bridging design engineering, AI implementation, and design-to-code workflows.",
      tags: [
        "Design Engineering",
        "Machine-readable metadata",
        "AI-native interfaces",
        "Human + AI collaboration",
      ],
      cta: "View case study",
      href: "/design/ai-native-design-system",
      image: "/images/work/atlas.png",
      imageSizes: "(max-width: 1024px) 100vw, 700px",
      imageUnoptimized: true,
      tint: "#f0efed",
    },
    {
      title: "Ahead Agent",
      category: "Personal AI",
      description:
        "A memory-driven financial decision agent—long-term reasoning, agent UX, and persistent context for real financial decisions.",
      tags: ["Memory", "Long-term reasoning", "Agent UX", "Financial decisions"],
      cta: "Coming soon",
      href: null,
      image: "/images/work/ahead-agent.png",
      imageSizes: "(max-width: 1024px) 100vw, 700px",
      imageUnoptimized: true,
      tint: "#eef2f4",
    },
  ] satisfies readonly WorkItem[],
};

export const moreAiProducts = {
  id: "more-ai-products",
  label: "More AI",
  title: "More AI Products",
  description:
    "Additional AI systems focused on retrieval, voice, organizational memory, and product intelligence.",
  items: [
    {
      title: "ProbeIQ",
      category: "AI Product",
      description:
        "Voice AI tutor that turns educational video into grounded, conversational learning through retrieval and reasoning.",
      tags: ["Voice AI", "RAG", "Conversational tutor", "Grounded reasoning"],
      cta: "Read Case Study",
      href: "/projects/probeiq",
      image: "/images/projects/probeiq/hero.png",
      tint: "#f4f3f8",
    },
    {
      title: "Local PM OS",
      category: "AI Product",
      description:
        "AI operating system for product teams—organizational memory, product intelligence, and autonomous prioritization.",
      tags: [
        "AI operating system",
        "Organizational memory",
        "Product intelligence",
        "Autonomous prioritization",
      ],
      cta: "Read Case Study",
      href: "/projects/local-pm-os",
      image: "/images/projects/local-pm-os/dashboard.png",
      imageAnchor: "left",
      tint: "#f5f5f5",
    },
  ] satisfies readonly WorkItem[],
};

export const productDesignWork = {
  id: "product-design",
  label: "Product Design",
  title: "Selected Product Design",
  description:
    "Selected product experiences across fintech, healthcare, enterprise platforms, and consumer applications.",
  items: [
    {
      title: "Connected Wealth",
      category: "Enterprise Wealth Platform",
      description:
        "Unified fragmented wealth-management workflows into a centralized advisor platform used by 5,700+ advisors.",
      tags: [
        "JPMorgan Chase",
        "Enterprise UX",
        "Workflow Design",
        "Fintech",
      ],
      cta: "View case study",
      href: "/projects/connected-wealth",
      passwordProtected: true,
      video: "/videos/projects/connected-wealth/unified-portal.mp4",
      videoPoster: "/images/projects/connected-wealth/unified-portal.png",
      tint: "#ebe8f2",
    },
    {
      title: "Ahead iOS",
      category: "Consumer Finance App",
      description:
        "A native iOS personal finance application designed and built in SwiftUI—focused on clean financial planning, budgeting, and user experience.",
      tags: [
        "Native iOS",
        "Consumer Finance",
        "SwiftUI",
        "Founder Project",
      ],
      meta: "Shipped · App Store · April 2026",
      cta: "View case study",
      href: "/projects/ahead-ios",
      cardVideos: [
        "/videos/projects/ahead-ios/ask-ahead.mp4",
        "/videos/projects/ahead-ios/decision-history.mp4",
      ],
      tint: "#f2f5f3",
    },
    {
      title: "Healthii",
      category: "Health & Wellness App",
      description:
        "A native iOS wellness experience designed to turn daily habits into personalized, adaptive routines.",
      tags: [
        "Native iOS",
        "Healthcare",
        "Behavior Design",
        "Mobile UX",
      ],
      cta: "View case study",
      href: "/projects/healthii",
      cardVideos: [
        "/videos/projects/healthii/feature-1.mp4",
        "/videos/projects/healthii/feature-2.mp4",
      ],
      cardVideoDeviceFrame: false,
      tint: "#fafaf9",
    },
  ] satisfies readonly WorkItem[],
};

/** @deprecated Use moreAiProducts */
export const moreWork = moreAiProducts;

/** @deprecated Featured work absorbs systems */
export const systemsWork = {
  id: "systems",
  label: "Systems",
  title: "Systems",
  description: "",
  items: [] as readonly WorkItem[],
};

/** @deprecated Use featuredWork */
export const aiProducts = featuredWork;

export const currentlyBuilding = {
  label: "Currently Building",
  title: "AI systems for growth, decision-making, and product workflows.",
  body: "I prototype AI-native products across agents, memory, retrieval, local workflows, and decision systems — moving quickly from problem framing to working software.",
  chips: [] as readonly string[],
} as const;

export const buildLog = {
  year: "2026",
  entries: [
    "2nd Place — YC AI Growth Hackathon",
    "Shipped ReadyLead",
    "Built ProbeIQ",
    "Built Local PM OS",
    "Shipped Ahead iOS",
    "Building Ahead Agent",
    "Kaggle Agentic Engineering",
  ],
} as const;

export const whatIBring = {
  id: "what-i-bring",
  eyebrow: "What I Bring",
  headline: "Enterprise AI. Shipped products. AI-native systems.",
  items: [
    {
      title: "Enterprise AI",
      sentence:
        "Design complex AI workflows—multi-agent systems, onboarding, and orchestration for enterprise operations at scale.",
    },
    {
      title: "AI Product Builder",
      sentence:
        "Ship AI products from customer discovery to production software—strategy, agent UX, and implementation.",
    },
    {
      title: "AI-Native Design Systems",
      sentence:
        "Build systems and developer workflows that help humans and AI agents design, document, and ship faster.",
    },
  ],
} as const;

/** @deprecated Use whatIBring */
export const capabilities = {
  eyebrow: whatIBring.eyebrow,
  headlineLines: [whatIBring.headline],
  groups: whatIBring.items.map((item) => ({
    title: item.title,
    sentence: item.sentence,
    tags: [] as readonly string[],
  })),
  aiStack: {
    label: "AI Stack",
    groups: [] as readonly { title: string; items: readonly string[] }[],
  },
} as const;
