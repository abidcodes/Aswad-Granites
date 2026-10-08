"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, Plus } from "lucide-react";
import { SectionLabel, FadeUp, MaskedLines } from "../Reveal";
import { Magnetic } from "./Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "1998", t: "The first quarry", d: "A single Absolute Black quarry near Ongole. Two dozen workers, one promise: honest stone." },
  { year: "2005", t: "The processing plant", d: "Our 100,000 sq.ft plant opens in Ongole — gangsaws, polish lines and room to grow." },
  { year: "2012", t: "First container abroad", d: "Black Galaxy sails to the Gulf. Export becomes our second heartbeat." },
  { year: "2018", t: "Italian Breton lines", d: "Auto-polish and resin lines arrive. Finish quality steps into the luxury league." },
  { year: "2024", t: "The illuminated showroom", d: "10,000 slabs under one glowing roof — buyers walk through stone like a gallery." },
  { year: "Today", t: "30+ countries", d: "12 quarries, 850 people, 2M sq.ft a year. Still family-run, still obsessed." },
];

export function Story() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionLabel>Our Story</SectionLabel>
      <h2 className="mt-3 max-w-4xl font-display text-5xl font-medium leading-[1.02] sm:text-7xl">
        <MaskedLines lines={["Twenty-eight years,", "one obsession."]} />
      </h2>
      <div className="mt-14 space-y-0">
        {milestones.map((m, i) => (
          <FadeUp key={m.year}>
            <div className="grid gap-2 border-t border-line py-8 sm:grid-cols-[140px_1fr_2fr] sm:gap-8">
              <div className="font-display text-4xl font-semibold text-gilt sm:text-5xl">{m.year}</div>
              <h3 className="font-display text-2xl font-medium sm:text-3xl">{m.t}</h3>
              <p className="max-w-xl leading-relaxed text-muted">{m.d}</p>
            </div>
          </FadeUp>
        ))}
        <div className="border-b border-line" />
      </div>
    </section>
  );
}

const quotes = [
  { q: "The Black Galaxy slabs arrived book-matched and flawless. Our villa lobby looks like a five-star hotel.", n: "Private Villa Owner", w: "Hyderabad" },
  { q: "Twelve containers, zero shade variation, on-time CIF Jebel Ali. The most professional quarry partner we work with.", n: "Stone Importer", w: "Dubai, UAE" },
  { q: "Their team measured, fabricated and installed 4,000 sq.ft of Tan Brown across our office — seamless.", n: "Project Architect", w: "Bengaluru" },
  { q: "Samples in 48 hours, video inspection of every bundle. Buying from abroad has never felt this safe.", n: "Distributor", w: "Houston, USA" },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="overflow-hidden border-y border-line bg-sunken">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionLabel>Kind Words</SectionLabel>
        <h2 className="mt-3 font-display text-5xl font-medium sm:text-7xl">
          Trusted <span className="gold-text italic">worldwide</span>
        </h2>
        <div ref={ref} className="mt-10 cursor-grab overflow-hidden active:cursor-grabbing" data-cursor="DRAG">
          <motion.div drag="x" dragConstraints={ref} className="flex gap-5">
            {quotes.map((t) => (
              <div key={t.n} className="w-[85vw] shrink-0 rounded-3xl border border-line bg-base p-8 sm:w-[420px]">
                <Quote size={28} className="text-gilt" />
                <p className="mt-4 font-display text-2xl font-medium leading-snug">“{t.q}”</p>
                <p className="mt-6 text-sm font-bold">{t.n}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-faint">{t.w}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-faint">Drag to explore →</p>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is your minimum order quantity?", a: "For domestic projects there is no MOQ — even a single kitchen slab. Export orders start at one 20ft container (roughly 450–500 sq.m of 2cm slabs)." },
  { q: "Do you help with export documentation?", a: "Yes. We handle invoicing, packing lists, fumigation certificates, bills of lading and marine insurance. You receive CIF or FOB quotes within 24 hours." },
  { q: "Can I see the exact slabs before buying?", a: "Absolutely. Visit our Ongole showroom, or we share live photos and video inspection of your bundles before dispatch." },
  { q: "Which finishes and thicknesses do you offer?", a: "Polished, honed, flamed, lapatura and leather finishes in 15mm, 20mm and 30mm — plus tiles, pavers and cut-to-size." },
  { q: "Do you install, or only supply?", a: "We supply across India and install in Andhra Pradesh and Telangana through our own measurement and fitting teams." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionLabel>Questions</SectionLabel>
      <h2 className="mt-3 font-display text-5xl font-medium sm:text-6xl">
        Before you <span className="gold-text italic">ask</span>
      </h2>
      <div className="mt-10 divide-y divide-[var(--rule)] border-y border-line">
        {faqs.map((f, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display text-xl font-medium sm:text-2xl">{f.q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-gilt">
                <Plus size={22} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ShowroomCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-line">
        <img
          src="/gallery/Granite_showroom_illuminated_at__20261007200955.jpg"
          alt="Aswad showroom at night"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#e8c876]">Visit Us</p>
            <h2 className="mt-3 font-display text-5xl font-medium text-white sm:text-6xl">
              Walk through <span className="gold-text italic">10,000 slabs</span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/75">
              Survey No. 234, Chimakurthy Road, Ongole, Andhra Pradesh 523001.
              Open Mon–Sat, 9 AM – 7 PM.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Magnetic>
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black">
                  Book a visit <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ongole+Andhra+Pradesh"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:border-[#e8c876] hover:text-[#e8c876] transition-colors"
              >
                Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/15">
            <iframe
              title="Aswad Granites location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.95%2C15.45%2C80.15%2C15.56&layer=mapnik&marker=15.5057%2C80.0499"
              className="h-72 w-full lg:h-full lg:min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
