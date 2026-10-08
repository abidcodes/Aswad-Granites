"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { SectionLabel, MaskedLines } from "@/components/Reveal";

export default function GalleryPage() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => cat === "All" || img.category === cat.toLowerCase());
  const close = useCallback(() => setLightbox(null), []);
  const goNext = useCallback(() => setLightbox((p) => (p !== null ? (p + 1) % filtered.length : null)), [filtered.length]);
  const goPrev = useCallback(() => setLightbox((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : null)), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox, close, goNext, goPrev]);

  return (
    <div className="pt-20">
      <section className="relative flex h-[46vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery/Granite_showroom_illuminated_at__20261007200955.jpg" alt="Gallery" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[var(--bg)]" />
        </div>
        <div className="relative z-10 px-4 text-center">
          <SectionLabel>Our Work</SectionLabel>
          <h1 className="mt-3 font-display text-6xl font-medium text-white sm:text-8xl">
            <MaskedLines lines={["Gallery"]} />
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{galleryImages.length}+ photos — factory, showroom, slabs and projects.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => { setCat(c); setLightbox(null); }}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${cat === c ? "bg-[var(--gold)] text-black" : "border border-line text-muted hover:border-[var(--gold)] hover:text-ink"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* staggered grid — alternating offsets + hover dim siblings */}
      <section className="group/grid mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setLightbox(i)}
              data-cursor="VIEW"
              className={`relative mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-line transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl group-hover/grid:opacity-60 hover:!opacity-100 ${i % 3 === 1 ? "lg:mt-10" : ""} ${i % 3 === 2 ? "lg:mt-5" : ""}`}
            >
              <Image src={img.src} alt={img.alt} width={600} height={450} loading="lazy" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100">
                <p className="text-sm font-medium text-white">{img.alt}</p>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8c876]">{img.category}</span>
              </div>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity hover:opacity-100">
                <ZoomIn size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[140] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={close}
          >
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><X size={24} /></button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous" className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronLeft size={24} /></button>
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next" className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronRight size={24} /></button>
            <div className="max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
              <Image src={filtered[lightbox].src} alt={filtered[lightbox].alt} width={1200} height={800} className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain" />
              <p className="mt-4 text-center text-sm text-white/70">{filtered[lightbox].alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
