"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryImages.filter(
    (img) => cat === "All" || img.category === cat.toLowerCase()
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/Granite_showroom_illuminated_at_._20261007200955.jpg"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 to-stone-950" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Our Work</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-6xl">Gallery</h1>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-stone-400">
            {galleryImages.length}+ photos from our factory, showroom, and projects worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => { setCat(c); setLightbox(null); }}
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
      </section>

      {/* Masonry Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="gallery-item relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-stone-200 cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-stone-900">{img.alt}</p>
                <span className="text-xs text-[#8a6d1f] capitalize">{img.category}</span>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-950/50 text-stone-900 backdrop-blur-sm">
                  <ZoomIn size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900/5 text-stone-900 hover:bg-stone-900/10 transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900/5 text-stone-900 hover:bg-stone-900/10 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900/5 text-stone-900 hover:bg-stone-900/10 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          <div className="max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-sm text-stone-600">{filtered[lightbox].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
