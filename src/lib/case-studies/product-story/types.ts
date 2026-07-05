export type ProductStoryMetric = {
  value: string;
  label: string;
};

export type ProductStoryChallenge = {
  title: string;
  description: string;
  bullets?: readonly string[];
};

export type ProductStoryFeature = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
};

export type ProductStory = {
  slug: string;
  title: string;
  headline: string;
  company: string;
  role: string;
  timeline: string;
  platform: string;
  metrics: readonly ProductStoryMetric[];
  tldr: string;
  challenges: readonly ProductStoryChallenge[];
  processSteps: readonly string[];
  contributions: readonly string[];
  features: readonly ProductStoryFeature[];
  impactMetrics: readonly ProductStoryMetric[];
  impactBody?: string;
  impactTags?: readonly string[];
  lessons: readonly string[];
  backLabel?: string;
  backHref?: string;
};
