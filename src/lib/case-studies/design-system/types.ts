import type { GridCard } from "@/lib/case-studies/types";
import type { RelatedProject } from "@/lib/case-studies/types";

export type DesignSystemStoryMeta = {
  label: string;
  value: string;
};

export type ComponentCategory = {
  title: string;
  items: readonly string[];
};

export type ToolkitGroup = {
  title: string;
  items: readonly string[];
};

export type DesignSystemStory = {
  slug: string;
  title: string;
  subtitle: string;
  meta: readonly DesignSystemStoryMeta[];
  tldr: string;
  problem: {
    heading: string;
    intro: string;
    bullets: readonly string[];
    closing: string;
  };
  thesis: {
    heading: string;
    body: string;
  };
  principles: {
    heading: string;
    cards: readonly GridCard[];
  };
  architecture: {
    heading: string;
    layers: readonly string[];
    body: string;
  };
  workflow: {
    heading: string;
    steps: readonly string[];
    body: string;
  };
  componentSystem: {
    heading: string;
    categories: readonly ComponentCategory[];
    image?: string;
    imageAlt?: string;
  };
  toolkit: {
    heading: string;
    groups: readonly ToolkitGroup[];
  };
  exampleProducts: {
    heading: string;
    body: string;
    projects: readonly RelatedProject[];
  };
  built: {
    heading: string;
    intro: string;
    items: readonly string[];
  };
  lessons: {
    heading: string;
    items: readonly string[];
  };
  outcome: {
    heading: string;
    result: string;
    impacts: readonly string[];
  };
  relatedHeading: string;
  relatedProjects: readonly RelatedProject[];
  backLabel?: string;
  backHref?: string;
};
