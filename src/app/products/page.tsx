"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products, categories } from "@/data/products";
import { ArrowRight, Search } from "lucide-react";

export default function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.origin.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/Charcoal_granite_slabs_displayed_20261007200955.jpg"
            alt="Granite slabs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 to-stone-950" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">Our Granite Library</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-6xl">Products</h1>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-stone-300">
            {products.length} signature stones — Black, White, Grey, Brown, Red, Blue, Green & Gold.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search granite..."
              className="w-full rounded-full border border-stone-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-[#c9a227] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                  cat === c
                    ? "bg-gradient-to-r from-[#c9a227] to-[#d4af6a] text-black shadow-lg shadow-[#c9a227]/20"
                    : "bg-stone-900/5 text-stone-600 hover:bg-stone-900/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <p className="text-sm text-stone-400">
          {filtered.length} of {products.length} products
          {cat !== "All" ? ` in ${cat}` : ""}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="card-hover group overflow-hidden rounded-2xl border border-stone-200 bg-white hover:border-[#c9a227]/30"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                {p.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-3 py-1 text-[11px] font-extrabold uppercase text-black shadow-lg">
                    Popular
                  </span>
                )}
                <div className="absolute inset-0 img-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-[#8a6d1f] font-bold">
                  {p.category} • {p.origin}
                </div>
                <h3 className="mt-1 flex items-center justify-between text-xl font-bold group-hover:text-[#8a6d1f] transition-colors">
                  {p.name}
                  <ArrowRight size={18} className="text-stone-600 group-hover:text-[#8a6d1f] group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.finish.map((f) => (
                    <span key={f} className="rounded-full bg-stone-900/5 px-2.5 py-0.5 text-[11px] text-stone-400">{f}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4">
                  <span className="text-lg font-extrabold text-[#8a6d1f]">₹{p.pricePerSqft}/sq.ft</span>
                  <span className="text-xs text-stone-400">{p.sizes[0]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-stone-400">No stones match your filter. Try another search.</p>
        )}
      </section>
    </div>
  );
}
