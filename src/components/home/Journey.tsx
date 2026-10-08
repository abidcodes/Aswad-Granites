"use client";

import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Mountain, Factory, Gem, Container } from "lucide-react";
import { SectionLabel } from "../Reveal";

const steps = [
  {
    icon: Mountain,
    t: "Quarrying",
    d: "12 captive quarries across Andhra Pradesh, Telangana & Karnataka — 50 years of reserves, cut with diamond wire saws.",
    img: "/gallery/Granite_factory_interior_with_ma_20261007200955.jpg",
  },
  {
    icon: Factory,
    t: "Processing",
    d: "Gangsaws, Italian Breton polish lines, resin and epoxy treatment. 10,000 slabs resting in stock.",
    img: "/gallery/Machine_polishing_granite_slab_20261007200955.jpg",
  },
  {
    icon: Gem,
    t: "Custom Fabrication",
    d: "Countertops, vanities, cut-to-size, flamed pavers and CNC carving — finished by master craftsmen.",
    img: "/gallery/Stone_workers_finishing_granite__20261007200955.jpg",
  },
  {
    icon: Container,
    t: "Export & Logistics",
    d: "Fumigated wooden bundles, marine insurance and CIF quotes — documentation handled, delivered on time.",
    img: "/gallery/Granite_slabs_packed_for_transport_20261007200955.jpg",
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  return (
    <section ref={ref} className="relative h-[380vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative hidden h-[70vh] overflow-hidden rounded-3xl border border-line lg:block">
            {steps.map((s, i) => (
              <motion.img
                key={s.t}
                src={s.img}
                alt={s.t}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={false}
                animate={{ opacity: reduce ? 1 : active === i ? 1 : 0, scale: active === i ? 1.05 : 1.12 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div>
            <SectionLabel>Mine to Mansion</SectionLabel>
            <h2 className="mt-3 font-display text-5xl font-medium sm:text-6xl">
              One journey, <span className="gold-text italic">four crafts</span>
            </h2>
            <div className="mt-8 space-y-3">
              {steps.map((s, i) => (
                <div
                  key={s.t}
                  className={`rounded-2xl border p-5 transition-all duration-500 sm:p-6 ${
                    active === i ? "border-[var(--gold)] bg-raised shadow-xl" : "border-line opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${active === i ? "bg-[var(--gold)] text-black" : "bg-sunken text-gilt"}`}>
                      <s.icon size={22} />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gilt">Step {i + 1}</p>
                      <h3 className="font-display text-2xl font-medium sm:text-3xl">{s.t}</h3>
                    </div>
                  </div>
                  <div className={`grid transition-all duration-500 ${active === i ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <p className="overflow-hidden text-sm leading-relaxed text-muted">{s.d}</p>
                  </div>
                  <img src={s.img} alt={s.t} loading="lazy" className="mt-4 h-44 w-full rounded-xl object-cover lg:hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
