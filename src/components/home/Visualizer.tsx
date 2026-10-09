"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { SectionLabel, FadeUp } from "../Reveal";

const A = {
  src: "/gallery/Modern_luxury_kitchen_with_granite_20261007200955.jpg",
  label: "Black Galaxy · Kitchen island",
};
const B = {
  src: "/gallery/Black_granite_kitchen_island_20261007200955.jpg",
  label: "Midnight Vein · Countertop",
};

export default function Visualizer() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(1200);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <section className="border-y border-line bg-sunken">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionLabel>Room Visualizer</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-5xl font-medium leading-[1.02] sm:text-7xl">
          Drag to compare <span className="gold-text italic">installations</span>
        </h2>
        <FadeUp className="mt-10">
          <div
            ref={ref}
            className="relative h-[50vh] touch-none select-none overflow-hidden rounded-3xl border border-line sm:h-[65vh]"
            data-cursor="DRAG"
            onMouseMove={(e) => { if (e.buttons === 1) setFromClientX(e.clientX); }}
            onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
          >
            <img src={B.src} alt={B.label} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img src={A.src} alt={A.label} draggable={false} className="h-full max-w-none object-cover" style={{ width: w }} />
            </div>
            <div className="absolute inset-y-0 z-10 w-[2px] bg-[var(--gold)]" style={{ left: `${pos}%` }}>
              <span className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--gold)] text-white shadow-xl">
                <ChevronsLeftRight size={20} />
              </span>
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-black/55 px-4 py-1.5 text-xs font-bold text-white backdrop-blur">{A.label}</span>
            <span className="absolute right-4 top-4 rounded-full bg-black/55 px-4 py-1.5 text-xs font-bold text-white backdrop-blur">{B.label}</span>
            <input
              type="range"
              min={4}
              max={96}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare installations"
              className="absolute inset-x-0 bottom-4 mx-auto w-2/3 accent-[#143a75]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
