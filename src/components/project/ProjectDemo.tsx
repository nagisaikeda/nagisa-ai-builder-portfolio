"use client";

import { motion } from "framer-motion";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";
import type { CaseStudy } from "@/lib/case-studies/types";
import { fadeUp } from "@/lib/motion";

type ProjectDemoProps = NonNullable<CaseStudy["demo"]>;

export function ProjectDemo({
  heading,
  body,
  example,
  flow,
  closing,
  videoId,
  screenshots,
  caption,
}: ProjectDemoProps) {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="border-t border-border py-16 md:py-20"
      >
        <h2 className="text-section-serif max-w-2xl">{heading}</h2>
        {body?.trim() && (
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
            {body}
          </p>
        )}

        {videoId && (
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Project demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}

        {example && (
          <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-canvas-warm px-6 py-5 md:px-8 md:py-6">
            <p className="text-[0.9375rem] leading-relaxed text-ink">{example}</p>
          </div>
        )}

        {flow && flow.length > 0 && (
          <pre className="mt-8 max-w-2xl overflow-x-auto rounded-2xl border border-border bg-surface px-6 py-5 font-mono text-[0.8125rem] leading-relaxed text-ink md:px-8">
            {flow.join("\n→ ")}
          </pre>
        )}

        {closing && (
          <p className="mt-8 max-w-2xl text-[0.9375rem] leading-relaxed text-body">
            {closing}
          </p>
        )}

        {caption && (
          <p className="text-mono-sm mt-6">{caption}</p>
        )}
      </motion.section>

      {screenshots && screenshots.items.length > 0 && (
        <ProjectScreenshots
          heading={screenshots.heading}
          screenshots={screenshots.items}
        />
      )}
    </>
  );
}
