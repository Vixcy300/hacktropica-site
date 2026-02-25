"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const FAQS = [
  {
    id: 1,
    question: "Who can participate in Hacktropica?",
    answer:
      "Hacktropica is open to anyone who is a student currently enrolled at any college or university. Whether you are a first-year fresher or a PhD scholar, all skill levels are genuinely welcome. We especially encourage first-time hackers to join — our mentors will be there to guide you every step of the way.",
    color: "#dbeafe",       // soft baby blue
    textColor: "#1e3a5f",
    watermarkColor: "rgba(30,58,95,0.10)",
  },
  {
    id: 2,
    question: "Is there a registration fee?",
    answer:
      "No! Hacktropica is completely free to participate in. We believe great ideas shouldn't be gated by a paywall. Accommodation and meals during the event are also covered once you register and are accepted. All you need to do is show up and build.",
    color: "#fef9c3",       // soft cream / pale yellow
    textColor: "#78350f",
    watermarkColor: "rgba(120,53,15,0.10)",
  },
  {
    id: 3,
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any hardware you plan to use, your student ID, and most importantly — your curiosity and enthusiasm. We'll provide power strips, high-speed internet, food, drinks, swag, and lots of fun. We also recommend bringing a sleeping bag or travel pillow if you plan to hack through the night.",
    color: "#fce7f3",       // pale rose
    textColor: "#831843",
    watermarkColor: "rgba(131,24,67,0.10)",
  },
  {
    id: 4,
    question: "Can I participate solo?",
    answer:
      "Yes, absolutely! While most teams are 2–4 members, you are entirely welcome to compete solo. We have team-formation sessions at the start of the event where solo hackers can find collaborators if they wish to team up.",
    color: "#dcfce7",       // soft mint green
    textColor: "#14532d",
    watermarkColor: "rgba(20,83,45,0.10)",
  },
  {
    id: 5,
    question: "What tracks / themes are available?",
    answer:
      "Hacktropica 2.0 features tracks in AI/ML, Sustainability & Climate Tech, Web3 & DeFi, Health & BioTech, and Open Innovation. You're free to participate in any track or even blend multiple domains — the only rule is that your project must be built fresh during the hackathon.",
    color: "#fef9c3",
    textColor: "#78350f",
    watermarkColor: "rgba(120,53,15,0.10)",
  },
  {
    id: 6,
    question: "What prizes are on offer?",
    answer:
      "We have exciting prizes totalling over ₹5,00,000 including cash awards, internship opportunities, cloud credits, premium software licences, and exclusive Hacktropica swag. Specific prize details for each track will be announced closer to the event date.",
    color: "#fce7f3",
    textColor: "#831843",
    watermarkColor: "rgba(131,24,67,0.10)",
  },
];

interface FAQCardProps {
  faq: (typeof FAQS)[0];
  index: number;
}

function FAQCard({ faq, index }: FAQCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-w-[280px] sm:min-w-[340px] w-[340px] rounded-3xl overflow-hidden cursor-pointer flex-shrink-0"
      style={{ background: faq.color, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
      onClick={() => setOpen((v) => !v)}
    >
      {/* Botanical watermark — large palm / leaf shape, anchored right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-20px",
          bottom: "-20px",
          width: "220px",
          height: "220px",
          zIndex: 0,
          opacity: 1,
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Leaf 1 */}
          <path
            d="M100 180 C80 140 30 120 20 60 C50 80 90 100 100 180Z"
            fill={faq.watermarkColor}
          />
          {/* Leaf 2 */}
          <path
            d="M100 180 C120 140 170 120 180 60 C150 80 110 100 100 180Z"
            fill={faq.watermarkColor}
          />
          {/* Stem */}
          <path
            d="M100 180 C100 160 100 100 100 40"
            stroke={faq.watermarkColor}
            strokeWidth="3"
          />
          {/* Extra frond left */}
          <path
            d="M100 120 C75 105 45 100 25 90 C55 95 85 110 100 120Z"
            fill={faq.watermarkColor}
          />
          {/* Extra frond right */}
          <path
            d="M100 120 C125 105 155 100 175 90 C145 95 115 110 100 120Z"
            fill={faq.watermarkColor}
          />
        </svg>
      </div>

      <div className="relative z-10 p-8 flex flex-col gap-0" style={{ minHeight: "420px" }}>
        {/* Question number */}
        <span
          className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4"
          style={{ fontFamily: "Inter, sans-serif", color: faq.textColor }}
        >
          {String(index + 1).padStart(2, "0")} / {String(FAQS.length).padStart(2, "0")}
        </span>

        {/* Question */}
        <h3
          className="flex-1"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            color: faq.textColor,
          }}
        >
          {faq.question}
        </h3>

        {/* Answer (expandable) */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p
                className="mt-5 leading-relaxed text-sm opacity-90"
                style={{ fontFamily: "Inter, sans-serif", color: faq.textColor }}
              >
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA button */}
        <button
          className="mt-6 self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:gap-3"
          style={{
            background: "rgba(0,0,0,0.15)",
            color: faq.textColor,
            border: `1px solid ${faq.textColor}30`,
            fontFamily: "Inter, sans-serif",
          }}
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
          aria-expanded={open}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {open ? "Close answer" : "+ Get your answer"}
        </button>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    trackRef.current?.classList.add("dragging");
  };
  const onMouseLeave = () => { isDown.current = false; trackRef.current?.classList.remove("dragging"); };
  const onMouseUp = () => { isDown.current = false; trackRef.current?.classList.remove("dragging"); };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.3;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      id="faqs"
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
          FAQs
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
          Your Questions,<br />Answered
        </motion.h2>
      </div>

      {/* ─── Scrollable Cards ────────────────────────────────────────── */}
      <div
        ref={trackRef}
        className="flex gap-5 pl-6 sm:pl-12 pr-6 sm:pr-12 overflow-x-auto drag-cursor pb-4 select-none"
        style={{ scrollbarWidth: "none" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {FAQS.map((faq, i) => (
          <FAQCard key={faq.id} faq={faq} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-6 text-[#aaa] text-xs tracking-widest uppercase"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        ← drag to explore · click card to expand →
      </motion.p>
    </section>
  );
}
