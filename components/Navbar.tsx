"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* ─── LEFT: Logo ──────────────────────────────── */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-white font-heading text-lg tracking-widest"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              HACKTROPICA
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full ml-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <span className="text-xs text-white/70 font-medium">powered by</span>
            <span className="text-xs text-white font-bold">▲ Vercel</span>
          </div>
        </div>

        {/* ─── RIGHT: Controls ─────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Contact CTA */}
          <button className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white/90 text-sm font-medium hover:bg-white hover:text-black transition-all duration-200">
            CONTACT US
          </button>

          {/* MLH Badge */}
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-red-600 rounded-full">
            <span className="text-white text-xs font-bold tracking-wider">MLH OFFICIAL</span>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-[5px] hover:bg-white/20 transition-all duration-200 group"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-xl font-light leading-none"
                >
                  ✕
                </motion.span>
              ) : (
                <motion.div
                  key="bars"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-[5px]"
                >
                  <span className="w-5 h-[2px] bg-white rounded-full group-hover:w-4 transition-all" />
                  <span className="w-4 h-[2px] bg-white rounded-full group-hover:w-5 transition-all" />
                  <span className="w-5 h-[2px] bg-white rounded-full group-hover:w-4 transition-all" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
