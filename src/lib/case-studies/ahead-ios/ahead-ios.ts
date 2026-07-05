import type { AheadIosStory } from "./types";

export const aheadIosStory: AheadIosStory = {
  slug: "ahead-ios",
  title: "Ahead iOS",
  subtitle: "Native iOS Personal Finance",
  description:
    "A native iOS personal finance application designed and built in SwiftUI—focused on clean financial planning, budgeting, and a calm mobile experience.",
  shippedBadge: "Shipped to the Apple App Store · April 2026",
  appStoreUrl:
    "https://apps.apple.com/us/app/vault-ai-by-nagisa/id6762421739",
  meta: [
    { label: "Launch", value: "April 2026" },
    { label: "Status", value: "✅ Live on the Apple App Store" },
    {
      label: "Role",
      value: "Founder · Product Designer · iOS Developer",
    },
    { label: "Platform", value: "Native iOS (SwiftUI)" },
    { label: "Stack", value: "SwiftUI · Figma · Xcode · GitHub" },
  ],
  overview: {
    heading: "Overview",
    paragraphs: [
      "Most personal finance apps overwhelm people with dashboards, categories, and bookkeeping tasks. Ahead iOS takes a different approach: help users understand what they can safely spend and stay on track with their goals.",
      "I designed and built the full product—from interaction model and visual language through SwiftUI implementation and App Store submission.",
    ],
  },
  productDesign: {
    heading: "Product Design",
    body: "The product centers on clarity over complexity—reducing cognitive load while keeping essential financial context visible.",
    highlights: [
      "Safe-to-spend as the primary decision surface",
      "Weekly budget rhythm instead of daily anxiety",
      "Goal progress without spreadsheet complexity",
      "Calm visual hierarchy for financial information",
      "Native iOS patterns users already understand",
    ],
  },
  mobileUx: {
    heading: "Mobile UX",
    body: "Every screen was designed for one-handed use, glanceability, and quick return visits—not long analysis sessions.",
    screens: [
      {
        src: "/images/projects/ahead-ios/dashboard.png",
        alt: "Ahead iOS safe-to-spend dashboard",
        caption: "Dashboard — safe-to-spend at a glance with weekly context.",
      },
      {
        src: "/images/projects/ahead-ios/goals.png",
        alt: "Ahead iOS goals and weekly budget screens",
        caption: "Goals & budget — progress tracking with a clear weekly rhythm.",
      },
      {
        src: "/images/projects/ahead-ios/onboarding.png",
        alt: "Ahead iOS onboarding flow",
        caption: "Onboarding — fast setup without bank-form fatigue.",
      },
    ],
  },
  featureDemos: {
    heading: "Feature demos",
    description:
      "Key product interactions—conversational guidance, decision history, and voice-native input—in motion.",
    items: [
      {
        title: "Ask Ahead",
        description:
          "Think through real financial questions with contextual guidance before spending.",
        src: "/videos/projects/ahead-ios/ask-ahead.mp4",
      },
      {
        title: "Decision history",
        description:
          "Review past decisions and tradeoffs to build clarity over time.",
        src: "/videos/projects/ahead-ios/decision-history.mp4",
      },
      {
        title: "Voice add",
        description:
          "Add transactions and accounts by voice—fast input without typing.",
        src: "/videos/projects/ahead-ios/voice-add.mp4",
      },
    ],
  },
  interactionDesign: {
    heading: "Interaction Design",
    body: "Interactions prioritize speed, feedback, and confidence—so users can check their finances and move on with their day.",
    patterns: [
      "Progressive onboarding with minimal required input",
      "Clear primary actions on every screen",
      "Consistent navigation between accounts, goals, and spending",
      "Haptic and visual feedback for key confirmations",
      "Readable typography and spacing for financial data",
    ],
  },
  swiftui: {
    heading: "SwiftUI Implementation",
    body: "The app was built as a fully native SwiftUI product—not a prototype wrapper—so design decisions translated directly into production code.",
    stack: [
      "SwiftUI views and navigation",
      "Reusable component library",
      "RevenueCat subscription flow",
      "Face ID secure access",
      "Apple Human Interface Guidelines",
      "TestFlight → App Store release",
    ],
  },
  appStore: {
    heading: "App Store Launch",
    body: "Shipped as a complete consumer product in April 2026—from working onboarding to subscription and store listing.",
    checklist: [
      "Live on the Apple App Store",
      "Fully native SwiftUI",
      "Interactive navigation",
      "Working onboarding",
      "Subscription flow",
      "App Store metadata and screenshots",
    ],
    image: "/images/projects/ahead-ios/onboarding.png",
    imageAlt: "Ahead iOS App Store-ready onboarding screens",
  },
  relatedHeading: "More product design work",
  relatedProjects: [
    {
      title: "Connected Wealth",
      description: "Enterprise wealth platform for 5,700+ advisors at J.P. Morgan Chase.",
      href: "/projects/connected-wealth",
    },
    {
      title: "Healthii",
      description: "Native iOS wellness experience for adaptive daily routines.",
      href: "/projects/healthii",
    },
  ],
  backLabel: "Back to Design Work",
  backHref: "/#product-design",
};
