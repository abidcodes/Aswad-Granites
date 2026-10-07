"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });

  return (
    <div className="pt-[68px]">
      <div className="hero-texture border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Get Factory Rates</p>
          <h1 className="mt-2 text-4xl font-extrabold">Request a Quote</h1>
          <p className="mt-2 text-stone-500">Demo form — no backend. Submits locally and shows a confirmation.</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600/10 text-green-600">
                <Send />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Request Received!</h2>
              <p className="mt-2 text-sm text-stone-500">
                Thanks {form.name || "there"} — our sales team will call {form.phone || "you"} within 24 hours. (Demo only)
              </p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-stone-900/5 px-6 py-2 text-sm font-bold">
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm outline-none focus:border-[#c9a227]" />
                <input required placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm outline-none focus:border-[#c9a227]" />
              </div>
              <input placeholder="City / Country" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm outline-none focus:border-[#c9a227]" />
              <textarea required rows={5} placeholder="Requirement — e.g. 2000 sq.ft Tan Brown 20mm polished slabs for villa in Hyderabad *"
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm outline-none focus:border-[#c9a227]" />
              <button className="w-full rounded-full bg-[#c9a227] py-3 font-bold text-black hover:bg-[#e0be5a]">
                Send Enquiry
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          {[
            { icon: Phone, t: "Sales Desk", d: "+91 98480 00000 (9am–7pm IST)" },
            { icon: Mail, t: "Email", d: "sales@aswadgranites.com" },
            { icon: MapPin, t: "Factory & Display", d: "Survey No. 234, Chimakurthy Road, Ongole, AP 523001" },
          ].map((c) => (
            <div key={c.t} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c9a227]/15 text-[#8a6d1f]">
                <c.icon size={20} />
              </span>
              <div>
                <div className="font-bold">{c.t}</div>
                <div className="text-sm text-stone-500">{c.d}</div>
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-[#c9a227]/30 bg-[#c9a227]/10 p-5 text-sm text-stone-600">
            <b className="text-[#8a6d1f]">Bulk / Export?</b> Share drawings or BOQ on WhatsApp — we reply with CIF rates, slab photos and packing list within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}
