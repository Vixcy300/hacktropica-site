"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    /**
     * REFERENCE-SITE TECHNIQUE:
     * - Section bg is white/cream
     * - Video fills the entire section (z-index 0)
     * - A white div + heading with mix-blend-mode:destination-out
     *   sits inside an isolation:isolate container (z-index 1)
     *   The text punches transparent letterform holes through the white fill
     *   revealing the video below
     * - A gradient at the bottom fades the white overlay away so the video
     *   plays openly at the bottom of the hero (exactly like the reference)
     */
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "640px", background: "#f8f5f0" }}
    >
      {/* ─── VIDEO behind everything ───────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/main.mp4"
        poster="/placeholder.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ─── Isolated mask: white fill + destination-out text ─
           isolation:isolate keeps the blend contained to THIS div.
           The white fill is the "canvas". Destination-out text
           carves the letterforms transparent, showing the video below.
      ────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, isolation: "isolate" }}
      >
        {/* White fill — covers the video everywhere outside letters */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #f8f5f0 0%, #f8f5f0 55%, rgba(248,245,240,0) 100%)",
          }}
        />

        {/* HACKTROPICA — destination-out punches transparent window into white */}
        <div
          className="absolute inset-0 flex items-start justify-center"
          style={{ paddingTop: "clamp(60px, 10vh, 110px)", paddingLeft: "0.25rem", paddingRight: "0.25rem" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center w-full select-none pointer-events-none leading-none"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4.5rem, 17vw, 22rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "white",
              mixBlendMode: "destination-out" as React.CSSProperties["mixBlendMode"],
            }}
          >
            HACKTROPICA
          </motion.h1>
        </div>
      </div>

      {/* ─── "2.0" superscript badge ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute pointer-events-none select-none"
        style={{
          zIndex: 10,
          top: "clamp(60px, 10vh, 110px)",
          right: "clamp(0.5rem, 3vw, 2.5rem)",
          fontFamily: "Oswald, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1rem, 2.5vw, 2rem)",
          color: "#111",
        }}
      >
        2.0
      </motion.div>

      {/* ─── Corner labels (below title, above video strip) ── */}
      <div
        className="absolute left-0 right-0 flex justify-between px-6 sm:px-10 pointer-events-none"
        style={{ zIndex: 10, bottom: "clamp(90px, 16vh, 160px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-black/40 text-[10px] tracking-[0.45em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Welcome To
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-right"
        >
          <p className="text-black/40 text-[10px] tracking-[0.45em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            The Tropics
          </p>
        </motion.div>
      </div>

      {/* ─── Bottom CTA strip: sits on the visible video band ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ zIndex: 10, paddingBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-wrap gap-4 justify-center pointer-events-auto"
        >
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
              boxShadow: "0 0 32px rgba(29,78,216,0.45)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="white">
              <path d="M4 2h6c5.523 0 10 4.477 10 10S15.523 22 10 22H4V2zm3 3v14h3c3.86 0 7-3.14 7-7s-3.14-7-7-7H7z" />
            </svg>
            REGISTER ON DEVFOLIO
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.45)",
              backdropFilter: "blur(12px)",
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            JOIN OUR DISCORD
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-black/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
