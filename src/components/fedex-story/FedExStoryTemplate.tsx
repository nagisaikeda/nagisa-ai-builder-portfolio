"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AssetPlaceholder } from "@/components/fedex-story/AssetPlaceholder";
import { ConceptualFlow } from "@/components/fedex-story/ConceptualFlow";
import { FedExStoryImage } from "@/components/fedex-story/FedExStoryImage";
import { FedExStoryVideo } from "@/components/fedex-story/FedExStoryVideo";
import { Button } from "@/components/ui/Button";
import type { FedExStory } from "@/lib/case-studies/fedex/types";
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

function SectionHeading({
  children,
  dark,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-section-serif ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function Body({
  children,
  dark,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.9375rem] leading-relaxed md:text-base ${
        dark ? "text-white/60" : "text-body"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function FedExStoryTemplate({ story }: { story: FedExStory }) {
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
            className="mt-6 font-serif-brand text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[0.95] tracking-[-0.04em] text-ink"
          >
            {story.title}
          </motion.h1>

          <motion.blockquote
            variants={staggerItem}
            className="mt-10 max-w-3xl border-l border-border pl-5 text-[clamp(1.125rem,2.3vw,1.5rem)] font-medium leading-snug tracking-tight text-ink md:pl-6"
          >
            {story.problem}
          </motion.blockquote>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-body md:text-[1.0625rem]"
          >
            {story.subtitle}
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body"
          >
            {story.summary}
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

          <motion.div variants={staggerItem} className="mt-10">
            <FedExStoryVideo
              src={story.onboardingFlow.video}
              poster={story.onboardingFlow.poster}
              ariaLabel="FedEx AI Concierge complete onboarding flow demonstration"
              className="min-h-[240px] md:min-h-[420px]"
            />
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
              {story.onboardingFlow.caption}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 1. Opportunity */}
      <SectionShell className="!border-t-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.opportunity.heading}</SectionHeading>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:items-start">
            <div className="space-y-5">
              {story.opportunity.body.split("\n\n").map((paragraph) => (
                <Body key={paragraph.slice(0, 48)}>{paragraph}</Body>
              ))}
            </div>
            <FedExStoryImage
              visual={story.opportunity.visual}
              aspect="aspect-[4/3]"
              className="min-h-[280px]"
            />
          </div>
        </motion.div>
      </SectionShell>

      {/* 2. Why different */}
      <SectionShell dark className="-mx-6 px-6 md:-mx-8 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading dark>{story.whyDifferent.heading}</SectionHeading>
          <Body dark className="mt-5 max-w-2xl">
            {story.whyDifferent.intro}
          </Body>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.04] px-5 py-3 text-mono-sm text-white/40 md:px-6">
              <span>Traditional software</span>
              <span>Enterprise AI</span>
            </div>
            {story.whyDifferent.contrasts.map((row) => (
              <div
                key={row.traditional}
                className="grid grid-cols-1 gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-2 sm:gap-8 md:px-6"
              >
                <p className="text-[0.9375rem] leading-relaxed text-white/45">
                  {row.traditional}
                </p>
                <p className="text-[0.9375rem] font-medium leading-relaxed text-white">
                  {row.enterpriseAi}
                </p>
              </div>
            ))}
          </div>

          <Body dark className="mt-10 max-w-2xl">
            {story.whyDifferent.closing}
          </Body>
        </motion.div>
      </SectionShell>

      {/* 3. Principles */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.principles.heading}</SectionHeading>
          <div className="mt-10 space-y-0">
            {story.principles.items.map((principle, index) => (
              <div
                key={principle.title}
                className="grid gap-3 border-t border-border py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-10"
              >
                <span className="text-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-medium tracking-tight text-ink md:text-[1.25rem]">
                    {principle.title}
                  </h3>
                  <Body className="mt-3 max-w-2xl">
                    {principle.description}
                  </Body>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* 4. Multimodal model */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.multimodal.heading}</SectionHeading>
          <Body className="mt-5 max-w-2xl">{story.multimodal.intro}</Body>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {story.multimodal.modes.map((mode) => (
              <div
                key={mode.title}
                className="rounded-2xl border border-border bg-surface px-6 py-6"
              >
                <h3 className="text-[1.0625rem] font-medium text-ink">
                  {mode.title}
                </h3>
                <Body className="mt-3">{mode.description}</Body>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-label mb-6">Interaction loop</p>
            <ConceptualFlow steps={story.multimodal.flow} />
          </div>

          <div className="mt-12">
            <FedExStoryImage
              visual={story.multimodal.visual}
              aspect="aspect-[16/9]"
              className="min-h-[240px]"
            />
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
              {story.multimodal.caption}
            </p>
          </div>
        </motion.div>
      </SectionShell>

      {/* 5. Voice + Structured UI */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.voiceStructured.heading}</SectionHeading>
          <Body className="mt-5 max-w-2xl">{story.voiceStructured.intro}</Body>
          <Body className="mt-4 max-w-2xl">{story.voiceStructured.body}</Body>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {story.voiceStructured.pairings.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface px-6 py-6"
              >
                <p className="text-label mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[1.0625rem] font-medium text-ink">
                  {item.title}
                </h3>
                <Body className="mt-2">{item.description}</Body>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <FedExStoryImage
              visual={story.voiceStructured.visual}
              aspect="aspect-[16/9]"
              className="min-h-[220px]"
            />
          </div>
        </motion.div>
      </SectionShell>

      {/* 6. Intent translation */}
      <SectionShell dark className="-mx-6 px-6 md:-mx-8 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading dark>{story.intent.heading}</SectionHeading>
          <Body dark className="mt-5 max-w-2xl">
            {story.intent.intro}
          </Body>

          <div className="mt-12">
            <ConceptualFlow steps={story.intent.stages} dark />
          </div>

          <div className="mt-12">
            <FedExStoryImage
              visual={story.intent.visual}
              dark
              aspect="aspect-[16/9]"
              className="min-h-[240px]"
            />
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-white/55">
              {story.intent.caption}
            </p>
          </div>
        </motion.div>
      </SectionShell>

      {/* 7. Felix */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.felix.heading}</SectionHeading>
          <Body className="mt-5 max-w-2xl">{story.felix.intro}</Body>
          <Body className="mt-4 max-w-2xl">{story.felix.body}</Body>

          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {story.felix.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-[0.9375rem] leading-relaxed text-ink"
              >
                <span className="text-accent shrink-0" aria-hidden>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <FedExStoryImage
              visual={story.felix.visual}
              aspect="aspect-[16/9]"
              className="min-h-[220px]"
            />
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
              {story.felix.caption}
            </p>
          </div>
        </motion.div>
      </SectionShell>

      {/* 8. Patterns */}
      <SectionShell className="bg-canvas-warm/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.patterns.heading}</SectionHeading>
          <Body className="mt-5 max-w-2xl">{story.patterns.intro}</Body>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {story.patterns.items.map((pattern) => (
              <motion.div
                key={pattern.name}
                variants={staggerItem}
                className="rounded-xl border border-border bg-surface px-5 py-5"
              >
                <h3 className="text-[0.9875rem] font-medium text-ink">
                  {pattern.name}
                </h3>
                <Body className="mt-2 text-sm md:text-sm">
                  {pattern.purpose}
                </Body>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionShell>

      {/* 9. Design system */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.designSystem.heading}</SectionHeading>
          <Body className="mt-5 max-w-2xl">{story.designSystem.body}</Body>
          <Body className="mt-4 max-w-2xl">{story.designSystem.influence}</Body>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {story.designSystem.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-surface px-6 py-7 text-center"
              >
                <p className="font-serif-brand text-[clamp(2.25rem,4vw,3rem)] leading-none tracking-tight text-ink">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm text-body">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {story.designSystem.layers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-xl border border-border bg-surface px-5 py-5"
              >
                <h3 className="text-[1rem] font-medium text-ink">
                  {layer.title}
                </h3>
                <Body className="mt-2 text-sm md:text-sm">
                  {layer.description}
                </Body>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <AssetPlaceholder
              label={story.designSystem.diagramPlaceholder}
              aspect="aspect-[16/9]"
              className="min-h-[200px]"
            />
            <p className="mt-3 text-mono-sm text-muted">
              Conceptual architecture placeholder
            </p>
          </div>
        </motion.div>
      </SectionShell>

      {/* 10. Reflection */}
      <SectionShell>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionHeading>{story.reflection.heading}</SectionHeading>
          <ol className="mt-10 space-y-0">
            {story.reflection.items.map((item, index) => (
              <li
                key={item}
                className="grid gap-3 border-t border-border py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-10"
              >
                <span className="text-label">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="max-w-3xl text-[1.0625rem] font-medium leading-snug tracking-tight text-ink md:text-[1.1875rem]">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </SectionShell>

      {/* Next */}
      <section className="border-t border-border py-16 md:py-20">
        <p className="text-label mb-6">Next project</p>
        <h2 className="font-serif-brand text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-[-0.03em] text-ink">
          {story.next.title}
        </h2>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-body">
          {story.next.description}
        </p>
        <div className="mt-8">
          <Button href={story.next.href}>{story.next.cta} →</Button>
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
