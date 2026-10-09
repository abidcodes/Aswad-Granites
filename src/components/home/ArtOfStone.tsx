"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, y = 40 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function ArtOfStone() {
  return (
    <section className="mx-auto max-w-[1560px] px-5 py-24 sm:px-10 lg:py-36">
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-faint">01 · The Craft</p>
      </Reveal>
      <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-6">
        {/* small image, dropped lower */}
        <div className="lg:col-span-4 lg:pt-48">
          <Reveal delay={0.1}>
            <img
              src="/granites/tan-brown.jpg"
              alt="Tan Brown granite texture"
              loading="lazy"
              className="h-72 w-full object-cover lg:h-[380px]"
            />
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-faint">
              Tan Brown · Andhra Pradesh
            </p>
          </Reveal>
        </div>
        {/* large vertical image, pulled under the small one */}
        <div className="lg:col-span-5 lg:-ml-20">
          <Reveal delay={0.2}>
            <img
              src="/granites/black-galaxy.jpg"
              alt="Black Galaxy granite slab"
              loading="lazy"
              className="h-[60vh] w-full object-cover lg:h-[76vh]"
            />
          </Reveal>
        </div>
        {/* editorial text */}
        <div className="flex flex-col justify-end lg:col-span-3 lg:pb-8">
          <Reveal delay={0.25}>
            <h2 className="font-display text-[clamp(2.8rem,4.5vw,4.6rem)] font-medium leading-[0.95]">
              THE ART
              <br />
              OF NATURAL
              <br />
              <span className="italic text-gilt">STONE</span>
            </h2>
            <p className="mt-7 max-w-xs text-[13px] font-bold uppercase leading-relaxed tracking-[0.12em] text-ink">
              Aswad is where refined design meets lasting granite strength.
            </p>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              Cut and polished in our Kondhwa Budruk yard: kitchen countertops,
              flooring, wall cladding and outdoor stone. Forty colours, compared
              side by side, priced honestly per square foot.
            </p>
            <Link
              href="/products"
              className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-[12px] font-extrabold uppercase tracking-[0.25em] text-ink"
            >
              Explore
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
