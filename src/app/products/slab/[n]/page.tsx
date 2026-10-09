import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { amitSlabs } from "@/data/amit";

export function generateStaticParams() {
  return amitSlabs.map((s) => ({ n: s.name.split(" ").pop()! }));
}

export default async function SlabPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const idx = amitSlabs.findIndex((s) => s.name.split(" ").pop() === n);
  if (idx === -1) notFound();
  const slab = amitSlabs[idx];
  const prev = amitSlabs[(idx - 1 + amitSlabs.length) % amitSlabs.length];
  const next = amitSlabs[(idx + 1) % amitSlabs.length];

  const waText = encodeURIComponent(
    `Hi Aswad Granites, I am interested in ${slab.name} (premium natural stone slab). Please share price and availability.`
  );

  return (
    <div className="bg-base pt-20">
      <section className="mx-auto max-w-[1560px] px-5 pt-10 sm:px-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gilt">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2 text-faint">/</span>
          <Link href="/products" className="hover:underline">Slabs</Link>
          <span className="mx-2 text-faint">/</span>
          <span className="text-ink">{slab.name}</span>
        </p>
      </section>

      <section className="mx-auto grid max-w-[1560px] gap-10 px-5 py-10 sm:px-10 lg:grid-cols-2 lg:py-14">
        <div className="group relative overflow-hidden border border-line bg-white">
          <img
            src={slab.src}
            alt={slab.alt}
            className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>

        <div>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[0.95]">
            {slab.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="italic text-gilt">{slab.name.split(" ").slice(2).join(" ") || "Natural Stone"}</span>
          </h1>

          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Type</p>
              <p className="mt-2 text-lg font-extrabold text-ink">Natural Stone</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Thickness</p>
              <p className="mt-2 text-lg font-extrabold text-ink">18MM</p>
            </div>
            <div className="col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Usage</p>
              <p className="mt-2 text-lg font-extrabold text-ink">Exteriors | Interiors | Bathroom | Kitchen</p>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/919686572109?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={17} /> Enquire Now
            </a>
            <a
              href="tel:+919686572109"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-ink px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Phone size={16} /> +91 96865 72109
            </a>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
            <Link
              href={`/products/slab/${prev.name.split(" ").pop()}`}
              className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-muted hover:text-ink"
            >
              <ArrowLeft size={15} /> {prev.name}
            </Link>
            <Link
              href={`/products/slab/${next.name.split(" ").pop()}`}
              className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-muted hover:text-ink"
            >
              {next.name} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
