import Image from "next/image";
import { Mountain, Award, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/ASWAD_GRANITE_INDUSTRIES_exterior_20261007200955.jpg"
            alt="ASWAD Granite Industries"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 to-stone-950" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Since 1998</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-6xl">About Us</h1>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-stone-400">
            From a single quarry to 12 quarries and exports to 30+ countries.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Our Story</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              28 Years of Crafting Stone
            </h2>
            <p className="mt-5 text-stone-400 leading-relaxed">
              Aswad Granites began in 1998 with a single quarry in Ongole, Andhra Pradesh.
              Today, we own 12 captive quarries across South India and operate a
              100,000 sq.ft processing plant with Italian Breton machinery.
            </p>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Our stone has been exported to 30+ countries, adorning luxury homes,
              hotels, corporate offices, and monuments worldwide. We control every
              step — from quarry to container — ensuring consistent color, precise
              sizing, and honest pricing.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Mountain, n: "12", l: "Captive Quarries" },
                { icon: Award, n: "28+", l: "Years Experience" },
                { icon: Users, n: "850+", l: "Team Members" },
                { icon: Globe, n: "30+", l: "Export Countries" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-stone-200 bg-white p-4">
                  <s.icon size={24} className="text-[#8a6d1f]" />
                  <div className="mt-2 text-2xl font-extrabold">{s.n}</div>
                  <div className="text-xs text-stone-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-stone-200">
              <Image
                src="/gallery/Granite_factory_interior_with_ma_20261007200955.jpg"
                alt="Factory interior"
                width={800}
                height={500}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200">
              <Image
                src="/gallery/Team_standing_in_stone_showroom_20261007200955.jpg"
                alt="Our team"
                width={800}
                height={500}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="border-y border-[#c9a227]/10 bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Infrastructure</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">World-Class Facility</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                img: "/gallery/Machine_cutting_granite_block_20261007200955.jpg",
                t: "Cutting & Polishing",
                d: "4 gangsaws, 2 Breton auto-polish lines, resin + epoxy treatment, CNC bridge cutters.",
              },
              {
                img: "/gallery/Granite_slabs_stacked_and_organized_20261007200955.jpg",
                t: "Ready Stock",
                d: "10,000+ slabs in 2cm & 3cm, plus tiles 60x60, 60x30 and cut-to-size.",
              },
              {
                img: "/gallery/Granite_slabs_packed_for_transport_20261007200955.jpg",
                t: "Export Packing",
                d: "Fumigated wooden bundles, marine insurance, CIF/FOB quotes in 24 hours.",
              },
            ].map((item) => (
              <div key={item.t} className="card-hover overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                <div className="relative h-48">
                  <Image src={item.img} alt={item.t} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{item.t}</h3>
                  <p className="mt-2 text-sm text-stone-400">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-stone-200">
              <Image
                src="/gallery/Granite_showroom_illuminated_at__20261007200955.jpg"
                alt="Showroom at night"
                width={800}
                height={500}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Visit Us</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Experience Our Showroom</h2>
            <p className="mt-5 text-stone-400 leading-relaxed">
              Our state-of-the-art showroom in Ongole displays 10,000+ slabs in
              a stunning illuminated setting. Walk through aisles of premium granite,
              compare colors side by side, and choose the perfect stone for your project.
            </p>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Open Monday to Saturday, 9 AM to 7 PM. Free site measurement available
              in Andhra Pradesh and Telangana.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
