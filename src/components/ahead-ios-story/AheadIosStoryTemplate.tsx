"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCTA } from "@/components/project/ProjectCTA";
import { VideoGallery } from "@/components/project/VideoGallery";
import { Button } from "@/components/ui/Button";
import { SharpImage } from "@/components/ui/SharpImage";
import type { AheadIosStory } from "@/lib/case-studies/ahead-ios/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

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

function PhoneShot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[280px]">
          <div className="overflow-hidden rounded-[2rem] border-[8px] border-ink/90 bg-ink p-1 shadow-[0_24px_60px_rgba(10,10,10,0.12)]">
            <div
              className="relative w-full rounded-[1.25rem] bg-black"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              <SharpImage
                src={src}
                alt={alt}
                fill
                unoptimized
                className="object-contain"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-[0.8125rem] leading-relaxed text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function AheadIosStoryTemplate({ story }: { story: AheadIosStory }) {
  return (
    <article>
      <section className="border-b border-border pb-14 pt-28 md:pb-20 md:pt-32">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[0.8125rem] font-medium text-emerald-900">
              <span aria-hidden>✅</span>
              {story.shippedBadge}
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mt-8 max-w-4xl text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink"
          >
            {story.title}
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-[clamp(1.125rem,2vw,1.5rem)] font-medium tracking-tight text-ink/80"
          >
            {story.subtitle}
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-body md:text-lg"
          >
            {story.description}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={story.appStoreUrl} external variant="primary">
              View on App Store
            </Button>
            <Button href={story.backHref ?? "/#product-design"} variant="secondary">
              {story.backLabel ?? "Back to Design Work"}
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-12 grid gap-5 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {story.meta.map((item) => (
              <div key={item.label}>
                <p className="text-label mb-1.5">{item.label}</p>
                <p className="text-[0.9375rem] leading-snug text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>01</SectionLabel>
          <VideoGallery
            heading={story.featureDemos.heading}
            description={story.featureDemos.description}
            items={story.featureDemos.items}
          />
        </motion.div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>02</SectionLabel>
          <SectionHeading>{story.overview.heading}</SectionHeading>
          <div className="mt-8 max-w-2xl space-y-4 text-[1.0625rem] leading-relaxed text-body">
            {story.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>03</SectionLabel>
          <SectionHeading>{story.productDesign.heading}</SectionHeading>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-body">
            {story.productDesign.body}
          </p>
          <ul className="mt-8 max-w-xl space-y-3">
            {story.productDesign.highlights.map((item) => (
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

      <section className="border-b border-border py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>04</SectionLabel>
          <SectionHeading>{story.mobileUx.heading}</SectionHeading>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-body">
            {story.mobileUx.body}
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {story.mobileUx.screens.map((screen) => (
              <PhoneShot
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                caption={screen.caption}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>05</SectionLabel>
          <SectionHeading>{story.interactionDesign.heading}</SectionHeading>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-body">
            {story.interactionDesign.body}
          </p>
          <ul className="mt-8 max-w-xl space-y-3">
            {story.interactionDesign.patterns.map((item) => (
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

      <section className="border-b border-border py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>06</SectionLabel>
          <SectionHeading>{story.swiftui.heading}</SectionHeading>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-body">
            {story.swiftui.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {story.swiftui.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 text-[0.8125rem] font-medium text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:gap-14"
        >
          <div>
            <SectionLabel>07</SectionLabel>
            <SectionHeading>{story.appStore.heading}</SectionHeading>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
              {story.appStore.body}
            </p>
            <ul className="mt-8 space-y-3">
              {story.appStore.checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.9375rem] font-medium text-ink"
                >
                  <span className="text-emerald-600" aria-hidden>
                    ✅
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href={story.appStoreUrl} external variant="primary">
                View on App Store
              </Button>
            </div>
          </div>
          <PhoneShot
            src={story.appStore.image}
            alt={story.appStore.imageAlt}
            caption=""
          />
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
