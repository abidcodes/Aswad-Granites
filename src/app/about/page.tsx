import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-[68px]">
      <div className="hero-texture border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6d1f]">Since 1998</p>
          <h1 className="mt-2 text-4xl font-extrabold">About Aswad Granites</h1>
          <p className="mt-3 max-w-3xl text-stone-600">
            From a single quarry in Ongole to 12 quarries and exports to 30+ countries —
            we control every step so you get consistent color, precise sizing and honest pricing.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Our Infrastructure</h2>
          <ul className="mt-4 space-y-4 text-sm text-stone-600">
            <li><b className="text-stone-900">12 captive quarries:</b> Absolute Black, Black Galaxy, Tan Brown, Paradiso & more — 50-year reserves.</li>
            <li><b className="text-stone-900">100,000 sq.ft plant:</b> 4 gangsaws, 2 Breton auto-polish lines, resin + epoxy treatment, CNC bridge cutters.</li>
            <li><b className="text-stone-900">10,000 slabs ready stock:</b> 2cm & 3cm, plus tiles 60x60, 60x30 and cut-to-size.</li>
            <li><b className="text-stone-900">Export team:</b> In-house CHA, fumigation, marine insurance, CIF/FOB quotes in 24 hrs.</li>
          </ul>
          <h2 className="mt-8 text-2xl font-bold">Why Builders Choose Us</h2>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[["28+", "Years"], ["850+", "Team"], ["98%", "On-time"]].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="text-2xl font-extrabold text-[#8a6d1f]">{n}</div>
                <div className="text-xs uppercase tracking-wider text-stone-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            <Image src="/granites/black-galaxy.jpg" alt="Black Galaxy slab in our factory" width={800} height={500} className="h-64 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-stone-200">
            <Image src="/granites/tropic-brown.jpg" alt="Brown granite kitchen countertop installed" width={800} height={500} className="h-64 w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
