"use client";

import { motion } from "framer-motion";
import type { WorkflowStep } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function WorkflowDiagram({
  heading,
  steps,
}: {
  heading: string;
  steps: readonly WorkflowStep[];
}) {
  const minWidth = Math.max(steps.length * 168, 640);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-16 md:py-20"
    >
      <h2 className="text-section-serif mb-10">{heading}</h2>
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface p-6 md:p-8">
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-row items-stretch gap-0"
          style={{ minWidth }}
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={staggerItem}
              className="flex min-w-[148px] flex-1 items-stretch"
            >
              <div className="flex flex-1 flex-col">
                <div className="flex h-full flex-col rounded-xl border border-border bg-canvas-warm p-4">
                  <p className="text-[0.8125rem] font-medium leading-snug text-ink">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[0.75rem] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <span
                  className="flex shrink-0 items-center px-1.5 text-muted-soft"
                  aria-hidden
                >
                  →
                </span>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </motion.section>
  );
}
