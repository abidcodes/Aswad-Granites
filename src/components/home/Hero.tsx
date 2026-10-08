"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { CountUp } from "../Reveal";

export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const imgX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  return (
    <section
      className="relative flex h-svh min-h-[640px] items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        if (reduce) return;
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      <motion.div className="absolute inset-0" style={reduce ? {} : { x: imgX, y: imgY }}>
        <img
          src="/gallery/Black_granite_slab_on_display_20261007200955.jpg"
          alt="Premium black granite slab with gold veins"
          className={reduce ? "h-full w-full object-cover" : "hero-zoom h-full w-full scale-110 object-cover"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[var(--bg)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#e8c876]"
        >
          Ongole · Since 1998
        </motion.p>
        <h1 className="mt-5 font-display text-[17vw] font-medium leading-[0.95] text-white sm:text-8xl lg:text-[7.5rem]">
          <span className="mask-line"><motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay: 2.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}>Stone That</motion.span></span>
          <span className="mask-line"><motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay: 2.85, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="gold-text italic">Speaks Luxury</motion.span></span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Quarried, cut and polished in Andhra Pradesh — exported to 30+ countries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Magnetic>
            <Link
              href="/products"
              data-cursor="VIEW"
              className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--gold)] px-9 py-4 text-sm font-bold uppercase tracking-wider text-black"
            >
              Explore Stones
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-[#e8c876] hover:text-[#e8c876]"
            >
              View Gallery
            </Link>
          </Magnetic>
        </motion.div>

        {/* floating glass stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.9 }}
          className="mx-auto mt-12 flex max-w-lg items-stretch justify-center gap-6 rounded-2xl border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-xl sm:gap-10"
        >
          {[
            [40, "+", "Stone colors"],
            [30, "+", "Countries"],
            [2, "M+", "Sq.ft / year"],
          ].map(([n, s, l]) => (
            <div key={l as string} className="text-center">
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <CountUp to={n as number} suffix={s as string} />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/70">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#collections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70"
      >
        Scroll to explore
        <motion.span animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
