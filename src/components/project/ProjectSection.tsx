"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type ProjectSectionProps = {
  id?: string;
  label?: string;
  heading: string;
  body?: string;
  takeaway?: string;
  children?: React.ReactNode;
  className?: string;
};

export function ProjectSection({
  id,
  label,
  heading,
  body,
  takeaway,
  children,
  className = "",
}: ProjectSectionProps) {
  const paragraphs =
    body?.split("\n\n").filter((paragraph) => paragraph.trim()) ?? [];

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className={`border-t border-border py-16 md:py-20 ${className}`}
    >
      {label && <p className="text-label mb-4">{label}</p>}
      <h2 className="text-section-serif max-w-2xl">{heading}</h2>
      {paragraphs.length > 0 && (
        <div className="mt-5 max-w-2xl space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-[0.9375rem] leading-relaxed text-body"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {takeaway && (
        <p className="mt-8 max-w-2xl text-[0.9375rem] font-medium leading-relaxed text-ink">
          {takeaway}
        </p>
      )}
      {children && <div className="mt-10">{children}</div>}
    </motion.section>
  );
}
