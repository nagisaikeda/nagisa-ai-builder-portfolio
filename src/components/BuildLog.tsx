"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { buildLog } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function BuildLog() {
  return (
    <Section id="build-log" className="border-y border-border bg-canvas-warm py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <SectionHeader
            label="Shipping"
            title="Build log"
            serif
            description="I build continuously — products, agents, and systems."
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={staggerItem}
            className="text-label mb-6 text-accent"
          >
            {buildLog.year}
          </motion.p>
          <ul className="space-y-0">
            {buildLog.entries.map((entry) => (
              <motion.li
                key={entry}
                variants={staggerItem}
                className="flex items-baseline gap-4 border-b border-border py-4 first:pt-0 last:border-b-0"
              >
                <span
                  className="shrink-0 font-mono text-sm text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-[0.9375rem] font-medium tracking-tight text-ink">
                  {entry}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
