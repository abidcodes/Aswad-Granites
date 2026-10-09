import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ArrowLeft, Check, MapPin, Ruler, MessageCircle } from "lucide-react";
import { SectionLabel, FadeUp } from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const wa = `https://wa.me/919848000000?text=${encodeURIComponent(`Hi Aswad Granites, please send me a sample of ${product.name} (${product.category}).`)}`;

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Link href="/products" className="u-link inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
          <ArrowLeft size={16} /> All stones
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <div className="overflow-hidden rounded-3xl border border-line">
              <img src={product.image} alt={product.name} className="h-[420px] w-full object-cover lg:h-[540px]" data-cursor="VIEW" />
            </div>
          </FadeUp>
          <div>
            <SectionLabel>{product.category} Granite · {product.origin}</SectionLabel>
            <h1 className="mt-3 font-display text-5xl font-medium sm:text-7xl">{product.name}</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{product.description}</p>
            <p className="mt-6 font-display text-5xl font-semibold text-gilt">
              ₹{product.pricePerSqft}<span className="text-lg text-faint"> / sq.ft</span>
            </p>
            <p className="mt-1 text-xs text-faint">Indicative factory rate · final quote on size, finish & quantity.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.finish.map((f) => (
                <span key={f} className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-sm font-bold text-gilt">{f}</span>
              ))}
            </div>
            {/* specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              {[
                ["Origin", product.origin],
                ["Category", `${product.category} granite`],
                ["Finishes", product.finish.join(", ")],
                ["Thickness", "15mm · 20mm · 30mm"],
                ["Density", "2.65 to 2.75 g/cm³"],
                ["Water absorption", "< 0.4%"],
              ].map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 ? "bg-sunken" : ""}`}>
                  <span className="font-bold text-faint uppercase tracking-wider text-xs pt-0.5">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-raised p-5">
                <div className="flex items-center gap-2 text-sm font-bold"><Ruler size={17} className="text-gilt" /> Sizes</div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {product.sizes.map((s) => <li key={s} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-green-600" /> {s}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-raised p-5">
                <div className="flex items-center gap-2 text-sm font-bold"><MapPin size={17} className="text-gilt" /> Uses</div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {product.applications.map((a) => <li key={a} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-green-600" /> {a}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-105">
                <MessageCircle size={17} /> Request Sample
              </a>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-line px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-[var(--gold)] transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-4xl font-medium">Similar <span className="gold-text italic">stones</span></h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} href={`/products/${r.id}`} data-cursor="VIEW" className="group overflow-hidden rounded-2xl border border-line bg-raised transition-all hover:-translate-y-1.5">
                  <div className="relative h-52 overflow-hidden">
                    <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108" />
                  </div>
                  <div className="p-4">
                    <div className="font-display text-xl font-medium">{r.name}</div>
                    <div className="mt-1 text-sm font-bold text-gilt">₹{r.pricePerSqft}/sq.ft</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
