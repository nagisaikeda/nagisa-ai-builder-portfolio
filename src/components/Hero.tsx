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
            {site.headlineLines.map((line, i) => (
              <span key={line} className={i < 2 ? "block" : "block"}>
                {line}
              </span>
            ))}
          </motion.h1>
          <motion.div
            variants={staggerItem}
            className="mt-6 space-y-1 text-mono-sm"
          >
            {site.credibility.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
          <motion.p variants={staggerItem} className="text-mono-sm mt-4">
            {site.proof}
          </motion.p>
          <motion.p variants={staggerItem} className="text-mono-sm mt-3">
            {site.progression}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#ai-products">Explore Projects</Button>
            <Button href="#build-log" variant="secondary">
              Build Log →
            </Button>
            <Button href={site.resume} variant="ghost" external>
              Resume
            </Button>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
