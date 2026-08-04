"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { whatIBring } from "@/lib/data";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

type WhatIBringProps = {
  standalone?: boolean;
};

export function WhatIBring({ standalone = false }: WhatIBringProps) {
  return (
    <Section
      id={whatIBring.id}
      className={
        standalone
          ? "border-t border-border pt-28 md:pt-32"
          : "border-t border-border"
      }
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
      >
        <p className="text-label">{whatIBring.eyebrow}</p>
        <h2 className="text-section-serif mt-6 max-w-2xl">
          {whatIBring.headline}
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8"
      >
        {whatIBring.items.map((item) => (
          <motion.div key={item.title} variants={staggerItem}>
            <h3 className="text-[1.0625rem] font-medium tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
              {item.sentence}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
