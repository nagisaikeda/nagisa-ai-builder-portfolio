"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ProcessSteps({
  heading,
  steps,
}: {
  heading: string;
  steps: readonly { step: string; description: string }[];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-16 md:py-20"
    >
      <h2 className="text-section-serif mb-10">{heading}</h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-4 md:grid-cols-2"
      >
        {steps.map((item) => (
          <motion.div
            key={item.step}
            variants={staggerItem}
            className="rounded-2xl border border-border bg-surface p-6 md:p-7"
          >
            <p className="text-label mb-3">{item.step}</p>
            <p className="text-[0.9375rem] leading-relaxed text-body">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
