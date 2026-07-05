"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ProjectTagList({
  heading,
  tags,
}: {
  heading: string;
  tags: readonly string[];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-16 md:py-20"
    >
      <h2 className="text-section-serif mb-8">{heading}</h2>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <motion.li
            key={tag}
            variants={staggerItem}
            className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink"
          >
            {tag}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export function ProjectFooter({
  heading,
  roles,
  demoUrl,
  githubUrl,
  demoLabel = "Demo",
  githubLabel = "GitHub",
  backLabel = "Back to Projects",
  backHref = "/#ai-products",
}: NonNullable<CaseStudy["footer"]> & {
  demoUrl?: string | null;
  githubUrl?: string | null;
  demoLabel?: string;
  githubLabel?: string;
  backLabel?: string;
  backHref?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-20 md:py-24"
    >
      <h2 className="text-section-serif mb-8">{heading}</h2>
      <ul className="flex flex-wrap gap-2">
        {roles.map((role) => (
          <li
            key={role}
            className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink"
          >
            {role}
          </li>
        ))}
      </ul>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        {demoUrl ? (
          <Button href={demoUrl} external>
            {demoLabel}
          </Button>
        ) : (
          <span className="inline-flex h-10 cursor-default items-center justify-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-muted">
            {demoLabel}
          </span>
        )}
        {githubUrl ? (
          <Button href={githubUrl} variant="secondary" external>
            {githubLabel}
          </Button>
        ) : (
          <span className="inline-flex h-10 cursor-default items-center justify-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-muted">
            {githubLabel}
          </span>
        )}
        <Button href={backHref} variant="secondary">
          {backLabel}
        </Button>
      </div>
    </motion.section>
  );
}
