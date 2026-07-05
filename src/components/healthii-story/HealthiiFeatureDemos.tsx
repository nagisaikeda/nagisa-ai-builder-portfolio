"use client";

import { motion } from "framer-motion";
import { PhoneScreenVideo } from "@/components/ui/PhoneScreenFrame";
import type { VideoGalleryItem } from "@/components/project/VideoGallery";

const ease = [0.22, 1, 0.36, 1] as const;

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const phoneScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease },
  },
};

type HealthiiFeatureDemosProps = {
  heading: string;
  description: string;
  items: readonly VideoGalleryItem[];
};

function FeatureDemoCard({ item }: { item: VideoGalleryItem }) {
  return (
    <motion.article
      variants={cardFadeUp}
      className="flex min-w-0 flex-col overflow-visible rounded-[24px] border border-border/70 bg-[#f6f6f6] px-8 pb-10 pt-14 shadow-[0_1px_2px_rgba(10,10,10,0.04),0_8px_24px_rgba(10,10,10,0.04)] md:px-10 md:pb-12 md:pt-16"
    >
      <motion.div
        variants={phoneScale}
        className="relative z-10 flex justify-center -translate-y-5 md:-translate-y-8"
      >
        <PhoneScreenVideo
          src={item.src}
          poster={item.poster}
          ariaLabel={item.title}
        />
      </motion.div>

      <figcaption className="mt-10 text-center md:mt-12">
        <h3 className="text-[clamp(1.75rem,2.2vw,2rem)] font-medium leading-[1.12] tracking-[-0.025em] text-ink">
          {item.title}
        </h3>
        {item.description && (
          <p className="mx-auto mt-4 max-w-[30ch] text-[1.125rem] leading-relaxed text-body">
            {item.description}
          </p>
        )}
      </figcaption>
    </motion.article>
  );
}

export function HealthiiFeatureDemos({
  heading,
  description,
  items,
}: HealthiiFeatureDemosProps) {
  return (
    <div className="mx-auto w-full max-w-[1160px]">
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
        {heading}
      </h2>
      <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-body md:text-base">
        {description}
      </p>

      <motion.div
        className="mt-10 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-2 md:gap-14 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={cardContainer}
      >
        {items.map((item) => (
          <FeatureDemoCard key={item.src} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
