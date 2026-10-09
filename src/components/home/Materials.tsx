"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const rows = [
  { name: "GRANITE", meta: "40+ colours · 2cm / 3cm", img: "/granites/black-galaxy.jpg" },
  { name: "MARBLE", meta: "Classic whites · Honed", img: "/granites/viscon-white.jpg" },
  { name: "QUARTZ", meta: "Uniform tones · Low upkeep", img: "/granites/kashmir-white.jpg" },
  { name: "COUNTERTOPS", meta: "Kitchens · Islands · Vanities", img: "/gallery/Modern_luxury_kitchen_with_granite_20261007200955.jpg" },
  { name: "WALL CLADDING", meta: "Lobbies · Facades · Bath", img: "/gallery/Hotel_lobby_featuring_granite_fl_20261007200955.jpg" },
];

export default function Materials() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-[1560px] px-5 pb-32 sm:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[11px] font-bold uppercase tracking-[0.4em] text-faint"
      >
        02 · Materials
      </motion.p>
      <div className="mt-4 border-b border-line">
        {rows.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: reduce ? 0 : 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease }}
          >
            <Link
              href="/products"
              className="group grid items-end gap-5 border-t border-line py-8 lg:grid-cols-12 lg:py-10"
            >
              <span className="font-display text-[clamp(2.6rem,6vw,5.5rem)] font-medium leading-none text-ink transition-transform duration-500 group-hover:translate-x-3 lg:col-span-7">
                <span className="mr-5 align-top font-sans text-xs font-bold tracking-[0.3em] text-faint">
                  0{i + 1}
                </span>
                {r.name}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted lg:col-span-2">
                {r.meta}
              </span>
              <span className="relative block h-52 overflow-hidden lg:col-span-3 lg:h-56">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
