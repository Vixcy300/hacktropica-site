"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Timeline", href: "#timeline" },
  { label: "Brochure", href: "#brochure" },
  { label: "Judges", href: "#judges" },
  { label: "Mentors", href: "#mentors" },
  { label: "Team", href: "#team" },
];

const containerVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.5, ease: "easeIn" as const },
  },
};

const linkVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.25 + i * 0.07, duration: 0.55, ease: "easeOut" as const },
  }),
  exit: (i: number) => ({
    y: -40,
    opacity: 0,
    transition: { delay: i * 0.04, duration: 0.3, ease: "easeIn" as const },
  }),
};

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 flex"
          style={{ background: "#09110a" }}
        >
          {/* ─── LEFT: Visual Panel ──────────────────────────── */}
          <div className="hidden lg:flex w-1/2 items-center justify-center p-12">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[70vh] rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a3c2a 0%, #0d5c36 50%, #1e5a2b 100%)" }}
            >
              {/* Looping video / placeholder */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                src="/main.mp4"
                poster="/placeholder.jpg"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-8 left-8 right-8">
                <p
                  className="text-white/50 text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Hacktropica 2025
                </p>
                <p
                  className="text-white text-4xl font-bold"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Enter The<br />Tropics
                </p>
              </div>
              {/* Leaf decoration */}
              <div className="absolute top-8 right-8 opacity-30">
                <svg viewBox="0 0 80 80" className="w-16 h-16 fill-emerald-400">
                  <path d="M40 5C20 5 5 30 5 50c0 15 10 25 25 25 20 0 45-15 45-35C75 20 60 5 40 5z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Navigation Links ─────────────────────── */}
          <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 py-24 relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Navigate
            </motion.p>

            {/* Links */}
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                    className="group flex items-center gap-4 py-2"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className="text-white/20 text-sm w-6 text-right group-hover:text-emerald-400 transition-colors"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="text-white font-bold leading-none transition-all duration-300 group-hover:text-emerald-400 group-hover:translate-x-2"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "clamp(2.5rem, 6vw, 6rem)",
                        letterSpacing: "-0.02em",
                        display: "inline-block",
                      }}
                    >
                      {link.label}
                    </span>
                    {/* Hover arrow */}
                    <span className="text-emerald-400 text-3xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                      →
                    </span>
                  </motion.a>
                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                    className="h-px bg-white/10 origin-left"
                  />
                </div>
              ))}
            </nav>

            {/* Bottom socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="mt-10 flex items-center gap-6"
            >
              {["Discord", "Instagram", "LinkedIn", "X"].map((s) => (
                <a key={s} href="#" className="text-white/30 hover:text-white text-xs tracking-wider uppercase transition-colors">
                  {s}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
