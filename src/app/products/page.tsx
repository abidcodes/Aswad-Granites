"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { amitSlabs } from "@/data/amit";

const cats = ["All", "Light Tones", "Dark Tones"] as const;
const sorts = ["Recent", "Name A-Z"] as const;

export default function ProductsPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Recent");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    let out = amitSlabs.filter(
      (s) =>
        (cat === "All" || (cat === "Light Tones" ? s.tone === "light" : s.tone === "dark")) &&
        (query.trim() === "" ||
          s.name.toLowerCase().includes(query.trim().toLowerCase()) ||
          s.name.replace(/\s+/g, "").includes(query.trim().replace(/\s+/g, "")))
    );
    if (sort === "Name A-Z") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [cat, sort, query]);

  return (
    <div className="bg-base pt-20">
      <section className="mx-auto max-w-[1560px] px-5 pb-10 pt-10 sm:px-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gilt">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2 text-faint">/</span>
          <span className="text-ink">All</span>
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-none">
          ALL <span className="italic text-gilt">COLLECTION</span>
        </h1>

        <div className="mt-9 flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="flex flex-1 items-center justify-between gap-3 border border-line bg-white px-5 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.18em] lg:max-w-xs">
            Filter : {cat}
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as typeof cat)}
              aria-label="Filter by category"
              className="cursor-pointer bg-transparent text-right outline-none"
            >
              {cats.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-1 items-center justify-between gap-3 border border-line bg-white px-5 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.18em] lg:max-w-xs">
            Sort by : {sort}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              aria-label="Sort collection"
              className="cursor-pointer bg-transparent text-right outline-none"
            >
              {sorts.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <div className="relative lg:ml-auto lg:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search slabs (e.g. 012)"
              aria-label="Search slabs"
              className="w-full border border-line bg-white py-3.5 pl-5 pr-12 text-sm outline-none placeholder:text-faint focus:border-[var(--gold)]"
            />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-faint" />
          </div>
        </div>
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-faint">
          {list.length} of {amitSlabs.length} slabs
        </p>
      </section>

      <section className="mx-auto max-w-[1560px] px-5 pb-28 sm:px-10">
        {list.length === 0 ? (
          <p className="border border-line bg-white py-16 text-center text-sm text-muted">
            No slabs match. Try another search or category.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {list.map((s, i) => (
              <Link
                key={s.src}
                href={`/products/slab/${s.name.split(" ").pop()}`}
                className="group block border border-line bg-white transition-shadow duration-500 hover:shadow-[0_25px_50px_rgba(17,17,17,0.12)]"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)" }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading={i < 8 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-3.5">
                  <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-ink">
                    {s.name}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gilt opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
