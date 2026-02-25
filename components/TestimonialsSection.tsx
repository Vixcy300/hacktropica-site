"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Hacktropica was unlike any hackathon I had ever attended. The energy was electric, the mentors were world-class, and the vibes were pure jungle magic.",
    name: "Priya Sharma",
    title: "SWE Intern @ Google",
    bg: "#fce4ec",    // pastel pink
    border: "#f48fb1",
    textColor: "#1a1a1a",
  },
  {
    id: 2,
    quote:
      "I came in knowing barely any machine learning. I left with a working model, two new friends, and an award. Hacktropica changed my trajectory.",
    name: "Arjun Mehta",
    title: "CS Junior @ IIT Bombay",
    bg: "#e8f5e9",    // pastel green
    border: "#a5d6a7",
    textColor: "#1a1a1a",
  },
  {
    id: 3,
    quote:
      "The theme, the production quality, the food — everything was top-tier. You could tell the organisers genuinely cared about every single hacker.",
    name: "Wei Lin",
    title: "Full-Stack Dev",
    bg: "#ffffff",    // white
    border: "#e0e0e0",
    textColor: "#1a1a1a",
  },
  {
    id: 4,
    quote:
      "As a first-time hackathon participant, I was terrified. The Hacktropica community made me feel at home from minute one.",
    name: "Sofia Ramos",
    title: "Design Student",
    bg: "#fff9c4",    // pastel yellow
    border: "#fff176",
    textColor: "#1a1a1a",
  },
  {
    id: 5,
    quote:
      "The workshops were incredibly practical, not just fluff. I picked up skills I still use every day at my job.",
    name: "Kwame Asante",
    title: "Product Manager @ Stripe",
    bg: "#e3f2fd",    // pastel blue
    border: "#90caf9",
    textColor: "#1a1a1a",
  },
  {
    id: 6,
    quote:
      "Winning wasn't even the best part. The people I met, the late-night conversations, the shared exhaustion and joy — that is Hacktropica.",
    name: "Ananya Iyer",
    title: "Open-source contributor",
    bg: "#f3e5f5",    // pastel purple
    border: "#ce93d8",
    textColor: "#1a1a1a",
  },
];

interface CardProps {
  t: (typeof TESTIMONIALS)[0];
  index: number;
}

function TestimonialCard({ t, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="flex-shrink-0 w-80 sm:w-96 rounded-3xl p-8 flex flex-col gap-6 cursor-default"
      style={{
        background: t.bg,
        border: `1.5px solid ${t.border}`,
      }}
    >
      <Quote
        className="w-8 h-8 opacity-40"
        style={{ color: t.textColor }}
      />
      <p
        className="flex-1 leading-relaxed"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.95rem",
          color: t.textColor,
          lineHeight: 1.7,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p
            className="font-semibold text-[0.95rem]"
            style={{ fontFamily: "Oswald, sans-serif", color: t.textColor }}
          >
            {t.name}
          </p>
          <p
            className="text-xs mt-0.5 opacity-60"
            style={{ fontFamily: "Inter, sans-serif", color: t.textColor }}
          >
            {t.title}
          </p>
        </div>
        <a
          href="#"
          className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{ background: "rgba(0,0,0,0.07)" }}
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" style={{ color: t.textColor }} />
        </a>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  // Drag-to-scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.classList.add("dragging");
  };
  const onMouseLeave = () => {
    isDown.current = false;
    trackRef.current?.classList.remove("dragging");
  };
  const onMouseUp = () => {
    isDown.current = false;
    trackRef.current?.classList.remove("dragging");
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollBy = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="py-24 overflow-hidden"
      style={{ background: "#f5f0e8" }}
    >
      {/* ─── Header ─────────────────────────────────────────────────── */}
      <div ref={headRef} className="px-6 sm:px-12 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#888] text-xs tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
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
          People&apos;s<br />Remarks
        </motion.h2>

        {/* Arrow buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3 mt-6"
        >
          <button
            onClick={() => scrollBy(-1)}
            className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="Next"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* ─── Draggable Carousel ──────────────────────────────────────── */}
      <div
        ref={trackRef}
        className="flex gap-5 pl-6 sm:pl-12 pr-6 sm:pr-12 overflow-x-auto drag-cursor select-none pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.id} t={t} index={i} />
        ))}
        {/* Clone first few for wrap-around feel */}
        {TESTIMONIALS.slice(0, 2).map((t, i) => (
          <TestimonialCard key={`clone-${t.id}`} t={t} index={i + TESTIMONIALS.length} />
        ))}
      </div>

      {/* Drag hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-6 text-[#aaa] text-xs tracking-widest uppercase"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        ← drag to explore →
      </motion.p>
    </section>
  );
}
