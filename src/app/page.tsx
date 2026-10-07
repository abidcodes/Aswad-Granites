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
} from "lucide-react";

export default function Home() {
  return (
    <div className="pt-[68px]">
      {/* HERO */}
      <section className="hero-texture relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af6a]">
              Since 1998 • 28 Years of Stone Excellence
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              World-Class Granite,
              <span className="block text-[#d4af6a]">Quarried in India.</span>
              Trusted Worldwide.
            </h1>
            <p className="mt-5 max-w-xl text-stone-300">
              Aswad Granites owns 12 quarries and a 100,000 sq.ft processing
              plant. We supply polished slabs, tiles, countertops and monuments
              to 30+ countries — with export-grade packing and on-time delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-7 py-3 font-bold text-black hover:bg-[#e0be5a]"
              >
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-7 py-3 font-bold text-white hover:border-[#c9a227] hover:text-[#d4af6a]"
              >
                Request Price List
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                ["40+", "Stone Colors"],
                ["30+", "Export Countries"],
                ["2M+", "Sq.ft / Year"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold text-[#d4af6a]">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-stone-400">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/granites/absolute-black.jpg"
                alt="Black granite slab"
                width={800}
                height={900}
                className="h-[520px] w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-stone-900/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                  <ShieldCheck />
                </span>
                <div>
                  <div className="font-bold text-sm">Export Quality Assured</div>
                  <div className="text-xs text-stone-400">SGS & CE Certified Plant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
          <span className="flex items-center gap-2"><Award size={16} className="text-[#d4af6a]"/> ISO 9001:2015</span>
          <span className="flex items-center gap-2"><Container size={16} className="text-[#d4af6a]"/> 1200+ Containers / Year</span>
          <span className="flex items-center gap-2"><Factory size={16} className="text-[#d4af6a]"/> Italian Breton Lines</span>
          <span className="flex items-center gap-2"><Truck size={16} className="text-[#d4af6a]"/> Pan-India Logistics</span>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">Best Sellers</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Signature Products</h2>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[#d4af6a] hover:underline">
            View all <ArrowRight size={16}/>
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <Link key={p.id} href="/products" className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-stone-900">
              <div className="relative h-56 overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition duration-500" />
                {p.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#c9a227] px-3 py-1 text-[11px] font-extrabold uppercase text-black">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="text-[11px] uppercase tracking-widest text-stone-500">{p.category} • {p.origin}</div>
                <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-stone-400">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-extrabold text-[#d4af6a]">₹{p.pricePerSqft}/sq.ft</span>
                  <span className="text-xs text-stone-500">{p.finish.join(" / ")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-stone-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">What We Do</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Mine to Mansion — End to End</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              { icon: Mountain, t: "Quarrying", d: "12 captive quarries in AP, Telangana & Karnataka with 50-year reserves." },
              { icon: Factory, t: "Processing", d: "Gangsaws, Breton polishers, resin lines. 10,000 slabs in stock." },
              { icon: Gem, t: "Custom Fabrication", d: "Countertops, vanities, cut-to-size, flamed pavers, CNC carving." },
              { icon: Container, t: "Export & Logistics", d: "Fumigated wooden bundles, CIF quotes, documentation handled." },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-stone-950 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a227]/15 text-[#d4af6a]">
                  <s.icon size={24} />
                </span>
                <h3 className="mt-4 font-bold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-stone-400">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">Instant Estimate</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Calculate Your Project Cost</h2>
            <p className="mt-4 text-stone-400">
              Try our demo estimator — pick a stone, enter area, choose finish
              and thickness. Get an instant indicative price before talking to
              sales. Final export/domestic quote includes packing, transport and taxes.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-300">
              <li>✓ Live pricing from our collection</li>
              <li>✓ Finish & thickness multipliers</li>
              <li>✓ Free site measurement in AP & Telangana</li>
            </ul>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="hero-texture rounded-3xl border border-[#c9a227]/30 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Need 5000 sq.ft for a commercial project?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-300">
            Get factory rates, free samples and a dedicated export manager. Reply within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[#c9a227] px-8 py-3 font-bold text-black hover:bg-[#e0be5a]">
              Get Bulk Quote
            </Link>
            <Link href="/about" className="rounded-full border border-white/20 px-8 py-3 font-bold hover:border-[#c9a227]">
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
