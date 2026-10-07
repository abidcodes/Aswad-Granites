import Link from "next/link";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c9a227] text-black">
              <Mountain size={20} />
            </span>
            <span className="text-lg font-extrabold">
              ASWAD <span className="text-[#d4af6a]">GRANITES</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-stone-400">
            Premium granite quarrying, processing and worldwide export since
            1998. 40+ colors, 12 quarries, 1 promise — lasting stone.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-stone-300">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><Link href="/about" className="hover:text-[#d4af6a]">About Us</Link></li>
            <li><Link href="/products" className="hover:text-[#d4af6a]">Products</Link></li>
            <li><Link href="/contact" className="hover:text-[#d4af6a]">Get Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-stone-300">Products</h4>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li>Granite Slabs</li>
            <li>Floor Tiles & Cut-to-Size</li>
            <li>Kitchen Countertops</li>
            <li>Monuments & Landscaping</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-stone-300">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li className="flex gap-2"><Phone size={16}/> +91 98480 00000</li>
            <li className="flex gap-2"><Mail size={16}/> sales@aswadgranites.com</li>
            <li className="flex gap-2"><MapPin size={16}/> Ongole, Andhra Pradesh, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Aswad Granites — Demo website built with Next.js. All prices in INR / sq.ft indicative.
        <span className="block mt-1">Stone photography: Wikimedia Commons contributors (CC BY-SA), Pexels & Flickr contributors.</span>
      </div>
    </footer>
  );
}
