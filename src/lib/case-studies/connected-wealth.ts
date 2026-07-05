import type { ProductStory } from "@/lib/case-studies/product-story/types";

export const connectedWealthStory: ProductStory = {
  slug: "connected-wealth",
  title: "Connected Wealth",
  headline:
    "Improved Advisor Productivity by 35% Through a Unified Wealth Platform",
  company: "J.P. Morgan Chase",
  role: "Senior Product Designer",
  timeline: "2022–2024",
  platform: "Enterprise Web",
  metrics: [
    { value: "35%", label: "Productivity increase" },
    { value: "56%", label: "Faster authentication" },
    { value: "81%", label: "Fewer user errors" },
    { value: "5,700+", label: "Advisors" },
  ],
  tldr: "Private Bank advisors worked across 500+ disconnected applications—re-authenticating constantly, searching for client data, and losing momentum before every conversation. I led product strategy and design for Connected Wealth, unifying advisor workflows into a single platform with Client 360 visibility and streamlined daily tasks. Through interviews, journey mapping, and cross-functional prototyping, we realigned the experience around how advisors actually work—not legacy system boundaries. The platform delivered measurable gains in speed, accuracy, and advisor confidence at enterprise scale.",
  challenges: [
    {
      title: "Fragmented Advisor Workflows",
      description:
        "Daily work was split across disconnected tools with no shared context.",
      bullets: [
        "5+ disconnected applications",
        "Repeated authentication",
        "No centralized client overview",
      ],
    },
    {
      title: "Scattered Client Data",
      description:
        "Customer information lived across multiple systems. Advisors wasted valuable time searching for information before helping clients.",
    },
    {
      title: "Platform Misaligned With Users",
      description:
        "67% of users were junior advisors, yet the experience had been optimized around training instead of daily workflows.",
    },
  ],
  processSteps: [
    "Research",
    "User Interviews",
    "Journey Mapping",
    "Prioritization",
    "Information Architecture",
    "Prototype",
    "Testing",
    "Launch",
  ],
  contributions: [
    "Product Strategy",
    "UX Research",
    "Information Architecture",
    "Interaction Design",
    "Prototyping",
    "Design System",
    "Engineering Collaboration",
  ],
  features: [
    {
      title: "Unified Wealth Portal",
      description:
        "Consolidated advisor tools into one entry point—replacing fragmented navigation with a coherent workspace built around daily priorities, not legacy org charts.",
      video: "/videos/projects/connected-wealth/unified-portal.mp4",
      videoPoster: "/images/projects/connected-wealth/unified-portal.png",
      imageAlt: "Connected Wealth unified advisor portal prototype",
    },
    {
      title: "Client 360",
      description:
        "A single client view aggregating holdings, relationships, and open tasks. Advisors could answer client questions in the moment instead of searching across systems before calling back.",
      video: "/videos/projects/connected-wealth/client-360.mp4",
      imageAlt: "Client 360 profile view showing consolidated client information",
    },
    {
      title: "Streamlined Advisor Workflow",
      description:
        "Redesigned authentication and task flows to reduce friction—cutting repeated logins, input errors, and the cognitive load of switching between applications mid-conversation.",
      video: "/videos/projects/connected-wealth/advisor-workflow.mp4",
      imageAlt: "Streamlined advisor workflow and action center prototype",
    },
  ],
  impactBody:
    "The redesign unified fragmented advisor workflows into a single wealth platform used by over 5,700 advisors globally.",
  impactMetrics: [
    { value: "35%", label: "Advisor Productivity" },
    { value: "56%", label: "Faster Authentication" },
    { value: "81%", label: "Fewer User Errors" },
    { value: "5,700+", label: "Financial Advisors" },
  ],
  impactTags: [
    "Enterprise Platform",
    "Global Wealth Management",
    "Product Designer",
  ],
  lessons: [
    "Designing enterprise software is about reducing cognitive load, not adding functionality.",
    "Great research uncovers business opportunities—not just usability issues.",
    "Cross-functional alignment is often the hardest design challenge.",
    "Simple workflows create outsized business impact.",
  ],
  backLabel: "Back to Design Work",
  backHref: "/#product-design",
};
