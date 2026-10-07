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
            <span className="inline-block rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#8a6d1f]">
              Since 1998 • 28 Years of Stone Excellence
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              World-Class Granite,
              <span className="block text-[#8a6d1f]">Quarried in India.</span>
              Trusted Worldwide.
            </h1>
            <p className="mt-5 max-w-xl text-stone-600">
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
                className="rounded-full border border-stone-300 px-7 py-3 font-bold text-stone-900 hover:border-[#c9a227] hover:text-[#8a6d1f]"
              >
                Request Price List
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-stone-200 pt-6">
              {[
                ["40+", "Stone Colors"],
                ["30+", "Export Countries"],
                ["2M+", "Sq.ft / Year"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold text-[#8a6d1f]">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-stone-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
              <Image
                src="/granites/absolute-black.jpg"
                alt="Black granite slab"
                width={800}
                height={900}
                className="h-[520px] w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-stone-200 bg-white/95 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600/10 text-green-600">
                  <ShieldCheck />
                </span>
                <div>
                  <div className="font-bold text-sm">Export Quality Assured</div>
                  <div className="text-xs text-stone-500">SGS & CE Certified Plant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
          <span className="flex items-center gap-2"><Award size={16} className="text-[#8a6d1f]"/> ISO 9001:2015</span>
          <span className="flex items-center gap-2"><Container size={16} className="text-[#8a6d1f]"/> 1200+ Containers / Year</span>
          <span className="flex items-center gap-2"><Factory size={16} className="text-[#8a6d1f]"/> Italian Breton Lines</span>
          <span className="flex items-center gap-2"><Truck size={16} className="text-[#8a6d1f]"/> Pan-India Logistics</span>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Best Sellers</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Signature Products</h2>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[#8a6d1f] hover:underline">
            View all <ArrowRight size={16}/>
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <Link key={p.id} href="/products" className="card-hover group overflow-hidden rounded-2xl border border-stone-200 bg-white">
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
                <p className="mt-1 line-clamp-2 text-sm text-stone-500">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-extrabold text-[#8a6d1f]">₹{p.pricePerSqft}/sq.ft</span>
                  <span className="text-xs text-stone-500">{p.finish.join(" / ")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">What We Do</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Mine to Mansion — End to End</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              { icon: Mountain, t: "Quarrying", d: "12 captive quarries in AP, Telangana & Karnataka with 50-year reserves." },
              { icon: Factory, t: "Processing", d: "Gangsaws, Breton polishers, resin lines. 10,000 slabs in stock." },
              { icon: Gem, t: "Custom Fabrication", d: "Countertops, vanities, cut-to-size, flamed pavers, CNC carving." },
              { icon: Container, t: "Export & Logistics", d: "Fumigated wooden bundles, CIF quotes, documentation handled." },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a227]/15 text-[#8a6d1f]">
                  <s.icon size={24} />
                </span>
                <h3 className="mt-4 font-bold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-stone-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Instant Estimate</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Calculate Your Project Cost</h2>
            <p className="mt-4 text-stone-500">
              Try our demo estimator — pick a stone, enter area, choose finish
              and thickness. Get an instant indicative price before talking to
              sales. Final export/domestic quote includes packing, transport and taxes.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-600">
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
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Get factory rates, free samples and a dedicated export manager. Reply within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[#c9a227] px-8 py-3 font-bold text-black hover:bg-[#e0be5a]">
              Get Bulk Quote
            </Link>
            <Link href="/about" className="rounded-full border border-stone-300 px-8 py-3 font-bold hover:border-[#c9a227]">
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
