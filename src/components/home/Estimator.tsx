"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Calculator, MessageCircle } from "lucide-react";
import { SectionLabel, FadeUp } from "../Reveal";

export default function Estimator() {
  const [productId, setProductId] = useState(products[0].id);
  const [area, setArea] = useState(500);
  const [thickness, setThickness] = useState("20mm");
  const [finish, setFinish] = useState("Polished");

  const product = useMemo(() => products.find((p) => p.id === productId) ?? products[0], [productId]);
  const thicknessMult = thickness === "20mm" ? 1 : thickness === "30mm" ? 1.35 : 0.7;
  const finishMult = finish === "Polished" ? 1 : finish === "Honed" ? 1.05 : 1.12;
  const total = Math.round(product.pricePerSqft * area * thicknessMult * finishMult);

  const waText = encodeURIComponent(
    `Hi Aswad Granites, please quote me: ${product.name} (${thickness}, ${finish}), ${area} sq.ft. Indicative total ₹${total.toLocaleString("en-IN")}.`
  );

  return (
    <section className="border-y border-line bg-sunken">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-32 md:grid-cols-2 md:items-center">
        <div>
          <SectionLabel>Cost Estimator</SectionLabel>
          <h2 className="mt-3 font-display text-5xl font-medium leading-[1.02] sm:text-7xl">
            Price your <span className="gold-text italic">project</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Choose a stone, set your area, finish and thickness for an instant
            factory estimate — then send it straight to our sales desk.
          </p>
        </div>
        <FadeUp>
          <div className="rounded-3xl border border-line bg-base p-6 shadow-2xl sm:p-8">
            <div className="flex items-center gap-2 font-display text-2xl font-medium">
              <Calculator size={22} className="text-gilt" /> Project Estimator
            </div>
            <label className="mt-6 block text-[11px] font-bold uppercase tracking-[0.25em] text-faint">Stone</label>
            <select
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-raised p-3 text-sm text-ink outline-none focus:border-[var(--gold)]"
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>{p.name} — ₹{p.pricePerSqft}/sq.ft</option>
              ))}
            </select>
            <label className="mt-5 block text-[11px] font-bold uppercase tracking-[0.25em] text-faint">
              Area · {area.toLocaleString("en-IN")} sq.ft
            </label>
            <input
              type="range" min={50} max={10000} step={50} value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-[#c9a227]"
            />
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.25em] text-faint">Thickness</label>
                <div className="mt-2 flex gap-1.5">
                  {["15mm", "20mm", "30mm"].map((t) => (
                    <button key={t} onClick={() => setThickness(t)}
                      className={`flex-1 rounded-lg px-2 py-2.5 text-xs font-bold transition-all ${thickness === t ? "bg-[var(--gold)] text-black" : "bg-sunken text-muted hover:text-ink"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.25em] text-faint">Finish</label>
                <div className="mt-2 flex gap-1.5">
                  {["Polished", "Honed", "Flamed"].map((f) => (
                    <button key={f} onClick={() => setFinish(f)}
                      className={`flex-1 rounded-lg px-1 py-2.5 text-xs font-bold transition-all ${finish === f ? "bg-[var(--gold)] text-black" : "bg-sunken text-muted hover:text-ink"}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.3em] text-faint">Indicative total</div>
              <div className="mt-1 font-display text-5xl font-semibold text-gilt">₹{total.toLocaleString("en-IN")}</div>
              <div className="mt-1 text-xs text-faint">{area} sq.ft × ₹{product.pricePerSqft} × {thickness} × {finish}</div>
            </div>
            <a
              href={`https://wa.me/919848000000?text=${waText}`}
              target="_blank" rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={18} /> Send estimate on WhatsApp
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
