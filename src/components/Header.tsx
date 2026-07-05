"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/data";
import { fadeIn } from "@/lib/motion";

const navLinks = [
  { label: "AI Work", href: "/#ai-products" },
  { label: "Design", href: "/#product-design" },
  { label: "Build Log", href: "/#build-log" },
  { label: "Capabilities", href: "/capabilities" },
];

export function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed inset-x-0 top-0 z-50 bg-canvas/85 backdrop-blur-md"
    >
      <div className="mx-auto grid h-14 max-w-[1120px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8">
        <Link
          href="/"
          className="text-nav font-medium text-ink transition-opacity hover:opacity-60"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-nav transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/#contact"
            className="text-nav hidden transition-opacity hover:opacity-60 sm:block"
          >
            Contact
          </Link>
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-sm font-medium text-canvas-warm transition-colors hover:bg-ink-soft"
          >
            Resume
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
