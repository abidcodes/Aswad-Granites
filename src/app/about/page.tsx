"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Mountain, Award, Users, Globe, BadgeCheck } from "lucide-react";
import { SectionLabel, MaskedLines, FadeUp, WipeImage } from "@/components/Reveal";

function Parallax({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  return (
    <div ref={ref} className={`overflow-hidden rounded-3xl border border-line ${className}`}>
      <motion.img src={src} alt={alt} loading="lazy" style={{ y }} className="h-full w-full scale-[1.18] object-cover" />
    </div>
  );
}

const certs = ["ISO 9001:2015", "CE Certified Plant", "SGS Inspected", "Fumigation Licensed", "SEZ Exporter"];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative flex h-[52vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery/ASWAD_GRANITE_INDUSTRIES_exterior_20261007200955.jpg" alt="ASWAD Granite Industries" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[var(--bg)]" />
        </div>
        <div className="relative z-10 px-4 text-center">
          <SectionLabel>Since 1998</SectionLabel>
          <h1 className="mt-3 font-display text-6xl font-medium text-white sm:text-8xl">
            <MaskedLines lines={["About Us"]} />
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">From a single quarry to 12 quarries and exports to 30+ countries.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-medium leading-[1.02] sm:text-6xl">
              28 years of <span className="gold-text italic">crafting stone</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Aswad Granites began in 1998 with a single quarry in Ongole, Andhra Pradesh.
              Today we own 12 captive quarries across South India and run a 100,000 sq.ft
              processing plant with Italian Breton machinery.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We control every step — quarry to container — for consistent colour,
              precise sizing and honest pricing.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Mountain, n: "12", l: "Captive quarries" },
                { icon: Award, n: "28+", l: "Years of craft" },
                { icon: Users, n: "850+", l: "Team members" },
                { icon: Globe, n: "30+", l: "Export countries" },
              ].map((s) => (
                <FadeUp key={s.l}>
                  <div className="rounded-2xl border border-line bg-raised p-5">
                    <s.icon size={24} className="text-gilt" />
                    <div className="mt-2 font-display text-4xl font-semibold">{s.n}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-faint">{s.l}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <Parallax src="/gallery/Granite_factory_interior_with_ma_20261007200955.jpg" alt="Factory interior" className="h-72" />
            <Parallax src="/gallery/Team_standing_in_stone_showroom_20261007200955.jpg" alt="Our team in the showroom" className="h-72" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sunken">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionLabel>Infrastructure</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-medium sm:text-6xl">World-class <span className="gold-text italic">facility</span></h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { img: "/gallery/Machine_cutting_granite_block_20261007200955.jpg", t: "Cutting & Polishing", d: "4 gangsaws, 2 Breton auto-polish lines, resin + epoxy treatment, CNC bridge cutters." },
              { img: "/gallery/Granite_slabs_stacked_and_organized_20261007200955.jpg", t: "Ready Stock", d: "10,000+ slabs in 2cm & 3cm — tiles 60×60, 60×30 and cut-to-size." },
              { img: "/gallery/Granite_slabs_packed_for_transport_20261007200955.jpg", t: "Export Packing", d: "Fumigated wooden bundles, marine insurance, CIF/FOB quotes in 24 hours." },
            ].map((c) => (
              <FadeUp key={c.t}>
                <div className="overflow-hidden rounded-2xl border border-line bg-base transition-transform duration-500 hover:-translate-y-2">
                  <WipeImage src={c.img} alt={c.t} className="h-52" />
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-medium">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {certs.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gilt">
                <BadgeCheck size={14} /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Parallax src="/gallery/Granite_showroom_illuminated_at__20261007200955.jpg" alt="Showroom at night" className="h-96 order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionLabel>Visit Us</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-medium sm:text-6xl">Experience the <span className="gold-text italic">showroom</span></h2>
            <p className="mt-6 leading-relaxed text-muted">
              10,000+ slabs in a stunning illuminated setting. Compare colours side by
              side and choose the perfect stone for your project.
            </p>
            <p className="mt-4 leading-relaxed text-muted">Open Monday to Saturday, 9 AM – 7 PM. Free site measurement in AP & Telangana.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
