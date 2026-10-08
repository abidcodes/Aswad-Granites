"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { SectionLabel } from "../Reveal";

const featured = [
  "black-galaxy",
  "absolute-black",
  "tan-brown",
  "blue-pearl",
  "alaska-gold",
  "imperial-red",
].map((id) => products.find((p) => p.id === id)!).filter(Boolean);

export default function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);

  return (
    <section id="collections" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionLabel>Signature Collections</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-medium sm:text-7xl">
            Stones with <span className="gold-text italic">a presence</span>
          </h2>
        </div>
        <motion.div style={reduce ? {} : { x }} className="mt-10 flex gap-6 pl-4 sm:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {featured.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              data-cursor="VIEW"
              className="group relative w-[78vw] shrink-0 overflow-hidden rounded-2xl sm:w-[42vw] lg:w-[30vw]"
            >
              <div className="relative h-[52vh] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e8c876]">{p.category} · {p.origin}</p>
                <h3 className="mt-1 font-display text-3xl font-medium text-white transition-transform duration-500 group-hover:-translate-y-1">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm font-bold text-white/0 transition-all duration-500 group-hover:text-white">
                  View Stone <ArrowRight size={15} />
                </p>
              </div>
            </Link>
          ))}
          <Link
            href="/products"
            className="flex w-[60vw] shrink-0 items-center justify-center rounded-2xl border border-line sm:w-[24vw]"
          >
            <span className="inline-flex items-center gap-2 font-display text-3xl italic text-ink">
              All stones <ArrowUpRight className="text-gilt" />
            </span>
          </Link>
        </motion.div>
        <p className="mx-auto mt-8 w-full max-w-7xl px-4 text-xs uppercase tracking-[0.3em] text-faint sm:px-6">
          Keep scrolling — the gallery moves with you
        </p>
      </div>
    </section>
  );
}
