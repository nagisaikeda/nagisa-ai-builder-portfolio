"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroPreview } from "@/lib/data";

const SHIPPING_STAGGER_MS = 275;
const SHIPPING_INITIAL_DELAY_MS = 400;

function WindowChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
      <span className="h-2.5 w-2.5 rounded-full bg-border" />
    </div>
  );
}

function ShippingList({
  items,
}: {
  items: typeof heroPreview.shipping;
}) {
  const itemCount = items.length;
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const timeout = window.setTimeout(() => setCompletedCount(itemCount), 0);
      return () => clearTimeout(timeout);
    }

    const timeouts = items.map((_, index) =>
      window.setTimeout(
        () => setCompletedCount(index + 1),
        SHIPPING_INITIAL_DELAY_MS + index * SHIPPING_STAGGER_MS,
      ),
    );

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [itemCount, items]);

  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => {
        const isComplete = index < completedCount;

        return (
          <li
            key={item.label}
            className={`flex items-start gap-2 text-[11px] leading-snug ${
              "active" in item && item.active
                ? "font-medium text-ink"
                : "text-body"
            }`}
          >
            <span className="text-muted-soft mt-px shrink-0">
              <span
                className={
                  isComplete
                    ? "shipping-check shipping-check--complete"
                    : "shipping-check"
                }
                aria-hidden={!isComplete}
              >
                {isComplete ? "✓" : ""}
              </span>
            </span>
            <span
              className={
                isComplete
                  ? "shipping-item-text shipping-item-text--complete"
                  : "shipping-item-text"
              }
            >
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 w-full max-w-[1120px] md:mt-20"
    >
      <div className="relative aspect-[16/9] min-h-[320px] overflow-hidden rounded-xl border border-border md:min-h-[420px]">
        <Image
          src="/images/hero-artwork.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
        <div
          className="artwork-grain pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />

        {/* Main builder window */}
        <div className="ui-window absolute left-[4%] top-[10%] z-20 flex w-[min(92%,560px)] flex-col overflow-hidden rounded-lg md:left-[6%] md:top-[8%]">
          <WindowChrome />
          <div className="flex w-full">
            <aside className="hidden w-[38%] border-r border-border bg-canvas-warm p-4 sm:block">
              <p className="text-label mb-3 text-[10px]">Shipping</p>
              <ShippingList items={heroPreview.shipping} />
            </aside>
            <div className="min-w-0 flex-1 bg-surface p-4 md:p-5">
              <p className="text-label mb-3 text-[10px]">Agent session</p>
              <div className="space-y-3">
                {heroPreview.conversation.map((msg, i) => (
                  <p
                    key={i}
                    className={`text-[11px] leading-relaxed md:text-xs ${
                      msg.role === "user" ? "text-body" : "text-ink"
                    }`}
                  >
                    <span className="text-muted-soft mr-1.5 font-mono">
                      {msg.role === "user" ? "›" : "◆"}
                    </span>
                    {msg.text}
                  </p>
                ))}
              </div>
              <div className="mt-4 space-y-1 border-t border-border pt-3">
                {heroPreview.files.map((file) => (
                  <p
                    key={file.path}
                    className="font-mono text-[10px] text-muted md:text-[11px]"
                  >
                    <span className="text-ink">{file.path}</span>
                    <span className="ml-2 text-accent">{file.change}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary preview card */}
        <div className="ui-window absolute bottom-[8%] right-[4%] z-30 hidden flex-col overflow-hidden rounded-lg md:flex lg:w-[220px]">
          <WindowChrome />
          <div className="bg-canvas-warm p-4">
            <p className="font-serif-brand text-lg leading-tight text-ink">
              ReadyLead
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-muted">
              YC AI Growth Hackathon
            </p>
            <div className="mt-3 h-16 rounded border border-border bg-surface" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
