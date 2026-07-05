"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HealthiiFeatureDemos } from "@/components/healthii-story/HealthiiFeatureDemos";
import { HealthiiHero } from "@/components/healthii-story/HealthiiHero";
import { ProjectCTA } from "@/components/project/ProjectCTA";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { SharpImage } from "@/components/ui/SharpImage";
import type { HealthiiStory } from "@/lib/case-studies/healthii/types";
import { fadeUp } from "@/lib/motion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-label mb-4 text-muted md:mb-5">{children}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
      {children}
    </h2>
  );
}

export function HealthiiStoryTemplate({ story }: { story: HealthiiStory }) {
  const tldrParagraphs = story.tldr.split("\n\n");
  const reflectionParagraphs = story.reflection.body.split("\n\n");

  return (
    <article>
      <HealthiiHero story={story} />

      {/* Feature demos */}
      <section className="border-b border-border py-16 md:py-24">
        <SectionLabel>01</SectionLabel>
        <HealthiiFeatureDemos
          heading={story.featureDemos.heading}
          description={story.featureDemos.description}
          items={story.featureDemos.items}
        />
      </section>

      {/* TL;DR */}
      <section className="border-b border-border py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>TL;DR</SectionLabel>
          <div className="max-w-2xl space-y-4">
            {tldrParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[1.0625rem] leading-relaxed text-body md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="border-b border-border py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>The problem</SectionLabel>
          <SectionHeading>{story.problem.heading}</SectionHeading>
          <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
            {story.problem.body}
          </p>
          <ul className="mt-8 max-w-xl space-y-2.5">
            {story.problem.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-[0.9375rem] leading-relaxed text-body"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-soft" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Thesis */}
      <section className="border-b border-border py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>Product thesis</SectionLabel>
          <SectionHeading>{story.thesis.heading}</SectionHeading>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-body">
            {story.thesis.body}
          </p>
        </motion.div>
      </section>

      <ProjectGrid
        heading={story.solution.heading}
        cards={story.solution.cards}
        variant="cards"
        columns={3}
      />

      <ProjectGrid
        heading={story.designDecisions.heading}
        cards={story.designDecisions.cards}
        variant="cards"
        columns={2}
      />

      {/* Design system */}
      <section className="border-b border-border py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14"
        >
          <div>
            <SectionLabel>Mobile design system</SectionLabel>
            <SectionHeading>{story.designSystem.heading}</SectionHeading>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-body">
              {story.designSystem.body}
            </p>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {story.designSystem.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-canvas-warm px-3.5 py-2.5 text-[0.8125rem] font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(10,10,10,0.06)]">
            <div className="relative aspect-[4044/1439] w-full">
              <SharpImage
                src={story.designSystem.image}
                alt={story.designSystem.imageAlt}
                fill
                unoptimized
                className="object-contain object-left"
                sizes="(max-width: 1120px) 100vw, 560px"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="border-b border-border py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>Process</SectionLabel>
          <SectionHeading>{story.process.heading}</SectionHeading>
          <div className="mt-10 flex max-w-xl flex-wrap items-center gap-x-2 gap-y-3 text-[0.9375rem] font-medium text-ink">
            {story.process.steps.map((step, index) => (
              <span key={step} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span className="text-muted-soft" aria-hidden>
                    →
                  </span>
                )}
                <span className="rounded-full border border-border bg-surface px-4 py-2">
                  {step}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What this shows */}
      <section className="border-b border-border py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>Skills</SectionLabel>
          <SectionHeading>{story.demonstrates.heading}</SectionHeading>
          <ul className="mt-8 max-w-2xl space-y-2.5">
            {story.demonstrates.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-soft" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Reflection */}
      <section className="border-b border-border py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>Reflection</SectionLabel>
          <SectionHeading>{story.reflection.heading}</SectionHeading>
          <div className="mt-6 max-w-2xl space-y-4 text-[1.0625rem] leading-relaxed text-body">
            {reflectionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <ProjectCTA
        heading={story.relatedHeading}
        projects={story.relatedProjects}
      />

      <section className="border-t border-border py-12 md:py-16">
        <Link
          href={story.backHref ?? "/#product-design"}
          className="text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-60"
        >
          ← {story.backLabel ?? "Back to Design Work"}
        </Link>
      </section>
    </article>
  );
}
