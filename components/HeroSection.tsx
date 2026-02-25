"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    const heading = headingRef.current;
    if (!video || !heading) return;

    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 700;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;
    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      if (video.readyState < 2) return;
      frameCount++;
      if (frameCount % 3 !== 0) return; // ~24fps
      ctx.drawImage(video, 0, 0, 1400, 700);
      if (headingRef.current) {
        headingRef.current.style.backgroundImage =
          `url(${canvas.toDataURL("image/jpeg", 0.55)})`;
      }
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px", background: "#050f06" }}
    >
      {/* Background video — also feeds the canvas */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src="/main.mp4"
        poster="/placeholder.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay so background is moody */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(5,15,6,0.55) 0%, rgba(5,15,6,0.3) 50%, rgba(5,15,6,0.7) 100%)",
        }}
      />

      {/* ── VIDEO-INSIDE-TEXT TITLE ──────────────────────────────
          The canvas draws live video frames and sets them as the
          backgroundImage of the <h1>.  background-clip:text then
          clips that image to the letterform shapes so the video
          plays through the hollow letters.
      ──────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center px-2"
        style={{ zIndex: 10 }}
      >
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center w-full select-none pointer-events-none"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(4rem, 16vw, 20rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            /* Fallback image — swapped to canvas frames by useEffect */
            backgroundImage: "url('/placeholder.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          HACKTROPICA
        </motion.h1>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          zIndex: 8,
          background: "linear-gradient(to bottom, transparent, #050f06)",
        }}
      />

      {/* ── UI overlays ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col justify-between pb-12 pt-28 px-8 pointer-events-none"
        style={{ zIndex: 20 }}
      >
        {/* Date / stat row */}
        <div className="flex justify-between items-start">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-white/50 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Feb 28 – Mar 2, 2026
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-white/50 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            36 hours · 500+ hackers
          </motion.p>
        </div>

        {/* Bottom block */}
        <div className="flex flex-col items-center gap-7">
          {/* Corner labels */}
          <div className="w-full flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <p
                className="text-white/40 text-[10px] tracking-[0.45em] uppercase mb-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Welcome To
              </p>
              <p
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)",
                }}
              >
                The Jungle
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
              className="text-right"
            >
              <p
                className="text-white/40 text-[10px] tracking-[0.45em] uppercase mb-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                of innovation
              </p>
              <p
                className="text-white font-bold leading-none"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)",
                }}
              >
                The Tropics
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-wrap gap-4 justify-center pointer-events-auto"
          >
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
              style={{
                background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
                boxShadow: "0 0 32px rgba(29,78,216,0.4)",
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
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
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
      </div>

      {/* Scroll pulse indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
        style={{ zIndex: 25 }}
      >
        <span
          className="text-white/25 text-[9px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
