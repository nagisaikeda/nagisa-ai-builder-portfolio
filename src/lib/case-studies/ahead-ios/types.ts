import type { RelatedProject } from "@/lib/case-studies/types";
import type { VideoGalleryItem } from "@/components/project/VideoGallery";

export type AheadIosMeta = {
  label: string;
  value: string;
};

export type AheadIosScreen = {
  src: string;
  alt: string;
  caption: string;
};

export type AheadIosStory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shippedBadge: string;
  appStoreUrl: string;
  meta: readonly AheadIosMeta[];
  overview: {
    heading: string;
    paragraphs: readonly string[];
  };
  productDesign: {
    heading: string;
    body: string;
    highlights: readonly string[];
  };
  mobileUx: {
    heading: string;
    body: string;
    screens: readonly AheadIosScreen[];
  };
  featureDemos: {
    heading: string;
    description: string;
    items: readonly VideoGalleryItem[];
  };
  interactionDesign: {
    heading: string;
    body: string;
    patterns: readonly string[];
  };
  swiftui: {
    heading: string;
    body: string;
    stack: readonly string[];
  };
  appStore: {
    heading: string;
    body: string;
    checklist: readonly string[];
    image: string;
    imageAlt: string;
  };
  relatedHeading: string;
  relatedProjects: readonly RelatedProject[];
  backLabel?: string;
  backHref?: string;
};
