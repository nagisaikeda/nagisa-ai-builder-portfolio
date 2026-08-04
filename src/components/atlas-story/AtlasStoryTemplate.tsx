"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { AtlasDocsPreview } from "@/components/atlas-story/AtlasDocsPreview";
import { AtlasPatternCard } from "@/components/atlas-story/AtlasPatternPreviews";
import { ArchitectureDiagram } from "@/components/project/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";
import type { AtlasStory } from "@/lib/case-studies/design-system/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

function SectionShell({
  children,
  className = "",
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`border-t py-16 md:py-24 ${
        dark
          ? "border-white/10 bg-[#0a0a0a] text-white"
          : "border-border"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function AtlasStoryTemplate({ story }: { story: AtlasStory }) {
  return (
    <article>
      {/* Hero */}
      <section className="border-b border-border pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={staggerItem} className="text-label text-accent">
            {story.eyebrow}
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="mt-6 font-serif-brand text-[clamp(3rem,7vw,5rem)] leading-[0.95] tracking-[-0.04em] text-ink"
          >
            {story.title}
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-[clamp(1.25rem,2.5vw,1.625rem)] font-medium leading-snug tracking-tight text-ink"
          >
            {story.headline}
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-body md:text-[1.0625rem]"
          >
            {story.supportingCopy}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 grid gap-x-10 gap-y-6 border-y border-border py-8 sm:grid-cols-2"
          >
            {story.meta.map((item) => (
              <div key={item.label}>
                <p className="text-label mb-2">{item.label}</p>
                <p className="text-[0.9375rem] leading-relaxed text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why I built Atlas */}
      <SectionShell className="!border-t-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="text-label mb-8">{story.whyBuilt.heading}</p>
          <blockquote className="max-w-4xl text-[clamp(1.375rem,2.8vw,2rem)] font-medium leading-[1.35] tracking-[-0.02em] text-ink">
            &ldquo;{story.whyBuilt.quote}&rdquo;
          </blockquote>

          <div className="mt-14 flex flex-wrap items-center gap-3 text-mono-sm md:gap-4">
            {story.whyBuilt.progression.map((step, index) => (
              <span key={step} className="flex items-center gap-3 md:gap-4">
                {index > 0 && (
                  <span className="text-muted-soft" aria-hidden>
                    →
                  </span>
                )}
                <span className="rounded-full border border-border bg-canvas-warm px-4 py-2 text-ink">
                  {step}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* AI Interaction Patterns */}
      <SectionShell dark className="-mx-6 px-6 md:-mx-8 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-white">
            {story.patterns.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-white/55">
            {story.patterns.intro}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-12 grid gap-6 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3"
          >
            {story.patterns.items.map((pattern) => (
              <motion.div key={pattern.id} variants={staggerItem} className="h-full">
                <AtlasPatternCard pattern={pattern} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionShell>

      {/* Principles */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-10">{story.principles.heading}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {story.principles.items.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-border bg-surface px-5 py-5 md:px-6 md:py-6"
              >
                <h3 className="text-[1rem] font-medium text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* Architecture */}
      <ArchitectureDiagram
        heading={story.architecture.heading}
        layers={story.architecture.layers}
        footer={story.architecture.body}
      />

      {/* Documentation preview */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif max-w-3xl">
            {story.documentation.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
            {story.documentation.body}
          </p>
          <div className="mt-10">
            <AtlasDocsPreview />
          </div>
        </motion.div>
      </SectionShell>

      {/* Workflow */}
      <SectionShell className="bg-canvas-warm/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-10">{story.workflow.heading}</h2>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {story.workflow.steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-4"
              >
                <span className="text-label mt-0.5 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] font-medium text-ink">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
            {story.workflow.body}
          </p>
        </motion.div>
      </SectionShell>

      {/* Patterns emerged through practice */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif max-w-3xl">
            {story.informedBy.heading}
          </h2>
          <p className="mt-5 max-w-3xl text-[0.9375rem] leading-relaxed text-body md:text-base">
            {story.informedBy.body}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {story.informedBy.projects.map((project) => {
              const content = (
                <>
                  {project.image && (
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-border bg-canvas-warm">
                      <SharpImage
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover object-top"
                        sizes="200px"
                      />
                    </div>
                  )}
                  <p className="text-sm font-medium text-ink">{project.title}</p>
                </>
              );

              if (project.href) {
                return (
                  <Link
                    key={project.title}
                    href={project.href}
                    className="group block rounded-xl border border-border bg-surface p-3 transition-shadow hover:shadow-[0_8px_24px_rgba(10,10,10,0.06)]"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={project.title}
                  className="rounded-xl border border-border bg-surface p-3"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </SectionShell>

      {/* Outcome */}
      <SectionShell className="bg-canvas-warm/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-8">{story.outcome.heading}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {story.outcome.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-[0.9375rem] leading-relaxed text-ink"
              >
                <span className="text-accent" aria-hidden>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </SectionShell>

      {/* CTAs */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={story.ctas.docsHref} external>
            {story.ctas.docsLabel} →
          </Button>
          <Button href={story.ctas.sourceHref} variant="secondary" external>
            {story.ctas.sourceLabel} →
          </Button>
        </div>
        <Link
          href={story.backHref}
          className="mt-12 inline-block text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-60"
        >
          ← {story.backLabel}
        </Link>
      </section>
    </article>
  );
}
