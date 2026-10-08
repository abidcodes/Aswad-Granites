"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 250, damping: 25 });
  const ry = useSpring(y, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement).closest?.("[data-cursor]") as HTMLElement | null;
      if (t) {
        setLabel(t.dataset.cursor || "");
        setHovering(true);
      } else {
        setLabel("");
        setHovering((e.target as HTMLElement).closest?.("a,button") ? true : false);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[150] h-1.5 w-1.5 rounded-full bg-[var(--gold)]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[150] flex items-center justify-center rounded-full border border-[var(--gold)]"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 72 : hovering ? 48 : 32,
          height: label ? 72 : hovering ? 48 : 32,
          backgroundColor: label ? "rgba(176,138,62,0.9)" : "rgba(176,138,62,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label && (
          <span className="text-[11px] font-bold tracking-[0.2em] text-black">{label}</span>
        )}
      </motion.div>
    </>
  );
}
