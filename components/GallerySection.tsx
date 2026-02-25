"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Gallery items — varied heights create true masonry feel
// height: pixel value used directly in gridRowEnd so each item
// can span a precise number of rows (each row = 10px)
const GALLERY_ITEMS = [
  { id: 1,  height: 340, bg: "bg-emerald-900" },
  { id: 2,  height: 200, bg: "bg-teal-800"    },
  { id: 3,  height: 260, bg: "bg-green-700"   },
  { id: 4,  height: 180, bg: "bg-lime-900"    },
  { id: 5,  height: 310, bg: "bg-emerald-700" },
  { id: 6,  height: 220, bg: "bg-cyan-900"    },
  { id: 7,  height: 280, bg: "bg-teal-700"    },
  { id: 8,  height: 190, bg: "bg-green-800"   },
  { id: 9,  height: 360, bg: "bg-emerald-800" },
  { id: 10, height: 230, bg: "bg-lime-800"    },
  { id: 11, height: 200, bg: "bg-teal-900"    },
  { id: 12, height: 270, bg: "bg-green-900"   },
];

const placeholderColors = [
  "#1a4731","#0d5c36","#16604a","#1e5a2b","#145740","#1b4332",
  "#0f4c2e","#195c3e","#1e6b44","#16553a","#1a3f2c","#0e4228",
];

interface GalleryItemProps {
  item: typeof GALLERY_ITEMS[0];
  index: number;
}

function GalleryItem({ item, index }: GalleryItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Each grid row is 10px; span enough rows to hit our target height (+ 8px gap)
  const rowSpan = Math.ceil((item.height + 8) / 10);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      {/* Placeholder — replace with real <img> */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
        style={{ background: placeholderColors[index % placeholderColors.length] }}
      >
        <img
          src="/placeholder.jpg"
          alt={`Memory ${item.id}`}
          className="w-full h-full object-cover opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <span
          className="text-white text-sm font-medium tracking-wide"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Hacktropica 1.0 · 2024
        </span>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      id="memories"
      className="py-24 px-6 sm:px-12"
      style={{ background: "#0e1912" }}
    >
      {/* ─── Header ─────────────────────────────────────────────────── */}
      <div ref={headingRef} className="mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-emerald-400/60 text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          The Journey So Far
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#f5f0e8",
            lineHeight: 0.9,
          }}
        >
          Memories of<br />
          <span className="text-emerald-400">Hacktropica</span> 1.0
        </motion.h2>
      </div>

      {/* ─── Masonry Grid ────────────────────────────────────────────── */}
      <div
        className="grid gap-3 sm:gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gridAutoRows: "10px",
          gridAutoFlow: "dense",
        }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <GalleryItem key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* View all button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <button
          className="px-8 py-3.5 rounded-full border border-emerald-400/40 text-emerald-400 text-sm font-medium tracking-widest uppercase hover:bg-emerald-400 hover:text-black transition-all duration-200"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          View Full Gallery →
        </button>
      </motion.div>
    </section>
  );
}
