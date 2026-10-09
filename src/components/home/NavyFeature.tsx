"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function NavyFeature() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#0d294d] text-white">
      <div className="mx-auto grid max-w-[1560px] gap-12 px-5 py-24 sm:px-10 lg:grid-cols-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease }}
          className="flex flex-col justify-center lg:col-span-5"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/50">03 · Contrast</p>
          <h2 className="mt-6 font-display text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.92]">
            SURFACES
            <br />
            THAT DEFINE
            <br />
            <span className="italic text-[#9db9dd]">SPACE</span>
          </h2>
          <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-white/70">
            Natural stone selected for spaces that demand permanence, character
            and timeless beauty, from Pune homes to commercial landmarks.
          </p>
          <Link
            href="/products"
            className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-white pb-2 text-[12px] font-extrabold uppercase tracking-[0.25em]"
          >
            View Collection
            <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease }}
          className="relative z-10 lg:col-span-7 lg:-mb-48"
        >
          <img
            src="/granites/blue-pearl.jpg"
            alt="Blue Pearl granite with silver shimmer"
            loading="lazy"
            className="h-[50vh] w-full object-cover lg:h-[62vh]"
          />
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            Blue Pearl · Exotic Range
          </p>
        </motion.div>
      </div>
    </section>
  );
}
