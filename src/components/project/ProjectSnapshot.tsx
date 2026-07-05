"use client";

import { motion } from "framer-motion";
import type { SnapshotItem } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ProjectSnapshot({ items }: { items: readonly SnapshotItem[] }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-b border-border py-16 md:py-20"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="contents"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <p className="text-label mb-3">{item.label}</p>
              <p className="text-[0.9375rem] leading-relaxed text-ink">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
