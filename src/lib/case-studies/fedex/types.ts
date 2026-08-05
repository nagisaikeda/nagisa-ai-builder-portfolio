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

export type FedExStory = {
  slug: string;
  eyebrow: string;
  title: string;
  problem: string;
  subtitle: string;
  summary: string;
  meta: readonly FedExMeta[];
  heroPlaceholder: string;
  opportunity: {
    heading: string;
    body: string;
    diagramPlaceholder: string;
    diagramCaption: string;
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
  multimodal: {
    heading: string;
    intro: string;
    modes: readonly FedExCard[];
    flow: readonly FedExFlowStep[];
    diagramPlaceholder: string;
    caption: string;
  };
  voiceStructured: {
    heading: string;
    intro: string;
    body: string;
    pairings: readonly FedExCard[];
    diagramPlaceholder: string;
    caption: string;
  };
  intent: {
    heading: string;
    intro: string;
    stages: readonly FedExFlowStep[];
    diagramPlaceholder: string;
    caption: string;
  };
  felix: {
    heading: string;
    intro: string;
    body: string;
    responsibilities: readonly string[];
    diagramPlaceholder: string;
    caption: string;
  };
  patterns: {
    heading: string;
    intro: string;
    items: readonly FedExPattern[];
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
