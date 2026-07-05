import type { GridCard } from "@/lib/case-studies/types";
import type { RelatedProject } from "@/lib/case-studies/types";
import type { VideoGalleryItem } from "@/components/project/VideoGallery";

export type HealthiiMeta = {
  label: string;
  value: string;
};

export type HealthiiHeroImage = {
  src: string;
  alt: string;
};

export type HealthiiStory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImages: readonly HealthiiHeroImage[];
  meta: readonly HealthiiMeta[];
  featureDemos: {
    heading: string;
    description: string;
    items: readonly VideoGalleryItem[];
  };
  tldr: string;
  problem: {
    heading: string;
    body: string;
    bullets: readonly string[];
  };
  thesis: {
    heading: string;
    body: string;
  };
  solution: {
    heading: string;
    cards: readonly GridCard[];
  };
  designDecisions: {
    heading: string;
    cards: readonly GridCard[];
  };
  designSystem: {
    heading: string;
    body: string;
    items: readonly string[];
    image: string;
    imageAlt: string;
  };
  process: {
    heading: string;
    steps: readonly string[];
  };
  demonstrates: {
    heading: string;
    items: readonly string[];
  };
  reflection: {
    heading: string;
    body: string;
  };
  relatedHeading: string;
  relatedProjects: readonly RelatedProject[];
  backLabel?: string;
  backHref?: string;
};
