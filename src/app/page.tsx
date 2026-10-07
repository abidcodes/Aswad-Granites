import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import QuoteCalculator from "@/components/QuoteCalculator";
import {
  ArrowRight,
  Award,
  Container,
  Factory,
  Gem,
  Mountain,
  ShieldCheck,
  Truck,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* HERO — Full screen with dramatic slab image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/Black_granite_slab_on_display_20261007200955.jpg"
            alt="Premium black granite slab"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a] backdrop-blur-sm">
            Since 1998 • 28 Years of Excellence
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-7xl lg:text-8xl">
            Stone That
            <span className="block gold-gradient-text">Speaks Luxury</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-300 sm:text-xl">
            From our quarries to your masterpiece — world-class granite,
            precision-cut and exported to 30+ countries.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-8 py-4 font-bold text-black shadow-2xl shadow-[#c9a227]/30 hover:shadow-[#c9a227]/50 hover:scale-105 transition-all"
            >
              Explore Collections <ArrowRight size={20} />
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white backdrop-blur-sm hover:border-[#c9a227] hover:text-[#d4af6a] transition-all"
            >
              View Gallery
            </Link>
          </div>
          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["40+", "Stone Colors"],
              ["30+", "Countries"],
              ["2M+", "Sq.ft / Year"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-extrabold text-[#d4af6a]">{n}</div>
                <div className="text-xs uppercase tracking-wider text-stone-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <a href="#featured" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 animate-bounce">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[#c9a227]/10 bg-stone-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
          <span className="flex items-center gap-2"><Award size={16} className="text-[#d4af6a]" /> ISO 9001:2015</span>
          <span className="flex items-center gap-2"><Container size={16} className="text-[#d4af6a]" /> 1200+ Containers / Year</span>
          <span className="flex items-center gap-2"><Factory size={16} className="text-[#d4af6a]" /> Italian Breton Lines</span>
          <span className="flex items-center gap-2"><Truck size={16} className="text-[#d4af6a]" /> Pan-India Logistics</span>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">Best Sellers</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">Signature Collections</h2>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[#d4af6a] hover:underline">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <Link key={p.id} href="/products" className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-stone-900">
              <div className="relative h-64 overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition duration-700" />
                {p.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-3 py-1 text-[11px] font-extrabold uppercase text-black shadow-lg">
                    Popular
                  </span>
                )}
                <div className="absolute inset-0 img-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-stone-500">{p.category} • {p.origin}</div>
                <h3 className="mt-1 text-lg font-bold group-hover:text-[#d4af6a] transition-colors">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-stone-400">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[#d4af6a]">₹{p.pricePerSqft}/sq.ft</span>
                  <span className="text-xs text-stone-500">{p.finish.join(" / ")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PARALLAX SHOWROOM BANNER */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="parallax-bg absolute inset-0"
          style={{ backgroundImage: "url(/gallery/Granite_showroom_illuminated_at_._20261007200955.jpg)" }}
        />
        <div className="absolute inset-0 bg-stone-950/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-5xl">Visit Our Showroom</h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-300">
              10,000+ slabs in stock. See the stone in person before you buy.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-8 py-3 font-bold text-black shadow-xl hover:scale-105 transition-transform"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">What We Do</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">Mine to Mansion — End to End</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { icon: Mountain, t: "Quarrying", d: "12 captive quarries in AP, Telangana & Karnataka with 50-year reserves." },
            { icon: Factory, t: "Processing", d: "Gangsaws, Breton polishers, resin lines. 10,000 slabs in stock." },
            { icon: Gem, t: "Custom Fabrication", d: "Countertops, vanities, cut-to-size, flamed pavers, CNC carving." },
            { icon: Container, t: "Export & Logistics", d: "Fumigated wooden bundles, CIF quotes, documentation handled." },
          ].map((s) => (
            <div key={s.t} className="card-hover rounded-2xl border border-white/10 bg-stone-900 p-6 hover:border-[#c9a227]/30">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 text-[#d4af6a]">
                <s.icon size={28} />
              </span>
              <h3 className="mt-5 font-bold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE CALCULATOR */}
      <section className="border-y border-[#c9a227]/10 bg-stone-900/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">Instant Estimate</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">Calculate Your Project Cost</h2>
              <p className="mt-5 text-stone-400">
                Pick a stone, enter area, choose finish and thickness. Get an
                indicative price instantly.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-stone-300">
                <li className="flex gap-3"><ShieldCheck size={18} className="text-[#d4af6a] shrink-0" /> Live pricing from our collection</li>
                <li className="flex gap-3"><ShieldCheck size={18} className="text-[#d4af6a] shrink-0" /> Finish & thickness multipliers</li>
                <li className="flex gap-3"><ShieldCheck size={18} className="text-[#d4af6a] shrink-0" /> Free site measurement in AP & Telangana</li>
              </ul>
            </div>
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#c9a227]/20">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url(/gallery/Modern_luxury_kitchen_with_granite_20261007200955.jpg)" }}
          />
          <div className="absolute inset-0 bg-stone-950/80" />
          <div className="relative z-10 px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-extrabold sm:text-5xl">Ready to Build Something Timeless?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-300">
              Get factory rates, free samples and a dedicated export manager. Reply within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-10 py-4 font-bold text-black shadow-2xl shadow-[#c9a227]/30 hover:scale-105 transition-transform">
                Get Bulk Quote
              </Link>
              <Link href="/about" className="rounded-full border border-white/20 px-10 py-4 font-bold hover:border-[#c9a227] transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
