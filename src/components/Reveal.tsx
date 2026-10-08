"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-gilt">{children}</p>
  );
}

export function MaskedLines({ lines, className = "" }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className={className}
            initial={reduce ? { opacity: 0 } : { y: "110%" }}
            whileInView={reduce ? { opacity: 1 } : { y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function WipeImage({ src, alt, className = "", imgClassName = "" }: { src: string; alt: string; className?: string; imgClassName?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={reduce ? { opacity: 0, scale: 1 } : { scale: 1.18, opacity: 0.6 }}
        whileInView={{ scale: 1.06, opacity: 1 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {!reduce && (
        <motion.div
          className="absolute inset-0 bg-base"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ transformOrigin: "right" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </div>
  );
}

export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(to); return; }
    const t0 = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);
  return <span ref={ref} className={className}>{val}{suffix}</span>;
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-sunken py-4">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-xs font-bold uppercase tracking-[0.3em] text-muted">
            {item}
            <span className="text-gilt">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
