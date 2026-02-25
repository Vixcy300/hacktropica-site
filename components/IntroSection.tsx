"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = [
  "More",
  "than",
  "a",
  "Hackathon,",
  "it",
  "is",
  "a",
  "safe",
  "retreat,",
  "away",
  "from",
  "the",
  "chaos",
  "of",
  "the",
  "world—",
  "a",
  "place",
  "for",
  "you.",
];

function AnimatedWord({
  word,
  progress,
  i,
  total,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  i: number;
  total: number;
}) {
  // Each word lights up as scroll progresses through its "window"
  const start = i / total;
  const end = (i + 1) / total;

  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const color = useTransform(progress, [start, end], ["#aaa", "#111"]);

  return (
    <motion.span className="inline-block mr-[0.25em]" style={{ opacity, color }}>
      {word}
    </motion.span>
  );
}

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the sticky word-by-word reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax for the final image
  const imgY = useTransform(scrollYProgress, [0.7, 1], ["0%", "-10%"]);
  const imgOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  // "This is... HACKTROPICA" opacity
  const taglineOpacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.55, 0.72], ["30px", "0px"]);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* ─── Sticky Viewport ───────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f5f0e8] flex flex-col items-center justify-center px-6 sm:px-12">

        {/* Animated paragraph */}
        <div
          ref={paragraphRef}
          className="max-w-5xl text-center"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(1.7rem, 4.5vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
        >
          {WORDS.map((word, i) => (
            <AnimatedWord
              key={i}
              word={word}
              progress={scrollYProgress}
              i={i}
              total={WORDS.length}
            />
          ))}
        </div>

        {/* "An event that feels like you." sub-phrase */}
        <motion.p
          style={{ opacity: taglineOpacity, y: taglineY }}
          className="mt-6 text-center"
          transition={{ duration: 0.4 }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)",
              color: "#555",
              letterSpacing: "0.08em",
            }}
          >
            An event that feels like you.
          </span>
        </motion.p>

        {/* Tagline: This is... HACKTROPICA */}
        <motion.div
          style={{ opacity: taglineOpacity, y: taglineY }}
          className="mt-4 flex flex-col items-center gap-1"
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
              color: "#999",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            This is...
          </span>
          <span
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#111",
              lineHeight: 0.9,
            }}
          >
            HACKTROPICA
          </span>
        </motion.div>

        {/* ─── Parallax Reveal Image ────────────────────────────────── */}
        <motion.div
          ref={imageRef}
          style={{
            opacity: imgOpacity,
            y: imgY,
          }}
          className="absolute inset-x-0 bottom-0 h-[50vh] overflow-hidden"
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #f5f0e8 0%, transparent 30%)",
              zIndex: 2,
            }}
          />
          {/* Landscape image */}
          <img
            src="/placeholder.jpg"
            alt="Tropical landscape"
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.1)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
