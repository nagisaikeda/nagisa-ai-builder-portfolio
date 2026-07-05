"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectScreenshot } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ProjectScreenshots({
  heading = "Product in practice",
  screenshots,
}: {
  heading?: string;
  screenshots: readonly ProjectScreenshot[];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-16 md:py-20"
    >
      <h2 className="text-section-serif mb-10">{heading}</h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {screenshots.map((shot, index) => (
          <motion.figure
            key={shot.src ?? `${shot.alt}-${index}`}
            variants={staggerItem}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-[16/10] bg-white">
              {shot.src && !shot.placeholder ? (
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 544px"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <p className="text-label">{shot.alt}</p>
                  <p className="mt-2 text-sm text-muted">Screenshot coming soon</p>
                </div>
              )}
            </div>
            <figcaption className="border-t border-border px-5 py-4 text-[0.875rem] leading-relaxed text-body">
              {shot.caption}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </motion.section>
  );
}
