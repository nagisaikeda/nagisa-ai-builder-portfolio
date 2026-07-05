"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { RelatedProject } from "@/lib/case-studies/types";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ProjectCTA({
  heading,
  projects,
}: {
  heading: string;
  projects: readonly RelatedProject[];
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="border-t border-border py-20 md:py-24"
    >
      <h2 className="text-section-serif mb-10">{heading}</h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={staggerItem}>
            <Link
              href={project.href}
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
    </motion.section>
  );
}
