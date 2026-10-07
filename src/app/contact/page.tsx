"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/Corporate_reception_area_granite._20261007200955.jpg"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 to-stone-950" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">Get In Touch</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-stone-400">
            Request a quote, book a showroom visit, or ask about export pricing.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-stone-900 p-6 sm:p-8">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle size={56} className="mx-auto text-green-400" />
              <h2 className="mt-4 text-2xl font-bold">Request Received!</h2>
              <p className="mt-2 text-sm text-stone-400">
                Thanks {form.name || "there"} — our sales team will call {form.phone || "you"} within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 rounded-full bg-white/10 px-6 py-2.5 text-sm font-bold hover:bg-white/20 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              <h2 className="text-xl font-bold">Request a Quote</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-white/10 bg-stone-950 p-3.5 text-sm outline-none focus:border-[#c9a227] transition-colors"
                />
                <input
                  required
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border border-white/10 bg-stone-950 p-3.5 text-sm outline-none focus:border-[#c9a227] transition-colors"
                />
              </div>
              <input
                placeholder="City / Country"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-stone-950 p-3.5 text-sm outline-none focus:border-[#c9a227] transition-colors"
              />
              <textarea
                required
                rows={5}
                placeholder="Requirement — e.g. 2000 sq.ft Tan Brown 20mm polished slabs for villa in Hyderabad *"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-stone-950 p-3.5 text-sm outline-none focus:border-[#c9a227] transition-colors"
              />
              <button className="w-full rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] py-4 font-bold text-black shadow-lg shadow-[#c9a227]/20 hover:scale-[1.02] transition-transform">
                Send Enquiry
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4">
          {[
            { icon: Phone, t: "Sales Desk", d: "+91 98480 00000 (9am–7pm IST)" },
            { icon: Mail, t: "Email", d: "sales@aswadgranites.com" },
            { icon: MapPin, t: "Factory & Showroom", d: "Survey No. 234, Chimakurthy Road, Ongole, AP 523001" },
          ].map((c) => (
            <div key={c.t} className="flex gap-4 rounded-2xl border border-white/10 bg-stone-900 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 text-[#d4af6a]">
                <c.icon size={22} />
              </span>
              <div>
                <div className="font-bold">{c.t}</div>
                <div className="text-sm text-stone-400">{c.d}</div>
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-[#c9a227]/20 bg-gradient-to-br from-[#c9a227]/10 to-transparent p-5">
            <b className="text-[#d4af6a]">Bulk / Export?</b>
            <p className="mt-1 text-sm text-stone-300">
              Share drawings or BOQ on WhatsApp — we reply with CIF rates, slab photos and packing list within 24 hours.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/gallery/Modern_villa_with_granite_exterior_20261007200955.jpg"
              alt="Villa with granite exterior"
              width={600}
              height={300}
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
