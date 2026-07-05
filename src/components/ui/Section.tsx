"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className={`relative z-10 mx-auto w-full max-w-[1120px] px-6 py-24 md:px-8 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  label,
  title,
  serif = false,
  description,
  descriptionWide = false,
  muted = false,
}: {
  label?: string;
  title: string;
  serif?: boolean;
  description?: string;
  descriptionWide?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="mb-0">
      {label && (
        <p className={`text-label mb-4 ${muted ? "text-muted-soft" : ""}`}>
          {label}
        </p>
      )}
      <h2
        className={
          serif
            ? "text-section-serif"
            : muted
              ? "text-lg font-medium tracking-tight text-body md:text-xl"
              : "text-section-sans"
        }
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[0.9375rem] leading-relaxed ${
            muted ? "text-muted" : "text-body"
          } ${descriptionWide ? "max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
