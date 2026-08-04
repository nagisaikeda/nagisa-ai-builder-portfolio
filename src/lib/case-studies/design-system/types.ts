export type AtlasStoryMeta = {
  label: string;
  value: string;
};

export type AtlasPrinciple = {
  title: string;
  description: string;
};

export type AtlasPattern = {
  id: string;
  name: string;
  purpose: string;
  stateExample: string;
  implementation?: string;
  status: "experimental" | "draft" | "planned";
};

export type AtlasInformedProject = {
  title: string;
  href?: string;
  image?: string;
};

export type AtlasStory = {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  supportingCopy: string;
  meta: readonly AtlasStoryMeta[];
  whyBuilt: {
    heading: string;
    quote: string;
    progression: readonly string[];
  };
  patterns: {
    heading: string;
    intro: string;
    items: readonly AtlasPattern[];
  };
  principles: {
    heading: string;
    items: readonly AtlasPrinciple[];
  };
  architecture: {
    heading: string;
    layers: readonly string[];
    body: string;
  };
  documentation: {
    heading: string;
    body: string;
  };
  workflow: {
    heading: string;
    steps: readonly string[];
    body: string;
  };
  informedBy: {
    heading: string;
    body: string;
    projects: readonly AtlasInformedProject[];
  };
  outcome: {
    heading: string;
    items: readonly string[];
  };
  ctas: {
    docsLabel: string;
    docsHref: string;
    sourceLabel: string;
    sourceHref: string;
  };
  backLabel: string;
  backHref: string;
};

/** @deprecated Use AtlasStory */
export type DesignSystemStory = AtlasStory;

/** @deprecated Use AtlasStoryMeta */
export type DesignSystemStoryMeta = AtlasStoryMeta;
