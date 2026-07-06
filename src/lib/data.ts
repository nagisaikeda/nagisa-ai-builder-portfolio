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
  headlineLines: [
    "Nagisa Ikeda is an AI design engineer building ambitious agentic products.",
  ],
  credibility: [
    "AI Design Engineer @ FedEx Dataworks",
    "Founder @ Nara Labs",
    "2nd Place — YC AI Growth Hackathon",
  ],
  proof:
    "Shipped ReadyLead · Built ProbeIQ · Built Local PM OS · Shipped Ahead iOS · Building Ahead Agent",
  progression:
    "Enterprise Product Design → AI Product Design → AI Systems → Design Engineering → Founder",
  email: "hello@nagisaikeda.com",
  linkedin: "https://www.linkedin.com/in/nagisaikeda/",
  resume: "/resume/nagisa-ikeda-ai-design-engineer.pdf",
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

export const currentlyBuilding = {
  label: "Currently Building",
  title: "AI systems for growth, decision-making, and product workflows.",
  body: "I prototype AI-native products across agents, memory, retrieval, local workflows, and decision systems — moving quickly from problem framing to working software.",
  chips: [
    "Agents",
    "RAG",
    "Memory",
    "AI Workflows",
    "Decision Systems",
    "Local AI",
    "Next.js",
    "Python",
    "OpenAI",
    "FastAPI",
  ],
} as const;

export const aiProducts = {
  id: "ai-products",
  label: "Featured",
  title: "Featured AI Products",
  description:
    "AI-native products, systems, and design engineering — from agentic workflows to the infrastructure that powers them.",
  items: [
    {
      title: "ReadyLead",
      category: "AI Growth Intelligence",
      description:
        "AI growth intelligence platform that transforms fragmented public signals into prioritized commercial opportunities.",
      meta: "2nd Place — YC AI Growth Hackathon",
      cta: "View case study",
      tags: [] as readonly string[],
      href: "/projects/readylead",
      image: "/images/projects/readylead/building-analysis.png",
      imageAnchor: "left",
      tint: "#f3f1ee",
    },
    {
      title: "ProbeIQ",
      category: "Multimodal AI",
      description:
        "Transforms educational videos into conversational AI tutors using retrieval, voice, and grounded reasoning.",
      tags: [] as readonly string[],
      cta: "View case study",
      href: "/projects/probeiq",
      image: "/images/projects/probeiq/hero.png",
      tint: "#f4f3f8",
    },
    {
      title: "Local PM OS",
      category: "AI Operating System",
      description:
        "A local-first operating system that continuously builds organizational memory and helps AI-native product teams make better decisions.",
      tags: [] as readonly string[],
      cta: "View case study",
      href: "/projects/local-pm-os",
      image: "/images/projects/local-pm-os/dashboard.png",
      imageAnchor: "left",
      tint: "#f5f5f5",
    },
    {
      title: "AI-Native Design System",
      category: "Design Engineering",
      description:
        "A reusable design system built for humans and AI agents to design, code, document, and ship AI products faster.",
      tags: [] as readonly string[],
      cta: "View case study",
      href: "/design/ai-native-design-system",
      image: "/images/work/ai-native-design-system.png",
      imageSizes: "(max-width: 1024px) 100vw, 700px",
      imageUnoptimized: true,
      tint: "#f0efed",
    },
    {
      title: "Ahead Agent",
      category: "Personal AI",
      description:
        "A next-generation memory-driven financial decision agent built using modern LLM workflows.",
      tags: [] as readonly string[],
      cta: "Coming soon",
      href: null,
      image: "/images/work/ahead-agent.png",
      imageSizes: "(max-width: 1024px) 100vw, 700px",
      imageUnoptimized: true,
      tint: "#eef2f4",
    },
    {
      title: "FedEx AI Concierge",
      category: "Enterprise AI",
      description:
        "Exploring AI-native workflows for enterprise customer support and operations.",
      tags: [] as readonly string[],
      cta: "Coming soon",
      href: null,
      mockup: "fedex",
      tint: "#f3f2ef",
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
      meta: "✅ Shipped · App Store · April 2026",
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

export const capabilities = {
  eyebrow: "Capabilities",
  headlineLines: [
    "Building AI-native products",
    "from strategy to production.",
  ],
  groups: [
    {
      title: "Product",
      sentence:
        "Designing AI-native experiences from product strategy through interaction design.",
      tags: [
        "Product Strategy",
        "AI UX",
        "Systems Design",
        "Design Systems",
      ],
    },
    {
      title: "AI Systems",
      sentence:
        "Designing intelligent workflows with agents, retrieval, memory, and reasoning.",
      tags: [
        "Agents",
        "RAG",
        "Memory",
        "Model Context Protocol (MCP)",
        "Evals",
        "Prompt Engineering",
      ],
    },
    {
      title: "Engineering",
      sentence:
        "Building production-ready prototypes with modern web technologies.",
      tags: [
        "TypeScript",
        "Next.js",
        "React",
        "Python",
        "FastAPI",
        "REST APIs",
        "Vercel",
      ],
    },
    {
      title: "Shipping",
      sentence:
        "Moving quickly from idea to working software through rapid iteration.",
      tags: [
        "Rapid Prototyping",
        "0→1 Products",
        "Hackathons",
        "Customer Discovery",
        "Product Thinking",
      ],
    },
  ],
  aiStack: {
    label: "AI Stack",
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
} as const;
