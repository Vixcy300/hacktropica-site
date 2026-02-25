"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin, Mail, Leaf } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Discord",
    href: "#",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@hacktropica.dev",
    icon: <Mail className="w-5 h-5" />,
  },
];

const QUICK_LINKS = [
  { label: "Brand Assets", href: "#" },
  { label: "Code of Conduct", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Judging Criteria", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true });

  return (
    <footer
      id="footer"
      style={{ background: "#09110a" }}
      className="relative overflow-hidden"
    >
      {/* ╔══════════════════════════════════════════════════════════╗
          ║  TOP HALF — Grid (Socials · Links · CTA)                ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 px-8 sm:px-16 pt-20 pb-16 border-b border-white/10">

        {/* ── Column 1: Branding + Socials ──────────────────────── */}
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-white font-bold text-xl tracking-widest"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              HACKTROPICA
            </span>
          </div>
          <p
            className="text-white/40 text-sm leading-relaxed max-w-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A premium nature-themed hackathon. Enter the tropics of innovation.
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Column 2: Quick Links ──────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <p
            className="text-white/30 text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Quick Links
          </p>
          {QUICK_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/60 hover:text-emerald-400 transition-colors text-sm group flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-200" />
              {l.label}
            </a>
          ))}
        </div>

        {/* ── Column 3: Final CTA ───────────────────────────────── */}
        <div ref={ctaRef} className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-white/30 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Ready to enter?
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "white",
              lineHeight: 1.0,
            }}
          >
            Register Now.
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Apply on Devfolio
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white/60 hover:text-white text-sm border border-white/20 hover:border-white/40 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Brochure (PDF)
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white/60 hover:text-white text-sm border border-white/20 hover:border-white/40 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Brochure (Notion)
            </a>
          </motion.div>
        </div>
      </div>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  BOTTOM HALF — Massive wordmark                         ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <div className="relative overflow-hidden select-none" style={{ height: "clamp(100px, 20vw, 260px)" }}>
        {/* wordmark */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-[-0.08em] text-center leading-none"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(5rem, 18vw, 22rem)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.07)",
            whiteSpace: "nowrap",
          }}
        >
          HACKTROPICA
        </motion.p>

        {/* Copyright row */}
        <div className="absolute bottom-4 inset-x-0 flex items-center justify-between px-8 sm:px-16 z-10">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2025 Hacktropica. All rights reserved.
          </p>
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Built with ♥ in the tropics
          </p>
        </div>
      </div>
    </footer>
  );
}
