"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SharpImage } from "@/components/ui/SharpImage";
import { useRouter } from "next/navigation";
import { CardVideoGallery } from "@/components/CardVideoGallery";
import { PasswordGateModal } from "@/components/PasswordGateModal";
import { ProductMockup } from "@/components/ProductMockups";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CONNECTED_WEALTH_PASSWORD, grantConnectedWealthAccess } from "@/lib/connected-wealth-access";
import {
  FEDEX_AI_CONCIERGE_PASSWORD,
  grantFedExAiConciergeAccess,
} from "@/lib/fedex-ai-concierge-access";
import type { WorkItem } from "@/lib/data";
import {
  COMPACT_CARD_IMAGE_SIZES,
  FEATURED_CARD_IMAGE_SIZES,
} from "@/lib/image-sizes";
import { staggerContainer, staggerItem } from "@/lib/motion";

type WorkSectionProps = {
  id: string;
  label?: string;
  title: string;
  description: string;
  items: readonly WorkItem[];
  className?: string;
  variant?: "primary" | "systems" | "compact";
  serif?: boolean;
};

function mediaObjectClass(project: WorkItem): string {
  if (project.imageFit === "contain") return "object-contain object-center";
  if (project.imageAnchor === "left") return "object-cover object-left-top";
  if (project.imagePosition === "right") return "object-cover object-right-top";
  return "object-cover object-top";
}

function MediaFrame({
  children,
  compact,
  tinted,
  featured,
}: {
  children: React.ReactNode;
  compact?: boolean;
  tinted?: boolean;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative min-h-0 min-w-0 max-w-full overflow-hidden ${
        tinted ? "bg-canvas-warm" : "bg-white"
      }`}
    >
      <div
        className={`relative w-full max-w-full overflow-hidden ${
          compact
            ? "aspect-[4/3] min-h-[200px]"
            : featured
              ? "aspect-[16/10] min-h-[280px] md:min-h-[320px] lg:aspect-auto lg:h-full lg:min-h-0"
              : "aspect-[16/10] min-h-[280px] md:min-h-[320px] lg:aspect-auto lg:h-full lg:min-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function EditorialCardMedia({ project }: { project: WorkItem }) {
  const objectClass = `h-full w-full max-w-full ${mediaObjectClass(project)}`;

  if (project.cardVideos && project.cardVideos.length > 0) {
    return (
      <MediaFrame featured>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <CardVideoGallery
            videos={project.cardVideos}
            posters={project.cardVideoPosters}
            deviceFrame={project.cardVideoDeviceFrame ?? true}
          />
        </div>
      </MediaFrame>
    );
  }

  if (project.video) {
    return (
      <MediaFrame featured>
        <video
          className={objectClass}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.videoPoster ?? undefined}
          aria-hidden
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </MediaFrame>
    );
  }

  if (project.image) {
    return (
      <MediaFrame featured>
        <SharpImage
          src={project.image}
          alt=""
          width={1600}
          height={900}
          quality={90}
          className={objectClass}
          sizes={project.imageSizes ?? FEATURED_CARD_IMAGE_SIZES}
        />
      </MediaFrame>
    );
  }

  if (project.mockup) {
    return (
      <MediaFrame featured tinted>
        <div className="flex h-full w-full items-center justify-center overflow-hidden p-6">
          <ProductMockup id={project.mockup} />
        </div>
      </MediaFrame>
    );
  }

  return null;
}

function SystemsCardMedia({ project }: { project: WorkItem }) {
  const objectClass = `h-full w-full max-w-full ${mediaObjectClass(project)}`;

  if (project.image) {
    return (
      <div className="relative aspect-[16/10] min-h-[240px] w-full overflow-hidden md:min-h-[280px]">
        <SharpImage
          src={project.image}
          alt=""
          width={1200}
          height={675}
          quality={90}
          className={objectClass}
          sizes="(max-width: 880px) 100vw, 880px"
        />
      </div>
    );
  }

  if (project.mockup) {
    return (
      <div className="relative aspect-[16/10] min-h-[240px] w-full overflow-hidden bg-canvas-warm md:min-h-[280px]">
        <div className="flex h-full w-full items-center justify-center p-6">
          <ProductMockup id={project.mockup} />
        </div>
      </div>
    );
  }

  return null;
}

function CompactCardMedia({ project }: { project: WorkItem }) {
  if (project.cardVideos && project.cardVideos.length > 0) {
    return (
      <MediaFrame compact>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <CardVideoGallery
            videos={project.cardVideos}
            posters={project.cardVideoPosters}
            compact
            deviceFrame={project.cardVideoDeviceFrame ?? true}
          />
        </div>
      </MediaFrame>
    );
  }

  if (project.video) {
    return (
      <MediaFrame compact>
        <video
          className="h-full w-full max-w-full object-cover object-top"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.videoPoster ?? undefined}
          aria-hidden
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </MediaFrame>
    );
  }

  if (project.image) {
    return (
      <MediaFrame compact>
        <SharpImage
          src={project.image}
          alt=""
          width={800}
          height={600}
          quality={90}
          className={`h-full w-full max-w-full ${mediaObjectClass(project)}`}
          sizes={project.imageSizes ?? COMPACT_CARD_IMAGE_SIZES}
        />
      </MediaFrame>
    );
  }

  if (project.mockup) {
    return (
      <MediaFrame compact tinted>
        <div className="flex h-full w-full items-center justify-center overflow-hidden p-4">
          <ProductMockup id={project.mockup} />
        </div>
      </MediaFrame>
    );
  }

  return null;
}

function TextCta({ label }: { label: string }) {
  return (
    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink transition-all group-hover:gap-2">
      {label}
      <span aria-hidden>→</span>
    </span>
  );
}

function PillCta({ label, disabled }: { label: string; disabled?: boolean }) {
  if (disabled) {
    return (
      <span className="mt-8 inline-flex h-10 w-fit cursor-default items-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-muted">
        {label}
      </span>
    );
  }

  return (
    <span className="mt-8 inline-flex h-10 w-fit items-center rounded-full bg-ink px-5 text-sm font-medium text-canvas-warm transition-colors group-hover:bg-ink-soft">
      {label}
    </span>
  );
}

function ShowcaseCard({
  project,
  variant,
}: {
  project: WorkItem;
  variant: "primary" | "systems" | "compact";
}) {
  const router = useRouter();
  const [gateOpen, setGateOpen] = useState(false);
  const isCompact = variant === "compact";
  const isSystems = variant === "systems";

  const cardInner = (
    <article
      className={`showcase-card group isolate w-full min-w-0 max-w-full overflow-hidden rounded-2xl border bg-surface transition-shadow duration-300 ${
        isCompact
          ? "flex h-full flex-col border-border/60 shadow-none hover:shadow-[0_8px_24px_rgba(10,10,10,0.04)]"
          : isSystems
            ? "border-border/70 shadow-[0_4px_24px_rgba(10,10,10,0.03)] hover:shadow-[0_16px_40px_rgba(10,10,10,0.06)]"
            : "border-border/80 shadow-[0_8px_30px_rgba(10,10,10,0.04)] hover:shadow-[0_20px_50px_rgba(10,10,10,0.08)]"
      }`}
    >
      {isCompact ? (
        <>
          <CompactCardMedia project={project} />
          <div
            className="flex flex-1 flex-col px-5 py-6 md:px-6 md:py-7"
            style={{ backgroundColor: project.tint ?? "#fafafa" }}
          >
            <p className="text-label">{project.category}</p>
            <h3 className="mt-3 text-lg font-medium tracking-tight text-ink md:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
              {project.description}
            </p>
            {project.tags.length > 0 && (
              <p className="text-mono-sm mt-4 text-muted">
                {project.tags.join(" · ")}
              </p>
            )}
            {project.href && (
              <TextCta label={project.cta ?? "Read Case Study"} />
            )}
          </div>
        </>
      ) : isSystems ? (
        <div>
          <div
            className="px-8 py-10 md:px-10 md:py-12"
            style={{ backgroundColor: project.tint ?? "#fafafa" }}
          >
            <p className="text-label">{project.category}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink md:text-[1.75rem]">
              {project.title}
              {project.subtitle && (
                <span className="mt-1 block font-serif-brand text-xl font-normal text-muted md:text-[1.375rem]">
                  {project.subtitle}
                </span>
              )}
            </h3>
            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-body">
              {project.description}
            </p>
            {project.tags.length > 0 && (
              <p className="text-mono-sm mt-5">{project.tags.join(" · ")}</p>
            )}
            {project.href ? (
              <PillCta label={project.cta ?? "View case study"} />
            ) : project.cta ? (
              <PillCta label={project.cta} disabled />
            ) : null}
          </div>
          <SystemsCardMedia project={project} />
        </div>
      ) : (
        <div className="grid w-full min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-stretch">
          <div
            className="flex min-w-0 flex-col justify-between p-8 md:p-10 lg:p-12"
            style={{ backgroundColor: project.tint ?? "#fafafa" }}
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{project.category}</p>
              <h3 className="mt-5 text-[1.625rem] font-medium leading-tight tracking-tight text-ink md:text-[1.75rem]">
                {project.title}
                {project.subtitle && (
                  <span className="mt-1 block font-serif-brand text-[1.125rem] font-normal text-muted md:text-[1.25rem]">
                    {project.subtitle}
                  </span>
                )}
              </h3>
              <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-body">
                {project.description}
              </p>
              {project.meta && (
                <p className="text-mono-sm mt-4 text-accent">{project.meta}</p>
              )}
              {project.tags.length > 0 && (
                <p className={`text-mono-sm ${project.meta ? "mt-3" : "mt-6"}`}>
                  {project.tags.join(" · ")}
                </p>
              )}
            </div>
            {project.href ? (
              <PillCta label={project.cta ?? "View case study"} />
            ) : project.cta ? (
              <PillCta label={project.cta} disabled />
            ) : null}
          </div>
          <div className="min-h-0 min-w-0 max-w-full">
            <EditorialCardMedia project={project} />
          </div>
        </div>
      )}
    </article>
  );

  if (project.href && project.passwordProtected) {
    const href = project.href;
    const isFedEx = href.includes("fedex-ai-concierge");
    const expectedPassword = isFedEx
      ? FEDEX_AI_CONCIERGE_PASSWORD
      : CONNECTED_WEALTH_PASSWORD;

    return (
      <>
        <button
          type="button"
          onClick={() => setGateOpen(true)}
          className={`block w-full min-w-0 cursor-pointer overflow-hidden rounded-2xl text-left ${
            isCompact ? "h-full" : ""
          }`}
        >
          {cardInner}
        </button>
        <PasswordGateModal
          open={gateOpen}
          password={expectedPassword}
          onClose={() => setGateOpen(false)}
          onSuccess={() => {
            if (isFedEx) {
              grantFedExAiConciergeAccess();
            } else {
              grantConnectedWealthAccess();
            }
            setGateOpen(false);
            router.push(href);
          }}
          title={project.title}
        />
      </>
    );
  }

  if (project.href) {
    const isExternal = project.href.startsWith("http");
    return (
      <Link
        href={project.href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={`block w-full min-w-0 overflow-hidden rounded-2xl ${
          isCompact ? "h-full" : ""
        }`}
      >
        {cardInner}
      </Link>
    );
  }

  return cardInner;
}

export function WorkSection({
  id,
  label,
  title,
  description,
  items,
  className = "",
  variant = "primary",
  serif,
}: WorkSectionProps) {
  const isCompact = variant === "compact";
  const isSystems = variant === "systems";
  const useSerif = serif ?? !isCompact;

  return (
    <Section id={id} className={className}>
      <SectionHeader
        label={label}
        title={title}
        serif={useSerif}
        description={description}
        descriptionWide
        muted={isCompact}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className={
          isCompact
            ? "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
            : isSystems
              ? "mx-auto mt-12 max-w-[880px]"
              : "mt-14 flex min-w-0 flex-col gap-8 md:gap-10"
        }
      >
        {items.map((project) => (
          <motion.div
            key={project.title}
            variants={staggerItem}
            className={
              isCompact ? "min-w-0" : "min-w-0 max-w-full overflow-hidden"
            }
          >
            <ShowcaseCard project={project} variant={variant} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
