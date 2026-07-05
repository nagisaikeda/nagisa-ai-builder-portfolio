import type { HealthiiStory } from "./types";

export const healthiiStory: HealthiiStory = {
  slug: "healthii",
  title: "Healthii",
  subtitle: "Designing Behavior Change for Everyday Wellness",
  description:
    "A native iOS wellness concept designed to help busy people build healthier routines through short cooking, movement, and habit-guidance experiences.",
  heroImages: [
    {
      src: "/images/projects/healthii/blogs.jpg",
      alt: "Healthii Blogs library screen showing wellness articles and saved content",
    },
    {
      src: "/images/projects/healthii/move-with-me.jpg",
      alt: "Healthii Move with me exercise detail screen with video and instructions",
    },
  ],
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Platform", value: "Native iOS" },
    { label: "Timeline", value: "4 Weeks" },
    { label: "Focus", value: "Behavior Design" },
  ],
  featureDemos: {
    heading: "Feature demos",
    description:
      "Native iOS interactions for daily wellness routines—short sessions, saved content, and gentle habit support in motion.",
    items: [
      {
        title: "Daily Guide",
        description:
          "Short cooking and movement videos designed for everyday routines.",
        src: "/videos/projects/healthii/feature-1.mp4",
      },
      {
        title: "Library & Progress",
        description:
          "Save favorite wellness content and track gentle progress over time.",
        src: "/videos/projects/healthii/feature-2.mp4",
      },
    ],
  },
  tldr:
    "Healthii explores how mobile design can make healthier choices feel convenient, affordable, and emotionally approachable.\n\nInstead of designing another fitness tracker, I focused on lightweight daily routines: quick meals, short movement sessions, saved content, and gentle progress support.",
  problem: {
    heading: "Healthy routines often fail because they are inconvenient.",
    body: "Many wellness products assume users have time, money, and motivation. In reality, busy people need routines that fit into daily life.",
    bullets: [
      "Limited time",
      "Expensive gyms or food options",
      "Lack of accountability",
      "Too much friction to start",
      "Difficulty maintaining habits over time",
    ],
  },
  thesis: {
    heading: "Make healthy behavior feel easy to start.",
    body: "Healthii was designed around one core idea: users are more likely to build healthier habits when the product reduces effort, supports small wins, and makes the next action obvious.",
  },
  solution: {
    heading: "Solution",
    cards: [
      {
        title: "Daily Guide",
        description:
          "Short cooking and exercise videos designed for everyday routines.",
      },
      {
        title: "Library",
        description:
          "A place to save favorite recipes, movement sessions, and wellness content.",
      },
      {
        title: "Progress Support",
        description:
          "Gentle reminders and progress cues to help users stay consistent without feeling judged.",
      },
    ],
  },
  designDecisions: {
    heading: "Design decisions",
    cards: [
      {
        title: "Convenience first",
        description:
          "Sessions are short, mobile-friendly, and easy to follow.",
      },
      {
        title: "Low-friction habit formation",
        description:
          "The app encourages small repeatable actions instead of dramatic lifestyle change.",
      },
      {
        title: "Visual calm",
        description:
          "Soft colors, clear hierarchy, and friendly imagery reduce pressure.",
      },
      {
        title: "Native iOS patterns",
        description:
          "Familiar navigation, tabs, cards, and controls throughout the product.",
      },
    ],
  },
  designSystem: {
    heading: "iOS product system",
    body: "I created a lightweight mobile design system to keep the experience consistent across wellness content, saved items, and habit flows.",
    items: [
      "Typography scale",
      "Semantic colors",
      "Reusable cards",
      "Tab navigation",
      "Segmented filters",
      "Video cards",
      "Progress states",
      "Saved content patterns",
    ],
    image: "/images/projects/healthii/components.png",
    imageAlt: "Healthii iOS component library and design patterns",
  },
  process: {
    heading: "Process",
    steps: [
      "Research",
      "Problem framing",
      "Information architecture",
      "Mobile UI system",
      "Prototype",
      "Iteration",
    ],
  },
  demonstrates: {
    heading: "What this project demonstrates",
    items: [
      "Mobile-first product thinking",
      "Behavior design",
      "Health and wellness UX",
      "Information architecture",
      "Native iOS interaction patterns",
      "Visual design craft",
      "Designing for motivation and habit formation",
    ],
  },
  reflection: {
    heading: "Reflection",
    body: "Healthii helped me understand how product design can support behavior change through clarity, emotional tone, and low-friction interactions.\n\nThe strongest wellness products do not simply track behavior. They make the next healthy action easier to take.",
  },
  relatedHeading: "More product design work",
  relatedProjects: [
    {
      title: "Ahead iOS",
      description: "Native iOS personal finance app shipped to the App Store.",
      href: "/projects/ahead-ios",
    },
    {
      title: "Connected Wealth",
      description: "Enterprise wealth platform for 5,700+ advisors.",
      href: "/projects/connected-wealth",
    },
  ],
  backLabel: "Back to Design Work",
  backHref: "/#product-design",
};
