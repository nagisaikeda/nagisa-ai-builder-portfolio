"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function ResumeSection() {
  return (
    <Section
      id="resume"
      className="border-t border-border bg-canvas-warm/30"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div className="max-w-xl">
          <p className="text-label">Resume</p>
          <h2 className="text-section-serif mt-6">
            AI Design Engineer résumé
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
            One-page overview of enterprise AI work, shipped AI products, and
            AI-native design systems.
          </p>
        </div>

        <Button href={site.resumePage}>View Resume →</Button>
      </motion.div>
    </Section>
  );
}
