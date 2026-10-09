"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EditorialCta() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <img
        src="/gallery/Hotel_lobby_featuring_granite_fl_20261007200955.jpg"
        alt="Grand lobby floored in polished granite"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0d294d]/78" />
      <div className="relative mx-auto max-w-[1560px] px-5 py-28 sm:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/60">
            Visit the yard · Kondhwa Budruk, Pune
          </p>
          <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.88] text-white">
            READY TO
            <br />
            DEFINE YOUR
            <br />
            <span className="italic">SPACE?</span>
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/70">
            Visit our collection or speak with our stone specialists.
            Call <a href="tel:+919686572109" className="font-bold tracking-wide text-white">+91 96865 72109</a>.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.25em] text-black transition-all hover:gap-5"
            >
              Get a Quote <ArrowRight size={15} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center border border-white/50 px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Browse Stones
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
