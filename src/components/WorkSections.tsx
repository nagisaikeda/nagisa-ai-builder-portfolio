"use client";

import { WorkSection } from "@/components/WorkSection";
import {
  featuredWork,
  moreAiProducts,
  productDesignWork,
} from "@/lib/data";

export function FeaturedAIProducts() {
  return (
    <WorkSection
      id={featuredWork.id}
      label={featuredWork.label}
      title={featuredWork.title}
      description={featuredWork.description}
      items={featuredWork.items}
    />
  );
}

export function MoreAiProductsSection() {
  return (
    <WorkSection
      id={moreAiProducts.id}
      label={moreAiProducts.label}
      title={moreAiProducts.title}
      description={moreAiProducts.description}
      items={moreAiProducts.items}
      variant="compact"
      className="border-t border-border/60 bg-canvas-warm/30 py-20 md:py-24"
    />
  );
}

export function ProductDesignSection() {
  return (
    <WorkSection
      id={productDesignWork.id}
      title={productDesignWork.title}
      description={productDesignWork.description}
      items={productDesignWork.items}
      serif={false}
      className="border-t border-border/60 bg-canvas-warm/30 py-20 md:py-28"
    />
  );
}

/** @deprecated Use MoreAiProductsSection */
export function MoreWorkSection() {
  return <MoreAiProductsSection />;
}

/** @deprecated Systems flagship moved into Featured Work */
export function SystemsSection() {
  return null;
}

/** @deprecated Use ProductDesignSection */
export function ProductDesignWork() {
  return <ProductDesignSection />;
}
