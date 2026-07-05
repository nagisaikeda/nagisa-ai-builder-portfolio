"use client";

import { motion } from "framer-motion";
import type { TechStackItem } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ArchitectureDiagram({
  heading,
  layers,
  stack,
  footer,
  className = "",
  hideHeading = false,
}: {
  heading: string;
  layers: readonly string[];
  stack?: readonly TechStackItem[];
  footer?: string;
  className?: string;
  hideHeading?: boolean;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className={`border-t border-border py-16 md:py-20 ${className}`}
    >
      {!hideHeading && heading ? (
        <h2 className="text-section-serif mb-10">{heading}</h2>
      ) : null}

      <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto flex max-w-md flex-col items-center"
        >
          {layers.map((layer, i) => (
            <motion.li key={layer} variants={staggerItem} className="w-full">
              <div className="rounded-xl border border-border bg-canvas-warm px-5 py-3.5 text-center text-[0.875rem] font-medium text-ink">
                {layer}
              </div>
              {i < layers.length - 1 && (
                <p className="py-2 text-center text-muted-soft" aria-hidden>
                  ↓
                </p>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {footer && (
        <p className="mt-8 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
          {footer}
        </p>
      )}

      {stack && stack.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface"
        >
          {stack.map((item, i) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className={`grid grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] gap-4 px-6 py-4 md:px-8 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <p className="text-label">{item.label}</p>
              <p className="text-[0.9375rem] leading-relaxed text-ink">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}
