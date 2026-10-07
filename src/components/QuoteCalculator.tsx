"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Calculator } from "lucide-react";

export default function QuoteCalculator() {
  const [productId, setProductId] = useState(products[0].id);
  const [area, setArea] = useState(500);
  const [thickness, setThickness] = useState("20mm");
  const [finish, setFinish] = useState("Polished");

  const product = useMemo(
    () => products.find((p) => p.id === productId) ?? products[0],
    [productId]
  );

  const thicknessMult = thickness === "20mm" ? 1 : thickness === "30mm" ? 1.35 : 0.7;
  const finishMult = finish === "Polished" ? 1 : finish === "Honed" ? 1.05 : 1.12;

  const total = Math.round(product.pricePerSqft * area * thicknessMult * finishMult);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl">
      <div className="flex items-center gap-2 font-bold">
        <Calculator className="text-[#8a6d1f]" /> Project Estimator <span className="ml-auto rounded-full bg-stone-900/5 px-2 py-0.5 text-[11px] text-stone-600">DEMO</span>
      </div>

      <label className="mt-5 block text-xs font-bold uppercase tracking-wider text-stone-400">Stone</label>
      <select
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="mt-1 w-full rounded-lg border border-stone-200 bg-stone-50 p-2.5 text-sm"
      >
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} — ₹{p.pricePerSqft}/sq.ft
          </option>
        ))}
      </select>

      <label className="mt-4 block text-xs font-bold uppercase tracking-wider text-stone-400">
        Area: {area} sq.ft
      </label>
      <input
        type="range"
        min={50}
        max={10000}
        step={50}
        value={area}
        onChange={(e) => setArea(Number(e.target.value))}
        className="mt-2 w-full accent-[#c9a227]"
      />

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">Thickness</label>
          <div className="mt-1 flex gap-1">
            {["15mm", "20mm", "30mm"].map((t) => (
              <button
                key={t}
                onClick={() => setThickness(t)}
                className={`flex-1 rounded-lg px-2 py-2 text-xs font-bold ${
                  thickness === t ? "bg-[#c9a227] text-black" : "bg-stone-900/5 text-stone-600"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">Finish</label>
          <div className="mt-1 flex gap-1">
            {["Polished", "Honed", "Flamed"].map((f) => (
              <button
                key={f}
                onClick={() => setFinish(f)}
                className={`flex-1 rounded-lg px-1 py-2 text-xs font-bold ${
                  finish === f ? "bg-[#c9a227] text-black" : "bg-stone-900/5 text-stone-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-amber-50 p-4 text-center border border-[#c9a227]/30">
        <div className="text-xs uppercase tracking-widest text-stone-400">Indicative Total</div>
        <div className="text-3xl font-extrabold text-[#8a6d1f]">₹{total.toLocaleString("en-IN")}</div>
        <div className="text-xs text-stone-400 mt-1">
          {area} sq.ft × ₹{product.pricePerSqft} × {thickness} × {finish}
        </div>
      </div>
    </div>
  );
}
