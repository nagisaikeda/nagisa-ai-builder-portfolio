"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

const footerLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Resume", href: site.resume },
  { label: "Nara Labs", href: site.naraLabs },
];

export function Footer() {
  return (
    <motion.footer
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="relative z-10 border-t border-border"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
        <div>
          <p className="font-serif-brand text-section-serif text-[1.25rem]">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-muted">{site.role}</p>
        </div>
        <nav className="flex flex-wrap gap-7 md:gap-9">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nav text-ink transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-[1120px] px-6 py-5 text-xs text-muted-soft md:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </motion.footer>
  );
}
