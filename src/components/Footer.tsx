import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#c9a227]/10 bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl shadow-md">
              <Image
                src="/logo.jpg"
                alt="ASWAD Granite Industries"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-extrabold text-stone-900">
              ASWAD <span className="text-[#8a6d1f]">GRANITES</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-stone-500">
            Premium granite quarrying, processing and worldwide export since
            1998. 40+ colors, 12 quarries, 1 promise — lasting stone.
          </p>
          <div className="mt-6 flex gap-3">
            {["Facebook", "Instagram", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a227]/20 text-stone-500 hover:border-[#c9a227] hover:text-[#8a6d1f] transition-colors text-xs font-bold"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#8a6d1f]">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-stone-500">
            <li><Link href="/about" className="hover:text-[#8a6d1f] transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-[#8a6d1f] transition-colors">Products</Link></li>
            <li><Link href="/gallery" className="hover:text-[#8a6d1f] transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[#8a6d1f] transition-colors">Get Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#8a6d1f]">Products</h4>
          <ul className="mt-4 space-y-3 text-sm text-stone-500">
            <li>Granite Slabs</li>
            <li>Floor Tiles & Cut-to-Size</li>
            <li>Kitchen Countertops</li>
            <li>Monuments & Landscaping</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#8a6d1f]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-stone-500">
            <li className="flex gap-3"><Phone size={16} className="text-[#8a6d1f] shrink-0" /> +91 98480 00000</li>
            <li className="flex gap-3"><Mail size={16} className="text-[#8a6d1f] shrink-0" /> sales@aswadgranites.com</li>
            <li className="flex gap-3"><MapPin size={16} className="text-[#8a6d1f] shrink-0" /> Ongole, Andhra Pradesh, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200 py-6 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Aswad Granites — Premium Natural Stone. All rights reserved.
      </div>
    </footer>
  );
}
