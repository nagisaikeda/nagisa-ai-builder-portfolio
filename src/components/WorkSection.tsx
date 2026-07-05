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

function objectPositionClass(project: WorkItem): string {
  if (project.imageFit === "contain") return "object-contain object-center";
  if (project.imageAnchor === "left") return "object-cover object-left-top";
  if (project.imagePosition === "right") return "object-cover object-right-top";
  return "object-cover object-top";
}

function EditorialCardMedia({ project }: { project: WorkItem }) {
  const mediaShell =
    "relative h-full min-h-[280px] w-full overflow-hidden bg-white md:min-h-[320px] lg:min-h-[380px]";
  const objectClass = objectPositionClass(project);

  if (project.video) {
    return (
      <div className={mediaShell}>
        <video
          className={`h-full w-full ${objectClass}`}
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
    return (
      <div className={mediaShell}>
        <SharpImage
          src={project.image}
          alt=""
          fill
          unoptimized={project.imageUnoptimized}
          quality={project.imageUnoptimized ? undefined : 90}
          className={objectClass}
          sizes={project.imageSizes ?? "(max-width: 1024px) 100vw, 640px"}
        />
      </div>
    );
  }

  if (project.mockup) {
    return (
      <div
        className={`${mediaShell} flex items-center justify-center bg-canvas-warm`}
      >
        <ProductMockup id={project.mockup} />
      </div>
    );
  }

  return null;
}

function CompactCardMedia({
  project,
}: {
  project: WorkItem;
}) {
  const mediaShell =
    "relative h-full min-h-[220px] w-full overflow-hidden bg-white md:min-h-[260px]";

  if (project.cardVideos && project.cardVideos.length > 0) {
    return (
      <div className={mediaShell}>
        <CardVideoGallery
          videos={project.cardVideos}
          posters={project.cardVideoPosters}
          compact
          deviceFrame={project.cardVideoDeviceFrame ?? true}
        />
      </div>
    );
  }

  if (project.video) {
    return (
      <div className={mediaShell}>
        <video
          className="h-full w-full object-cover object-top"
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
    return (
      <div className={mediaShell}>
        <SharpImage
          src={project.image}
          alt=""
          fill
          unoptimized={project.imageUnoptimized}
          quality={project.imageUnoptimized ? undefined : 90}
          className={objectPositionClass(project)}
          sizes={project.imageSizes ?? "(max-width: 1024px) 100vw, 480px"}
        />
      </div>
    );
  }

  if (project.mockup) {
    return (
      <div
        className={`${mediaShell} flex items-center justify-center bg-canvas-warm`}
      >
        <ProductMockup id={project.mockup} />
      </div>
    );
  }

  return null;
}

function CardVisual({
  project,
  compact,
}: {
  project: WorkItem;
  compact?: boolean;
}) {
  if (compact) {
    return <CompactCardMedia project={project} />;
  }
  return <EditorialCardMedia project={project} />;
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
      className={`showcase-card group isolate overflow-hidden rounded-2xl border bg-surface transition-shadow duration-300 ${
        compact
          ? "border-border/60 shadow-none hover:shadow-[0_8px_24px_rgba(10,10,10,0.04)]"
          : "border-border/80 shadow-[0_8px_30px_rgba(10,10,10,0.04)] hover:shadow-[0_20px_50px_rgba(10,10,10,0.08)]"
      }`}
    >
      <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-stretch">
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
        <div className="relative min-h-0 overflow-hidden">
          <CardVisual project={project} compact={compact} />
        </div>
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
