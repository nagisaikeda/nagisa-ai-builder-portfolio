"use client";

import { motion } from "framer-motion";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { WorkSection } from "@/components/WorkSection";
import { aiProducts, productDesignWork } from "@/lib/data";

export function FeaturedAIProducts() {
  return (
    <>
      <CurrentlyBuilding />
      <WorkSection
        id={aiProducts.id}
        label={aiProducts.label}
        title={aiProducts.title}
        description={aiProducts.description}
        items={aiProducts.items}
      />
    </>
  );
}

export function ProductDesignWork() {
  return (
    <WorkSection
      id={productDesignWork.id}
      label={productDesignWork.label}
      title={productDesignWork.title}
      description={productDesignWork.description}
      items={productDesignWork.items}
      variant="secondary"
      className="border-t border-border bg-canvas-warm/30 py-20 md:py-24"
    />
  );
}
