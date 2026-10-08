"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { SectionLabel, MaskedLines, FadeUp } from "@/components/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });

  return (
    <div className="pt-20">
      <section className="relative flex h-[46vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery/Corporate_reception_area_granite_20261007200955.jpg" alt="Reception" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[var(--bg)]" />
        </div>
        <div className="relative z-10 px-4 text-center">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className="mt-3 font-display text-6xl font-medium text-white sm:text-8xl">
            <MaskedLines lines={["Contact Us"]} />
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Quotes, showroom visits and export pricing — reply within 24 hours.</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <FadeUp>
          <div className="rounded-3xl border border-line bg-raised p-6 sm:p-9">
            {sent ? (
              <div className="py-14 text-center">
                <CheckCircle size={56} className="mx-auto text-green-600" />
                <h2 className="mt-4 font-display text-3xl font-medium">Request received</h2>
                <p className="mt-2 text-sm text-muted">Thanks {form.name || "there"} — our sales team will call {form.phone || "you"} within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-line px-6 py-2.5 text-sm font-bold hover:border-[var(--gold)]">Send another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h2 className="font-display text-3xl font-medium">Request a quote</h2>
                <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
                  <div className="field">
                    <input required id="name" placeholder=" " value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <label htmlFor="name">Full name *</label>
                  </div>
                  <div className="field">
                    <input required id="phone" placeholder=" " value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <label htmlFor="phone">Phone *</label>
                  </div>
                </div>
                <div className="field mt-2">
                  <input id="city" placeholder=" " value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                  <label htmlFor="city">City / Country</label>
                </div>
                <div className="field mt-2">
                  <textarea required id="msg" rows={4} placeholder=" " value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <label htmlFor="msg">Your requirement *</label>
                </div>
                <button className="mt-7 w-full rounded-full bg-[var(--gold)] py-4 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02]">
                  Send enquiry
                </button>
                <a
                  href={`https://wa.me/919848000000?text=${encodeURIComponent(`Hi Aswad Granites, I'm ${form.name || "(name)"} (${form.phone || "(phone)"}). ${form.message || "Please share your price list."}`)}`}
                  target="_blank" rel="noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle size={18} /> WhatsApp us instead
                </a>
              </form>
            )}
          </div>
        </FadeUp>
        <div className="space-y-4">
          {[
            { icon: Phone, t: "Sales Desk", d: "+91 98480 00000 · 9am–7pm IST" },
            { icon: Mail, t: "Email", d: "sales@aswadgranites.com" },
            { icon: MapPin, t: "Factory & Showroom", d: "Survey No. 234, Chimakurthy Road, Ongole, AP 523001" },
          ].map((c) => (
            <FadeUp key={c.t}>
              <div className="flex gap-4 rounded-2xl border border-line bg-raised p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-gilt"><c.icon size={22} /></span>
                <div><div className="font-bold">{c.t}</div><div className="text-sm text-muted">{c.d}</div></div>
              </div>
            </FadeUp>
          ))}
          <FadeUp>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Aswad Granites location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.95%2C15.45%2C80.15%2C15.56&layer=mapnik&marker=15.5057%2C80.0499"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
