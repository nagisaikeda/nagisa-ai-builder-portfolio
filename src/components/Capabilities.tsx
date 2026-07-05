"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { capabilities } from "@/lib/data";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

type CapabilitiesProps = {
  standalone?: boolean;
};

function SectionDivider() {
  return (
    <div
      className="py-12 text-center text-muted-soft md:py-16"
      aria-hidden
    >
      ↓
    </div>
  );
}

export function Capabilities({ standalone = false }: CapabilitiesProps) {
  return (
    <Section
      id="capabilities"
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
        <p className="text-label">{capabilities.eyebrow}</p>
        <h2 className="text-section-serif mt-6 max-w-2xl">
          {capabilities.headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 md:mt-20"
      >
        <SectionDivider />

        {capabilities.groups.map((group, index) => (
          <Fragment key={group.title}>
            <motion.div variants={staggerItem}>
              <h3 className="text-label">{group.title}</h3>
              <p className="text-section-serif mt-5 max-w-2xl">
                {group.sentence}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {group.tags.map((tag) => (
                  <li key={tag} className="text-mono-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
            {index < capabilities.groups.length - 1 && <SectionDivider />}
          </Fragment>
        ))}

        <SectionDivider />

        <motion.div variants={staggerItem}>
          <h3 className="text-label">{capabilities.aiStack.label}</h3>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {capabilities.aiStack.groups.map((group) => (
              <div key={group.title}>
                <p className="text-[0.8125rem] font-medium text-ink">
                  {group.title}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
