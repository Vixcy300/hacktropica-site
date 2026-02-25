"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Navbar is transparent over the white hero; darkens on scroll (dark sections)
  const navBg = scrolled
    ? "bg-black/70 backdrop-blur-md border-b border-white/10"
    : "bg-transparent";
  const textColor = scrolled ? "text-white" : "text-black";
  const iconColor = scrolled ? "white" : "black";
  const btnBorder = scrolled ? "border-white/30" : "border-black/25";
  const btnHover  = scrolled
    ? "hover:bg-white hover:text-black"
    : "hover:bg-black hover:text-white";

  return (
    <>
      {/* ─── MLH Corner Badge ─────────────────────────────────────
          Positioned fixed in the top-right corner as a sticker,
          identical to the reference site.
      ──────────────────────────────────────────────────────────── */}
      <a
        href="https://mlh.io"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-0 right-4 w-16 z-[200] select-none"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))" }}
        aria-label="Major League Hacking"
      >
        {/* MLH badge SVG shape */}
        <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0h60v68l-30 12L0 68V0z" fill="#e31837" />
          <path d="M0 0h60v5H0z" fill="#1a1a2e" />
          <text x="50%" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">MLH</text>
          <text x="50%" y="46" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.8">OFFICIAL</text>
          <text x="50%" y="59" textAnchor="middle" fill="white" fontSize="6" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.5">2026</text>
          <text x="50%" y="69" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="500" fontFamily="sans-serif" letterSpacing="0.5">SEASON</text>
        </svg>
      </a>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-4 flex items-center justify-between transition-all duration-300 ${navBg}`}
      >
        {/* ─── LEFT: Brand ──────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Botanical flower icon */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
              {/* 8-petal flower */}
              {[0,45,90,135,180,225,270,315].map((deg) => (
                <ellipse
                  key={deg}
                  cx="20" cy="20"
                  rx="4.5" ry="9"
                  fill={iconColor}
                  transform={`rotate(${deg} 20 20)`}
                  opacity="0.85"
                />
              ))}
              <circle cx="20" cy="20" r="4" fill={iconColor} />
            </svg>
          </div>

          {/* Brand text */}
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className={`font-bold tracking-[0.12em] leading-none ${textColor}`}
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.05rem", fontWeight: 700 }}
            >
              HACKTROPICA
            </span>
            <span
              className={`flex items-center gap-1 opacity-60 ${textColor}`}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem" }}
            >
              powered by
              <svg viewBox="0 0 24 20" fill="currentColor" className="w-3.5 h-3">
                <path d="M12 0L24 20H0L12 0z" />
              </svg>
              Vercel
            </span>
          </div>
        </div>

        {/* ─── RIGHT: Controls ──────────────────────────────── */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* CONTACT US pill */}
          <button
            className={`hidden sm:flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${textColor} border ${btnBorder} ${btnHover}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            CONTACT US
          </button>

          {/* Hamburger circle button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 ${btnBorder} ${btnHover}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className={`text-lg font-light leading-none ${textColor}`}
                >
                  ✕
                </motion.span>
              ) : (
                <motion.div
                  key="bars"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-[4px] items-center"
                >
                  <span className={`w-5 h-[1.5px] rounded-full ${scrolled ? "bg-white" : "bg-black"}`} />
                  <span className={`w-3.5 h-[1.5px] rounded-full ${scrolled ? "bg-white" : "bg-black"}`} />
                  <span className={`w-5 h-[1.5px] rounded-full ${scrolled ? "bg-white" : "bg-black"}`} />
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
