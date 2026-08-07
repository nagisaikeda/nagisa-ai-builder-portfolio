export type FedExMeta = {
  label: string;
  value: string;
};

export type FedExCard = {
  title: string;
  description: string;
};

export type FedExFlowStep = {
  title: string;
  description: string;
};

export type FedExPattern = {
  name: string;
  purpose: string;
};

export type FedExSystemLayer = {
  title: string;
  description: string;
};

export type FedExVisual = {
  src: string;
  alt: string;
  caption?: string;
};

export type FedExStory = {
  slug: string;
  eyebrow: string;
  title: string;
  problem: string;
  subtitle: string;
  summary: string;
  meta: readonly FedExMeta[];
  hero: FedExVisual;
  opportunity: {
    heading: string;
    body: string;
    visual: FedExVisual;
  };
  whyDifferent: {
    heading: string;
    intro: string;
    contrasts: readonly {
      traditional: string;
      enterpriseAi: string;
    }[];
    closing: string;
  };
  principles: {
    heading: string;
    items: readonly FedExCard[];
  };
  onboardingFlow: {
    heading: string;
    intro: string;
    video: string;
    poster?: string;
    caption: string;
  };
  multimodal: {
    heading: string;
    intro: string;
    modes: readonly FedExCard[];
    flow: readonly FedExFlowStep[];
    visual: FedExVisual;
    caption: string;
  };
  voiceStructured: {
    heading: string;
    intro: string;
    body: string;
    pairings: readonly FedExCard[];
    visual: FedExVisual;
  };
  intent: {
    heading: string;
    intro: string;
    stages: readonly FedExFlowStep[];
    visual: FedExVisual;
    caption: string;
  };
  felix: {
    heading: string;
    intro: string;
    body: string;
    responsibilities: readonly string[];
    visual: FedExVisual;
    caption: string;
  };
  patterns: {
    heading: string;
    intro: string;
    items: readonly FedExPattern[];
    visual?: FedExVisual;
  };
  designSystem: {
    heading: string;
    metrics: readonly { value: string; label: string }[];
    body: string;
    influence: string;
    layers: readonly FedExSystemLayer[];
    diagramPlaceholder: string;
  };
  reflection: {
    heading: string;
    items: readonly string[];
  };
  next: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
  backLabel: string;
  backHref: string;
};
