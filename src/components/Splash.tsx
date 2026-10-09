"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("aswad-splash-seen")) return;
    setShow(true);
    const t0 = performance.now();
    const dur = 2200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setExit(true), 250);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("aswad-splash-seen", "1");
        }, 1400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[200]" exit={{ opacity: 1 }}>
          {/* top slab */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-white flex items-end justify-center"
            animate={exit ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mb-6 flex flex-col items-center">
              <svg width="120" height="72" viewBox="0 0 120 72" fill="none">
                <motion.path
                  d="M60 6 L110 66 H86 L60 30 L34 66 H10 Z"
                  stroke="#143a75"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <motion.path
                  d="M42 52 H78"
                  stroke="#143a75"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </svg>
              <div className="mt-2 text-sm font-bold tracking-[0.5em] text-[#143a75]">ASWAD</div>
            </div>
          </motion.div>
          {/* bottom slab */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-white flex items-start justify-center"
            animate={exit ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mt-8 w-64">
              <div className="h-px w-full bg-[#143a75]/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#143a75]"
                  style={{ width: `${count}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-xs tracking-[0.3em] text-[#143a75]/80">
                <span>GRANITE INDUSTRIES</span>
                <span>{count}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
