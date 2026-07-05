"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { currentlyBuilding } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function CurrentlyBuilding() {
  return (
    <Section id="currently-building" className="border-t border-border py-16 md:py-20">
      <SectionHeader
        label={currentlyBuilding.label}
        title={currentlyBuilding.title}
        description={currentlyBuilding.body}
        descriptionWide
      />
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {currentlyBuilding.chips.map((chip) => (
          <motion.li
            key={chip}
            variants={staggerItem}
            className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink"
          >
            {chip}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
