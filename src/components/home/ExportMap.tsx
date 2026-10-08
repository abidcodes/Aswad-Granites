"use client";

import { SectionLabel, FadeUp, CountUp } from "../Reveal";

const lanes = [
  { region: "Gulf & Middle East", share: 34, x: 350, y: 120 },
  { region: "United States", share: 22, x: 120, y: 90 },
  { region: "Europe", share: 20, x: 330, y: 45 },
  { region: "South-East Asia", share: 12, x: 470, y: 170 },
  { region: "Africa", share: 7, x: 320, y: 210 },
  { region: "Australia", share: 5, x: 520, y: 230 },
];

const ORIGIN = { x: 415, y: 150 };

function arcTo(x: number, y: number) {
  const mx = (ORIGIN.x + x) / 2;
  const my = Math.min(ORIGIN.y, y) - 38;
  return `M ${ORIGIN.x} ${ORIGIN.y} Q ${mx} ${my} ${x} ${y}`;
}

export default function ExportMap() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionLabel>Global Export</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-medium leading-[1.02] sm:text-7xl">
            From Ongole <span className="gold-text italic">to the world</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            1,200+ containers a year leave our yard for ports across the globe —
            FOB and CIF, documentation handled end to end.
          </p>
          <div className="mt-8 space-y-3">
            {lanes.map((l) => (
              <FadeUp key={l.region}>
                <div className="flex items-center gap-4">
                  <span className="w-44 text-sm font-bold">{l.region}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sunken">
                    <div className="h-full rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)]" style={{ width: `${l.share * 2.4}%` }} />
                  </div>
                  <span className="w-12 text-right font-display text-xl font-semibold text-gilt"><CountUp to={l.share} suffix="%" /></span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <FadeUp>
          <div className="rounded-3xl border border-line bg-sunken p-4">
            <svg viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Export lanes from Ongole">
              {lanes.map((l) => (
                <g key={l.region}>
                  <path d={arcTo(l.x, l.y)} fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" className="flow-line" />
                  <circle cx={l.x} cy={l.y} r="4" fill="var(--gold)" />
                  <text x={l.x + 10} y={l.y + 4} fontSize="11" fill="var(--muted)" fontWeight="700">{l.region}</text>
                </g>
              ))}
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="7" fill="var(--gold)" />
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="13" fill="none" stroke="var(--gold)" opacity="0.5">
                <animate attributeName="r" values="8;18" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x={ORIGIN.x - 28} y={ORIGIN.y + 28} fontSize="12" fill="var(--ink)" fontWeight="800">ONGOLE</text>
            </svg>
            <p className="px-2 pb-2 text-center text-xs uppercase tracking-[0.3em] text-faint">30+ countries served</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
