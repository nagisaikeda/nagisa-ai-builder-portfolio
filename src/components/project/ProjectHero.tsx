"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/lib/case-studies/types";
import { staggerContainer, staggerItem } from "@/lib/motion";

type ProjectHeroProps = Pick<
  CaseStudy,
  | "title"
  | "eyebrow"
  | "tagline"
  | "description"
  | "chips"
  | "demoUrl"
  | "githubUrl"
  | "demoLabel"
  | "githubLabel"
  | "backLabel"
  | "backHref"
  | "heroImage"
  | "heroImageAspect"
  | "showGithub"
>;

export function ProjectHero({
  title,
  eyebrow,
  tagline,
  description,
  chips,
  demoUrl,
  githubUrl,
  demoLabel = "Watch Demo",
  githubLabel = "GitHub",
  backLabel = "Back to AI Work",
  backHref = "/#ai-products",
  heroImage,
  heroImageAspect,
  showGithub = true,
}: ProjectHeroProps) {
  return (
    <section className="border-b border-border pb-16 pt-28 md:pb-20 md:pt-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.p variants={staggerItem} className="text-label text-accent">
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="mt-4 text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-5 text-[1.0625rem] font-medium leading-snug text-ink md:text-lg"
          >
            {tagline}
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-body md:text-base"
          >
            {description}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {demoUrl ? (
              <Button href={demoUrl} external>
                {demoLabel}
              </Button>
            ) : (
              <span className="inline-flex h-10 cursor-default items-center justify-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-muted">
                {demoLabel}
              </span>
            )}
            {showGithub &&
              (githubUrl ? (
                <Button href={githubUrl} variant="secondary" external>
                  {githubLabel}
                </Button>
              ) : (
                <span className="inline-flex h-10 cursor-default items-center justify-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-muted">
                  {githubLabel}
                </span>
              ))}
            <Button href={backHref} variant="secondary">
              {backLabel}
            </Button>
          </motion.div>
          {chips && chips.length > 0 && (
            <motion.ul
              variants={staggerItem}
              className="mt-10 flex flex-wrap gap-2"
            >
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink"
                >
                  {chip}
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {heroImage && (
          <motion.div
            variants={staggerItem}
            className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(10,10,10,0.06)] md:mt-16"
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: (heroImageAspect ?? "16/10").replace("/", " / "),
              }}
            >
              <Image
                src={heroImage}
                alt={`${title} product interface`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
