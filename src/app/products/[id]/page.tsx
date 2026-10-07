import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ArrowLeft, Check, MapPin, Ruler } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-stone-400 hover:text-[#d4af6a] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={600}
              className="h-[400px] w-full object-cover lg:h-[500px]"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af6a]">
              {product.category} Granite • {product.origin}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-lg text-stone-300">{product.description}</p>
            <p className="mt-6 text-4xl font-extrabold text-[#d4af6a]">
              ₹{product.pricePerSqft}
              <span className="text-lg font-medium text-stone-400"> / sq.ft</span>
            </p>
            <p className="text-xs text-stone-500">
              Indicative factory rate. Final quote depends on size, finish & quantity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.finish.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-1.5 text-sm font-bold text-[#d4af6a]"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-stone-900 p-5">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Ruler size={18} className="text-[#d4af6a]" /> Available Sizes
                </div>
                <ul className="mt-3 space-y-2 text-sm text-stone-400">
                  {product.sizes.map((s) => (
                    <li key={s} className="flex gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-green-400" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-stone-900 p-5">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <MapPin size={18} className="text-[#d4af6a]" /> Best For
                </div>
                <ul className="mt-3 space-y-2 text-sm text-stone-400">
                  {product.applications.map((a) => (
                    <li key={a} className="flex gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-green-400" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-8 py-3.5 font-bold text-black shadow-lg shadow-[#c9a227]/20 hover:scale-105 transition-transform"
              >
                Enquire for {product.name}
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-white/20 px-8 py-3.5 font-bold hover:border-[#c9a227] transition-colors"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold">More {product.category} Granites</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/products/${r.id}`}
                  className="card-hover overflow-hidden rounded-2xl border border-white/10 bg-stone-900"
                >
                  <div className="relative h-48">
                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="font-bold">{r.name}</div>
                    <div className="mt-1 text-sm font-bold text-[#d4af6a]">₹{r.pricePerSqft}/sq.ft</div>
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
