"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories } from "@/data/products";
import { Search } from "lucide-react";
import { SectionLabel, MaskedLines } from "@/components/Reveal";

const finishes = ["All", "Polished", "Honed", "Flamed", "Lapatura"];

export default function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [finish, setFinish] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (finish === "All" || p.finish.includes(finish)) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.origin.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="pt-20">
      <section className="relative flex h-[46vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/Charcoal_granite_slabs_displayed_20261007200955.jpg" alt="Granite slabs" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[var(--bg)]" />
        </div>
        <div className="relative z-10 px-4 text-center">
          <SectionLabel>Our Granite Library</SectionLabel>
          <h1 className="mt-3 font-display text-6xl font-medium text-white sm:text-8xl">
            <MaskedLines lines={["Products"]} />
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            {products.length} signature stones — filter by colour and finish.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4">
          <div className="relative max-w-sm">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search granite..."
              className="w-full rounded-full border border-line bg-raised py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-[var(--gold)]"
            />
          </div>
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Colour</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                    cat === c ? "bg-[var(--gold)] text-black" : "border border-line text-muted hover:border-[var(--gold)] hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Finish</p>
            <div className="flex flex-wrap gap-2">
              {finishes.map((f) => (
                <button
                  key={f}
                  onClick={() => setFinish(f)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                    finish === f ? "bg-[var(--gold)] text-black" : "border border-line text-muted hover:border-[var(--gold)] hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <p className="text-sm text-faint">{filtered.length} of {products.length} stones</p>
        <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div layout key={p.id} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.4 }}>
                <Link
                  href={`/products/${p.id}`}
                  data-cursor="VIEW"
                  className="group block overflow-hidden rounded-2xl border border-line bg-raised transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                    {p.popular && (
                      <span className="absolute left-3 top-3 rounded-full bg-[var(--gold)] px-3 py-1 text-[11px] font-extrabold uppercase text-black">Popular</span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gilt">{p.category} · {p.origin}</p>
                    <h3 className="mt-1 font-display text-2xl font-medium transition-transform duration-500 group-hover:-translate-y-0.5">{p.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{p.description}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                      <span className="text-lg font-extrabold text-gilt">₹{p.pricePerSqft}/sq.ft</span>
                      <span className="text-xs font-bold opacity-0 transition-opacity group-hover:opacity-100">View Stone →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && <p className="mt-10 text-center text-faint">No stones match — try another filter.</p>}
      </section>
    </div>
  );
}
