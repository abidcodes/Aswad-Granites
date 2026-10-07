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
    <div className="pt-[68px]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-stone-500 hover:text-[#8a6d1f]"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={600}
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">
              {product.category} Granite • {product.origin}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold">{product.name}</h1>
            <p className="mt-3 text-stone-600">{product.description}</p>
            <p className="mt-4 text-3xl font-extrabold text-[#8a6d1f]">
              ₹{product.pricePerSqft}
              <span className="text-base font-medium text-stone-500"> / sq.ft</span>
            </p>
            <p className="text-xs text-stone-500">
              Indicative factory rate. Final quote depends on size, finish & quantity.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.finish.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-3 py-1 text-xs font-bold text-[#8a6d1f]"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Ruler size={16} className="text-[#8a6d1f]" /> Available Sizes
                </div>
                <ul className="mt-2 space-y-1 text-sm text-stone-500">
                  {product.sizes.map((s) => (
                    <li key={s} className="flex gap-2">
                      <Check size={15} className="mt-0.5 shrink-0 text-green-600" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <MapPin size={16} className="text-[#8a6d1f]" /> Best For
                </div>
                <ul className="mt-2 space-y-1 text-sm text-stone-500">
                  {product.applications.map((a) => (
                    <li key={a} className="flex gap-2">
                      <Check size={15} className="mt-0.5 shrink-0 text-green-600" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/contact`}
                className="rounded-full bg-[#c9a227] px-7 py-3 font-bold text-black hover:bg-[#e0be5a]"
              >
                Enquire for {product.name}
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-stone-300 px-7 py-3 font-bold hover:border-[#c9a227]"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold">
              More {product.category} Granites
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/products/${r.id}`}
                  className="card-hover overflow-hidden rounded-2xl border border-stone-200 bg-white"
                >
                  <div className="relative h-44">
                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="font-bold">{r.name}</div>
                    <div className="text-sm font-bold text-[#8a6d1f]">
                      ₹{r.pricePerSqft}/sq.ft
                    </div>
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
