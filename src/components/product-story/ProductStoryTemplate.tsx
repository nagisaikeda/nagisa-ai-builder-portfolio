"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { ProductStory } from "@/lib/case-studies/product-story/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-t border-border py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

function MetricGrid({
  metrics,
  size = "default",
}: {
  metrics: ProductStory["metrics"];
  size?: "default" | "large";
}) {
  const valueClass =
    size === "large"
      ? "text-[clamp(2.25rem,5vw,3.75rem)] font-medium tracking-[-0.04em] text-ink"
      : "text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.035em] text-ink";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
    >
      {metrics.map((metric) => (
        <motion.div key={metric.label} variants={staggerItem}>
          <p className={valueClass}>{metric.value}</p>
          <p className="mt-2 text-[0.875rem] leading-snug text-body">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function ProductStoryTemplate({ story }: { story: ProductStory }) {
  return (
    <article>
      {/* Hero */}
      <section className="border-b border-border pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={staggerItem} className="text-label">
            {story.company}
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="mt-6 max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink"
          >
            {story.headline}
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="mt-10 grid gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { label: "Role", value: story.role },
              { label: "Timeline", value: story.timeline },
              { label: "Platform", value: story.platform },
              { label: "Company", value: story.company },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-label mb-2">{item.label}</p>
                <p className="text-[0.9375rem] font-medium text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={staggerItem} className="mt-12">
            <p className="text-label mb-6">Impact</p>
            <MetricGrid metrics={story.metrics} />
          </motion.div>

          <motion.div variants={staggerItem} className="mt-10">
            <Button href={story.backHref ?? "/#product-design"} variant="secondary">
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
          <p className="max-w-3xl text-[1.0625rem] leading-relaxed text-body md:text-lg md:leading-relaxed">
            {story.tldr}
          </p>
        </motion.div>
      </SectionShell>

      {/* Challenge */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-12">The challenge</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {story.challenges.map((challenge) => (
              <motion.div
                key={challenge.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-surface p-7 md:p-8"
              >
                <h3 className="text-[1.0625rem] font-medium leading-snug text-ink">
                  {challenge.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                  {challenge.description}
                </p>
                {challenge.bullets && challenge.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {challenge.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-[0.875rem] leading-relaxed text-body"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionShell>

      {/* Process */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-12">My process</h2>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.36fr)] lg:gap-12">
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-max items-center gap-2 md:gap-3">
                {story.processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-2 md:gap-3">
                    <span className="whitespace-nowrap rounded-full border border-border bg-canvas-warm px-4 py-2 text-[0.8125rem] font-medium text-ink">
                      {step}
                    </span>
                    {index < story.processSteps.length - 1 && (
                      <span
                        className="text-muted-soft"
                        aria-hidden
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7 md:p-8">
              <p className="text-label mb-5">My contribution</p>
              <ul className="space-y-2.5">
                {story.contributions.map((item) => (
                  <li
                    key={item}
                    className="text-[0.9375rem] leading-relaxed text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </SectionShell>

      {/* Solution */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-4">Solution</h2>
          <p className="mb-14 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
            Three core experiences that replaced fragmentation with clarity.
          </p>

          <div className="space-y-20 md:space-y-28">
            {story.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start lg:gap-12"
              >
                <div>
                  <p className="text-label mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[1.375rem] font-medium leading-snug tracking-tight text-ink md:text-[1.5rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                    {feature.description}
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_50px_rgba(10,10,10,0.06)]">
                  <div className="relative aspect-[16/10] w-full bg-black">
                    {feature.video ? (
                      <video
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        preload="metadata"
                        poster={feature.videoPoster}
                        aria-label={feature.imageAlt ?? feature.title}
                      >
                        <source src={feature.video} type="video/mp4" />
                      </video>
                    ) : feature.image ? (
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt ?? feature.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 720px"
                      />
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* Impact */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-6">Impact</h2>
          {story.impactBody && (
            <p className="mb-12 max-w-2xl text-[1.0625rem] leading-relaxed text-body md:text-lg">
              {story.impactBody}
            </p>
          )}
          <MetricGrid metrics={story.impactMetrics} size="large" />
          {story.impactTags && story.impactTags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-12">
              {story.impactTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-canvas-warm px-4 py-2 text-[0.8125rem] font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </SectionShell>

      {/* Lessons */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-section-serif mb-12">Lessons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {story.lessons.map((lesson, index) => (
              <div
                key={lesson}
                className="border-t border-border pt-6"
              >
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

      {/* Footer nav */}
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
