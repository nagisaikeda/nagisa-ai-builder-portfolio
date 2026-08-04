"use client";

import { motion } from "framer-motion";
import { HeroVisual } from "@/components/HeroVisual";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative z-10 pt-24 pb-8 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.h1 variants={staggerItem} className="text-hero-headline">
            {site.headline}
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="mt-6 space-y-1 text-mono-sm"
          >
            {site.credibility.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="mt-7 flex flex-wrap gap-2"
          >
            {site.identityBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink"
              >
                {badge}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#ai-products">Explore Work</Button>
            <Button href={site.resumePage} variant="secondary">
              View Resume
            </Button>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
