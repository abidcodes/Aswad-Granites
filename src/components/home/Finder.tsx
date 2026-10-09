"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { SectionLabel, FadeUp } from "../Reveal";

const chips = [
  { label: "White", dot: "#e8e2d5" },
  { label: "Grey", dot: "#8d8d8d" },
  { label: "Brown", dot: "#7a4a2b" },
  { label: "Red", dot: "#a83a2e" },
  { label: "Blue", dot: "#3e5a78" },
  { label: "Green", dot: "#4a6b46" },
  { label: "Gold", dot: "#c9a227" },
];

function Tilt({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      style={{ transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  );
}

export default function Finder() {
  const [color, setColor] = useState("All");
  const list = (color === "All" ? products : products.filter((p) => p.category === color)).slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionLabel>Stone Finder</SectionLabel>
      <h2 className="mt-3 max-w-3xl font-display text-5xl font-medium leading-[1.02] sm:text-7xl">
        Find your stone <span className="gold-text italic">by colour</span>
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {[{ label: "All", dot: "linear-gradient(135deg,#1c1a17 50%,#e8e2d5 50%)" }, ...chips].map((c) => (
          <button
            key={c.label}
            onClick={() => setColor(c.label)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
              color === c.label
                ? "border-[var(--gold)] bg-[var(--gold)] text-white"
                : "border-line text-muted hover:border-[var(--gold)] hover:text-ink"
            }`}
          >
            <span className="h-4 w-4 rounded-full border border-black/20" style={{ background: c.dot }} />
            {c.label}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tilt>
                <Link
                  href={`/products/${p.id}`}
                  data-cursor="VIEW"
                  className="group block overflow-hidden border border-line bg-raised"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gilt">{p.category}</p>
                    <h3 className="mt-1 font-display text-2xl font-medium transition-transform duration-500 group-hover:-translate-y-0.5">{p.name}</h3>
                    <p className="mt-2 text-sm font-bold text-muted">₹{p.pricePerSqft}/sq.ft <span className="float-right opacity-0 transition-opacity group-hover:opacity-100">View Stone →</span></p>
                  </div>
                </Link>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <FadeUp className="mt-8 text-center">
        <Link href="/products" className="u-link text-sm font-bold uppercase tracking-[0.25em] text-gilt">
          Browse all {products.length} stones
        </Link>
      </FadeUp>
    </section>
  );
}
