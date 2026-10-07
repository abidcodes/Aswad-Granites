"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products, categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

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
    <div className="pt-[68px]">
      <div className="hero-texture border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">
            Our Granite Library
          </p>
          <h1 className="mt-2 text-4xl font-extrabold">Products</h1>
          <p className="mt-2 max-w-2xl text-stone-400">
            {products.length} signature stones — Black, White, Grey, Brown, Red,
            Blue, Green & Gold. Slabs (2cm / 3cm), tiles, cut-to-size and
            countertops. Click any stone for sizes & applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. Galaxy, White, Ongole..."
              className="w-full max-w-sm rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-sm outline-none focus:border-[#c9a227]"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold ${
                  cat === c
                    ? "bg-[#c9a227] text-black"
                    : "bg-white/10 text-stone-300 hover:bg-white/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-sm text-stone-500">
          {filtered.length} of {products.length} products
          {cat !== "All" ? ` in ${cat}` : ""}
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-stone-900"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {p.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#c9a227] px-3 py-1 text-[11px] font-extrabold uppercase text-black">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-[#d4af6a] font-bold">
                  {p.category} • {p.origin}
                </div>
                <h3 className="mt-1 flex items-center justify-between text-xl font-bold">
                  {p.name}
                  <ArrowRight
                    size={18}
                    className="text-stone-600 transition group-hover:translate-x-1 group-hover:text-[#d4af6a]"
                  />
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-400">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.finish.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-stone-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-lg font-extrabold text-[#d4af6a]">
                    ₹{p.pricePerSqft}/sq.ft
                  </span>
                  <span className="text-xs text-stone-500">
                    {p.sizes[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-stone-500">
            No stones match your filter. Try another search.
          </p>
        )}
      </div>
    </div>
  );
}
