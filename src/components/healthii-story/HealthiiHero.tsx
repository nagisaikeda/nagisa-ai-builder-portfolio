"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneScreenshot } from "@/components/ui/PhoneScreenFrame";
import type { HealthiiStory } from "@/lib/case-studies/healthii/types";

const ease = [0.22, 1, 0.36, 1] as const;

const heroHeadline = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const heroFade = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const heroPhones = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, delay: 0.12, ease },
  },
};

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/** Matches back link height (h-9) + headline top margin (mt-4). */
const PHONE_TOP_OFFSET_CLASS = "lg:pt-[3.25rem]";

export function HealthiiHero({ story }: { story: HealthiiStory }) {
  return (
    <section className="border-b border-border pb-16 pt-24 md:min-h-[88vh] md:pb-20 md:pt-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-start lg:gap-x-10 xl:gap-x-14">
        <motion.div
          className="flex flex-col lg:col-start-1"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={heroFade}>
            <Link
              href={story.backHref ?? "/#product-design"}
              className="inline-flex h-9 items-center px-1 text-[0.8125rem] font-medium text-muted transition-opacity hover:opacity-60"
            >
              ← Back
            </Link>
          </motion.div>

          <motion.h1
            variants={heroHeadline}
            className="mt-4 text-[clamp(2.5rem,4.5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink"
          >
            {story.title}
          </motion.h1>

          <motion.p
            variants={heroFade}
            className="mt-3 text-[clamp(1.0625rem,1.8vw,1.375rem)] font-medium tracking-tight text-ink/75"
          >
            {story.subtitle}
          </motion.p>

          <motion.p
            variants={heroFade}
            className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-body md:text-base"
          >
            {story.description}
          </motion.p>

          <motion.div
            variants={heroFade}
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

        <motion.div
          className={`flex justify-center lg:justify-end ${PHONE_TOP_OFFSET_CLASS}`}
          initial="hidden"
          animate="visible"
          variants={heroPhones}
        >
          <div className="flex items-start gap-8">
            {story.heroImages.map((image) => (
              <PhoneScreenshot
                key={image.src}
                src={image.src}
                alt={image.alt}
                priority
                height="clamp(480px, 52vh, 580px)"
                cornerRadius={42}
                sizes="(max-width: 1024px) 38vw, 268px"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
