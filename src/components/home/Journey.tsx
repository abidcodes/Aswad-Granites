"use client";

import { Mountain, Factory, Gem, Container } from "lucide-react";
import { SectionLabel, FadeUp } from "../Reveal";

const steps = [
  {
    icon: Mountain,
    t: "Selection",
    d: "40+ granite & marble colours live in our Kondhwa Budruk yard. Compare slabs side by side and pick your exact piece.",
    img: "/gallery/Granite_factory_interior_with_ma_20261007200955.jpg",
  },
  {
    icon: Factory,
    t: "Cutting & Polishing",
    d: "Precision cutting, edge moulding and mirror polish in our Pune workshop: kitchens, flooring, stairs and counters.",
    img: "/gallery/Machine_polishing_granite_slab_20261007200955.jpg",
  },
  {
    icon: Gem,
    t: "Custom Fabrication",
    d: "Countertops, vanities, tabletops and wall cladding cut to your measurements by master craftsmen.",
    img: "/gallery/Stone_workers_finishing_granite__20261007200955.jpg",
  },
  {
    icon: Container,
    t: "Delivery & Fitting",
    d: "Safe transport across Pune plus expert installation. Call +91 96865 72109 for a free site visit.",
    img: "/gallery/Granite_slabs_packed_for_transport_20261007200955.jpg",
  },
];

export default function Journey() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionLabel>Yard to Home</SectionLabel>
      <h2 className="mt-3 font-display text-5xl font-medium sm:text-6xl">
        One journey, <span className="gold-text italic">four crafts</span>
      </h2>
      {/* side-by-side cards, no pinned scroll */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <FadeUp key={s.t} delay={Math.min(i * 0.06, 0.2)}>
            <div className="overflow-hidden rounded-2xl border border-line bg-raised">
              <img src={s.img} alt={s.t} loading="lazy" className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)] text-white">
                    <s.icon size={20} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gilt">Step {i + 1}</p>
                    <h3 className="font-display text-2xl font-medium">{s.t}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
