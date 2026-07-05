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
import { grantConnectedWealthAccess } from "@/lib/connected-wealth-access";
import type { WorkItem } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/motion";

type WorkSectionProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: readonly WorkItem[];
  className?: string;
  variant?: "primary" | "secondary";
};

function CardVisual({
  project,
  compact,
}: {
  project: WorkItem;
  compact?: boolean;
}) {
  const minH = compact ? "md:min-h-[300px]" : "md:min-h-[380px]";
  const zoom = project.imageZoom ?? 1;
  const anchor = project.imageAnchor ?? "center";
  const zoomOrigin = anchor === "left" ? "top left" : "top center";
  const coverClass =
    anchor === "left"
      ? "object-cover object-left object-top"
      : "object-cover object-top";

  if (project.cardVideos && project.cardVideos.length > 0) {
    return (
      <CardVideoGallery
        videos={project.cardVideos}
        posters={project.cardVideoPosters}
        compact={compact}
        deviceFrame={project.cardVideoDeviceFrame ?? true}
      />
    );
  }

  if (project.video) {
    return (
      <div
        className={`relative min-h-[240px] self-stretch overflow-hidden bg-white ${minH}`}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover object-top"
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
      </div>
    );
  }

  if (project.image) {
    const fit = project.imageFit ?? "cover";
    const objectClass =
      fit === "contain"
        ? "object-contain object-center"
        : project.imagePosition === "right"
          ? "object-cover object-[right_center] md:!left-auto md:!w-[165%] md:!max-w-none md:object-left"
          : coverClass;

    return (
      <div
        className={`relative min-h-[240px] self-stretch overflow-hidden bg-white ${minH}`}
      >
        <div
          className={`absolute inset-0 ${fit === "contain" ? "p-4 md:p-6" : ""}`}
          style={
            zoom !== 1 && fit === "cover"
              ? { transform: `scale(${zoom})`, transformOrigin: zoomOrigin }
              : undefined
          }
        >
          <SharpImage
            src={project.image}
            alt=""
            fill
            unoptimized={project.imageUnoptimized}
            quality={project.imageUnoptimized ? undefined : 90}
            className={objectClass}
            sizes={
              project.imageSizes ?? "(max-width: 1024px) 100vw, 700px"
            }
          />
        </div>
      </div>
    );
  }

  if (project.mockup) {
    return (
      <div
        className={`relative min-h-[240px] overflow-hidden bg-canvas-warm ${minH}`}
      >
        <ProductMockup id={project.mockup} />
      </div>
    );
  }

  return null;
}

function ShowcaseCard({
  project,
  compact,
}: {
  project: WorkItem;
  compact?: boolean;
}) {
  const router = useRouter();
  const [gateOpen, setGateOpen] = useState(false);

  const content = (
    <article
      className={`showcase-card group overflow-hidden rounded-2xl border bg-surface transition-all duration-300 ${
        project.cardVideos
          ? "border-border/60 shadow-[0_8px_24px_rgba(10,10,10,0.04)] hover:scale-[1.01] hover:shadow-[0_24px_56px_rgba(10,10,10,0.1)]"
          : compact
            ? "border-border/60 shadow-none hover:shadow-[0_8px_24px_rgba(10,10,10,0.04)]"
            : "border-border/80 shadow-[0_8px_30px_rgba(10,10,10,0.04)] hover:shadow-[0_20px_50px_rgba(10,10,10,0.08)]"
      }`}
    >
      <div className="grid lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-stretch">
        <div
          className={`flex flex-col justify-between ${
            compact ? "p-6 md:p-8 lg:p-9" : "p-8 md:p-10 lg:p-12"
          }`}
          style={{ backgroundColor: project.tint ?? "#fafafa" }}
        >
          <div>
            <p
              className={`font-medium text-ink ${compact ? "text-sm" : "text-sm"}`}
            >
              {project.category}
            </p>
            <h3
              className={`mt-4 font-medium leading-tight tracking-tight text-ink ${
                compact
                  ? "text-xl md:text-[1.375rem]"
                  : "mt-5 text-[1.625rem] md:text-[1.75rem]"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`max-w-md leading-relaxed text-body ${
                compact ? "mt-3 text-sm" : "mt-4 text-[0.9375rem]"
              }`}
            >
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
            <span className="mt-8 inline-flex h-10 w-fit items-center rounded-full bg-ink px-5 text-sm font-medium text-canvas-warm transition-colors group-hover:bg-ink-soft">
              {project.cta ?? "View case study"}
            </span>
          ) : project.cta ? (
            <span className="mt-8 inline-flex h-10 w-fit cursor-default items-center rounded-full border border-border-strong bg-surface px-5 text-sm font-medium tracking-tight text-muted">
              {project.cta}
            </span>
          ) : null}
        </div>
        <CardVisual project={project} compact={compact} />
      </div>
    </article>
  );

  if (project.href && project.passwordProtected) {
    return (
      <>
        <button
          type="button"
          onClick={() => setGateOpen(true)}
          className="block w-full cursor-pointer text-left"
        >
          {content}
        </button>
        <PasswordGateModal
          open={gateOpen}
          onClose={() => setGateOpen(false)}
          onSuccess={() => {
            grantConnectedWealthAccess();
            setGateOpen(false);
            router.push(project.href!);
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
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function WorkSection({
  id,
  label,
  title,
  description,
  items,
  className = "",
  variant = "primary",
}: WorkSectionProps) {
  const isSecondary = variant === "secondary";

  return (
    <Section id={id} className={className}>
      <SectionHeader
        label={label}
        title={title}
        serif={!isSecondary}
        description={description}
        descriptionWide
        muted={isSecondary}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className={`flex flex-col ${isSecondary ? "mt-10 gap-6" : "mt-14 gap-8 md:gap-10"}`}
      >
        {items.map((project) => (
          <motion.div key={project.title} variants={staggerItem}>
            <ShowcaseCard project={project} compact={isSecondary} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
