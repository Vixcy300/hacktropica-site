"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px", background: "#09110a" }}
    >
      {/* ══════════════════════════════════════════════════
          LAYER 1 — Background Video
      ══════════════════════════════════════════════════ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.85 }}
        src="/placeholder.mp4"
        poster="/placeholder.jpg"
      />

      {/* Subtle vignette to bring edges to dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 30%, rgba(9,17,10,0.75) 110%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ══════════════════════════════════════════════════
          LAYER 2 — Video-Inside-Text Masking
          background-clip:text reveals the video/image
          THROUGH the transparent letterforms of the heading.
          The outer section has a dark background so everywhere
          the text is NOT shows the dark colour.
      ══════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 flex items-center justify-center px-2"
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center w-full"
        >
          <h1
            className="font-black text-center w-full leading-none"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4rem, 17.5vw, 22rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              userSelect: "none",
              /* ── The video-in-text reveal ───────────────────────
                 The heading's own background (the video poster /
                 placeholder image) is clipped to only paint inside
                 the letter shapes.  color:transparent makes the
                 default text fill invisible so only the clipped
                 background shows through.
              ── */
              backgroundImage: "url('/placeholder.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              /* Animate the background position for a subtle motion */
              animation: "bgShift 8s ease-in-out infinite alternate",
            }}
          >
            HACKTROPICA
          </h1>
        </motion.div>
      </div>

      {/* Keyframes for subtle background movement inside text */}
      <style>{`
        @keyframes bgShift {
          from { background-position: 40% 40%; }
          to   { background-position: 60% 60%; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          LAYER 3 — UI Overlays (above mask)
      ══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 flex flex-col justify-between pb-10 pt-28 px-8 pointer-events-none" style={{ zIndex: 20 }}>
        {/* Top sub-text row (below navbar) */}
        <div className="flex justify-between items-start">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-white/60 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Feb 28 – Mar 2, 2025
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-white/60 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            36 hours · 500+ hackers
          </motion.p>
        </div>

        {/* ── Bottom Row ──────────────────────────────────── */}
        <div className="flex flex-col items-center gap-6">

          {/* Bottom corner labels */}
          <div className="w-full flex justify-between items-end px-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <p
                className="text-white/50 text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Welcome To
              </p>
              <p
                className="text-white/90 text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                The Jungle
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="text-right"
            >
              <p
                className="text-white/50 text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                of innovation
              </p>
              <p
                className="text-white/90 text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                The Tropics
              </p>
            </motion.div>
          </div>

          {/* ── CTA Buttons ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex flex-wrap gap-4 justify-center pointer-events-auto"
          >
            {/* Devfolio CTA */}
            <a
              href="#"
              className="flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-200"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                boxShadow: "0 0 30px rgba(37,99,235,0.4)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {/* Devfolio D logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M4 2h6c5.523 0 10 4.477 10 10S15.523 22 10 22H4V2zm3 3v14h3c3.86 0 7-3.14 7-7s-3.14-7-7-7H7z" />
              </svg>
              REGISTER ON DEVFOLIO
            </a>

            {/* Discord CTA */}
            <a
              href="#"
              className="flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-200"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {/* Discord logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              JOIN OUR DISCORD
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ zIndex: 25 }}
      >
        <span
          className="text-white/30 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
