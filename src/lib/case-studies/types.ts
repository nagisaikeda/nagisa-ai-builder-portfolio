export type SnapshotItem = {
  label: string;
  value: string;
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type GridCard = {
  title: string;
  description: string;
};

export type RelatedProject = {
  title: string;
  description: string;
  href: string;
};

export type TechStackItem = {
  label: string;
  value: string;
};

export type ProjectScreenshot = {
  src?: string;
  alt: string;
  caption: string;
  placeholder?: boolean;
};

export type TextSection = {
  heading: string;
  body: string;
  takeaway?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  chips?: readonly string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  demoLabel?: string;
  githubLabel?: string;
  backLabel?: string;
  backHref?: string;
  heroImage?: string;
  heroImageAspect?: `${number}/${number}`;
  showGithub?: boolean;
  snapshot?: readonly SnapshotItem[];
  demo?: {
    heading: string;
    body: string;
    example?: string;
    flow?: readonly string[];
    closing?: string;
    videoId?: string;
    caption?: string;
    screenshots?: {
      heading?: string;
      items: readonly ProjectScreenshot[];
    };
  };
  solutionFlow?: {
    heading?: string;
    body?: string;
    layers: readonly string[];
  };
  howItWorks?: {
    heading: string;
    steps: readonly { step: string; description: string }[];
  };
  impact?: TextSection;
  opportunity: TextSection;
  extraSections?: readonly TextSection[];
  thesis: TextSection;
  workflow?: { heading: string; steps: readonly WorkflowStep[] };
  screenshots?: {
    heading?: string;
    items: readonly ProjectScreenshot[];
  };
  contributions?: {
    heading: string;
    intro?: string;
    items: readonly string[];
  };
  keyFeatures?: {
    heading: string;
    items: readonly string[];
  };
  designDecisions?: { heading: string; cards: readonly GridCard[] };
  architecture?: {
    heading: string;
    layers: readonly string[];
    stack?: readonly TechStackItem[];
  };
  aiStack?: {
    heading: string;
    tags: readonly string[];
  };
  challenges?: { heading: string; items: readonly string[] };
  mvp?: { heading: string; body?: string; items: readonly string[] };
  outcome?: {
    heading: string;
    body: string;
    highlight: string;
  };
  lessons?: {
    heading: string;
    body?: string;
    itemsHeading?: string;
    items?: readonly string[];
  };
  futureWork?: {
    heading: string;
    body?: string;
    items: readonly string[];
  };
  footer?: {
    heading: string;
    roles: readonly string[];
  };
  relatedHeading?: string;
  relatedProjects: readonly RelatedProject[];
};
