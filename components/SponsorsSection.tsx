"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Tier system with placeholder sponsor data
const SPONSOR_TIERS = [
  {
    tier: "Title Sponsor",
    color: "#ffd700",
    sponsors: [
      { name: "TechCorp", abbr: "TC" },
      { name: "Innovate Labs", abbr: "IL" },
    ],
  },
  {
    tier: "Gold Sponsors",
    color: "#c9a227",
    sponsors: [
      { name: "DevHouse", abbr: "DH" },
      { name: "CloudBase", abbr: "CB" },
      { name: "BuildStack", abbr: "BS" },
    ],
  },
  {
    tier: "Silver Sponsors",
    color: "#9e9e9e",
    sponsors: [
      { name: "Launchpad", abbr: "LP" },
      { name: "Codeify", abbr: "CO" },
      { name: "PixelForge", abbr: "PF" },
      { name: "DataFlow", abbr: "DF" },
    ],
  },
  {
    tier: "Community Partners",
    color: "#4caf50",
    sponsors: [
      { name: "OpenSource", abbr: "OS" },
      { name: "HackerDAO", abbr: "HD" },
      { name: "MLH", abbr: "MLH" },
      { name: "DevFolio", abbr: "DF" },
      { name: "GitHub", abbr: "GH" },
    ],
  },
];

interface SponsorLogoProps {
  name: string;
  abbr: string;
  size: "lg" | "md" | "sm";
  index: number;
}

function SponsorLogo({ name, abbr, size, index }: SponsorLogoProps) {
  const sizeClass = {
    lg: "h-24 w-52",
    md: "h-20 w-44",
    sm: "h-16 w-36",
  }[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.04, filter: "none" }}
      className={`${sizeClass} rounded-2xl border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300`}
      style={{
        background: "white",
        filter: "grayscale(100%)",
      }}
    >
      {/* Replace with real logo <img src="/sponsors/name.png" /> */}
      <span
        style={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: 700,
          fontSize: size === "lg" ? "1.8rem" : size === "md" ? "1.4rem" : "1.1rem",
          color: "#333",
          letterSpacing: "0.05em",
        }}
      >
        {abbr}
      </span>
    </motion.div>
  );
}

export default function SponsorsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section
      id="sponsors"
      className="py-24 px-6 sm:px-12"
      style={{ background: "#ffffff" }}
    >
      {/* ─── Header ─────────────────────────────────────────────────── */}
      <div ref={headRef} className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-xs tracking-[0.35em] uppercase mb-3"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Sponsors
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
            Our<br />Partners
          </motion.h2>
        </div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={headInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="mailto:sponsor@hacktropica.dev"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-600 font-semibold text-sm hover:bg-emerald-500 hover:text-white transition-all duration-200"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Become a Sponsor →
        </motion.a>
      </div>

      {/* ─── Tier Listings ───────────────────────────────────────────── */}
      <div className="flex flex-col gap-14">
        {SPONSOR_TIERS.map((tier, ti) => (
          <div key={tier.tier}>
            {/* Tier label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-7"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: tier.color }}
              />
              <span
                className="text-gray-400 text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {tier.tier}
              </span>
              <div className="flex-1 h-px bg-gray-100 ml-2" />
            </motion.div>

            {/* Sponsor logos grid */}
            <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
              {tier.sponsors.map((s, si) => (
                <SponsorLogo
                  key={s.name}
                  name={s.name}
                  abbr={s.abbr}
                  size={ti === 0 ? "lg" : ti === 1 ? "md" : "sm"}
                  index={si + ti * 3}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Become a sponsor note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center text-gray-400 text-sm"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Interested in sponsoring Hacktropica 2.0?{" "}
        <a href="mailto:sponsor@hacktropica.dev" className="text-emerald-600 hover:underline">
          Reach out to us
        </a>
      </motion.p>
    </section>
  );
}
