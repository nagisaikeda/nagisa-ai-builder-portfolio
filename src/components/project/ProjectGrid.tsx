"use client";

import { motion } from "framer-motion";
import type { GridCard } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

type ProjectGridProps = {
  heading?: string;
  intro?: string;
  items?: readonly string[];
  cards?: readonly GridCard[];
  variant?: "list" | "cards";
  columns?: 2 | 3 | 4;
};

export function ProjectGrid({
  heading,
  intro,
  items,
  cards,
  variant = "cards",
  columns = 3,
}: ProjectGridProps) {
  const columnClass =
    columns === 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-16 md:py-20"
    >
      {heading && (
        <h2 className="text-section-serif max-w-2xl">{heading}</h2>
      )}
      {intro && (
        <p
          className={`max-w-2xl text-[0.9375rem] leading-relaxed text-body ${heading ? "mt-5" : ""}`}
        >
          {intro}
        </p>
      )}

      {variant === "list" && items && (
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className={`grid gap-3 sm:grid-cols-2 ${heading || intro ? "mt-10" : ""}`}
        >
          {items.map((item) => (
            <motion.li
              key={item}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-surface px-5 py-4 text-[0.9375rem] leading-relaxed text-ink"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {variant === "cards" && cards && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className={`mt-10 grid gap-4 ${columnClass}`}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-surface p-6 md:p-7"
            >
              <h3 className="text-[0.9375rem] font-medium leading-snug text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-body">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}
