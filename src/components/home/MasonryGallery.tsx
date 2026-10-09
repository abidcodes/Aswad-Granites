"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const shots = [
  { src: "/gallery/Modern_luxury_kitchen_with_granite_20261007200955.jpg", name: "Kitchen Island", cls: "col-span-2 row-span-2" },
  { src: "/granites/alaska-gold.jpg", name: "Alaska Gold", cls: "" },
  { src: "/gallery/Modern_bathroom_with_granite_cla_20261007200955.jpg", name: "Bath Cladding", cls: "row-span-2" },
  { src: "/gallery/Hotel_lobby_featuring_granite_fl_20261007200955.jpg", name: "Lobby Floor", cls: "" },
  { src: "/granites/absolute-black.jpg", name: "Absolute Black", cls: "" },
  { src: "/gallery/Granite_staircase_with_architect_20261007200955.jpg", name: "Staircase", cls: "row-span-2" },
  { src: "/gallery/Corporate_reception_area_granite_20261007200955.jpg", name: "Reception", cls: "col-span-2" },
  { src: "/granites/tan-brown.jpg", name: "Tan Brown", cls: "" },
];

export default function MasonryGallery() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-[1560px] px-5 py-24 sm:px-10 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-faint">05 · Selected Work</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9]">
            STONE, <span className="italic text-gilt">INSTALLED</span>
          </h2>
        </motion.div>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-3 border-b border-ink pb-2 text-[12px] font-extrabold uppercase tracking-[0.25em] text-ink"
        >
          View Gallery
          <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-2" />
        </Link>
      </div>

      <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-2 sm:auto-rows-[180px] lg:grid-cols-4 lg:auto-rows-[210px]">
        {shots.map((s, i) => (
          <motion.div
            key={s.src}
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-6%" }}
            transition={{ duration: 0.9, delay: Math.min(i * 0.05, 0.25), ease }}
            className={`group relative overflow-hidden ${s.cls}`}
          >
            <img
              src={s.src}
              alt={s.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[#0d294d]/0 transition-colors duration-500 group-hover:bg-[#0d294d]/35" />
            <p className="absolute bottom-4 left-4 translate-y-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {s.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
