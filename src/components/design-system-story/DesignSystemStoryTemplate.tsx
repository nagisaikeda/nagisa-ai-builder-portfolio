"use client";

import Link from "next/link";
import { SharpImage } from "@/components/ui/SharpImage";
import { motion } from "framer-motion";
import { ArchitectureDiagram } from "@/components/project/ArchitectureDiagram";
import { ProjectCTA } from "@/components/project/ProjectCTA";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { Button } from "@/components/ui/Button";
import type { DesignSystemStory } from "@/lib/case-studies/design-system/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-border py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function DesignSystemStoryTemplate({
  story,
}: {
  story: DesignSystemStory;
}) {
  const tldrParagraphs = story.tldr.split("\n\n");

  return (
    <article>
      {/* Hero */}
      <section className="border-b border-border pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={staggerItem} className="text-label text-accent">
            Nara Labs · Design Engineering
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="mt-6 max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink"
          >
            {story.title}
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-3xl text-[1.0625rem] font-medium leading-snug text-ink md:text-lg"
          >
            {story.subtitle}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 grid gap-6 border-y border-border py-8 sm:grid-cols-2"
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

          <motion.div variants={staggerItem} className="mt-10">
            <Button
              href={story.backHref ?? "/#product-design"}
              variant="secondary"
            >
              {story.backLabel ?? "Back to Design Work"}
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* TL;DR */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="text-label mb-5">TL;DR</p>
          <div className="max-w-3xl space-y-4">
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
      </SectionShell>

      {/* Problem */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-6">{story.problem.heading}</h2>
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-body">
            {story.problem.intro}
          </p>
          <p className="mt-6 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
            Most design systems still have:
          </p>
          <ul className="mt-4 max-w-3xl space-y-2">
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
          <p className="mt-8 max-w-3xl text-[0.9375rem] font-medium leading-relaxed text-ink">
            {story.problem.closing}
          </p>
        </motion.div>
      </SectionShell>

      {/* Thesis */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif max-w-3xl">
            {story.thesis.heading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            {story.thesis.body.split("\n\n").map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[0.9375rem] leading-relaxed text-body"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* Principles */}
      <ProjectGrid
        heading={story.principles.heading}
        cards={story.principles.cards}
        variant="cards"
        columns={2}
      />

      {/* Architecture */}
      <ArchitectureDiagram
        heading={story.architecture.heading}
        layers={story.architecture.layers}
        footer={story.architecture.body}
      />

      {/* Workflow */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-10">{story.workflow.heading}</h2>
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-2 md:gap-3">
              {story.workflow.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="whitespace-nowrap rounded-full border border-border bg-canvas-warm px-4 py-2 text-[0.8125rem] font-medium text-ink">
                    {step}
                  </span>
                  {index < story.workflow.steps.length - 1 && (
                    <span className="text-muted-soft" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
            {story.workflow.body}
          </p>
        </motion.div>
      </SectionShell>

      {/* Component system */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-12">
            {story.componentSystem.heading}
          </h2>
          {story.componentSystem.image && (
            <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(10,10,10,0.06)]">
              <div className="relative aspect-[1024/682] w-full">
                <SharpImage
                  src={story.componentSystem.image}
                  alt={
                    story.componentSystem.imageAlt ?? "Component system overview"
                  }
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1120px) 100vw, 1120px"
                  unoptimized
                />
              </div>
            </div>
          )}
          <div className="grid gap-10 lg:grid-cols-3">
            {story.componentSystem.categories.map((category) => (
              <div key={category.title}>
                <p className="text-[0.8125rem] font-medium text-ink">
                  {category.title}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
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
      </SectionShell>

      {/* Toolkit */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-label mb-10">{story.toolkit.heading}</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {story.toolkit.groups.map((group) => (
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
      </SectionShell>

      {/* Example products */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-5">
            {story.exampleProducts.heading}
          </h2>
          <p className="mb-10 max-w-3xl text-[0.9375rem] leading-relaxed text-body">
            {story.exampleProducts.body}
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {story.exampleProducts.projects.map((project) => (
              <motion.div key={project.title} variants={staggerItem}>
                <Link
                  href={project.href}
                  {...(project.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(10,10,10,0.06)] md:p-7"
                >
                  <h3 className="text-[1rem] font-medium text-ink transition-opacity group-hover:opacity-70">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-body">
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionShell>

      {/* What I built */}
      <ProjectGrid
        heading={story.built.heading}
        intro={story.built.intro}
        items={story.built.items}
        variant="list"
      />

      {/* Lessons */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-12">{story.lessons.heading}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {story.lessons.items.map((lesson, index) => (
              <div key={lesson} className="border-t border-border pt-6">
                <p className="text-label mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-ink">
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* Outcome */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-8">{story.outcome.heading}</h2>
          <div className="max-w-3xl rounded-2xl border border-border bg-canvas-warm px-6 py-6 md:px-8 md:py-7">
            <p className="text-label mb-3">Result</p>
            <p className="text-[0.9375rem] font-medium leading-relaxed text-ink">
              {story.outcome.result}
            </p>
          </div>
          <p className="text-label mb-4 mt-10">Impact</p>
          <ul className="max-w-3xl space-y-2.5">
            {story.outcome.impacts.map((impact) => (
              <li
                key={impact}
                className="flex gap-3 text-[0.9375rem] leading-relaxed text-body"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-soft" />
                {impact}
              </li>
            ))}
          </ul>
        </motion.div>
      </SectionShell>

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
