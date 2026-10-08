import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sunken">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-12 pb-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-10 w-10 overflow-hidden rounded-xl">
                <Image src="/logo.jpg" alt="ASWAD Granite Industries" width={40} height={40} className="h-full w-full object-cover" />
              </span>
              <span className="text-xl font-extrabold text-ink">
                ASWAD <span className="text-gilt">GRANITES</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Premium granite quarrying, processing and worldwide export since
              1998. 40+ colors, 12 quarries, 1 promise — lasting stone.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-[var(--gold)] hover:text-gilt"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gilt">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href="/about" className="u-link hover:text-ink">About Us</Link></li>
              <li><Link href="/products" className="u-link hover:text-ink">Products</Link></li>
              <li><Link href="/gallery" className="u-link hover:text-ink">Gallery</Link></li>
              <li><Link href="/contact" className="u-link hover:text-ink">Get Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gilt">Products</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Granite Slabs</li>
              <li>Floor Tiles &amp; Cut-to-Size</li>
              <li>Kitchen Countertops</li>
              <li>Monuments &amp; Landscaping</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gilt">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-3"><Phone size={16} className="shrink-0 text-gilt" /> +91 98480 00000</li>
              <li className="flex gap-3"><Mail size={16} className="shrink-0 text-gilt" /> sales@aswadgranites.com</li>
              <li className="flex gap-3"><MapPin size={16} className="shrink-0 text-gilt" /> Ongole, Andhra Pradesh, India</li>
            </ul>
          </div>
        </div>
        {/* giant wordmark */}
        <div className="overflow-hidden border-t border-line py-8">
          <div className="gold-text text-center font-display text-[18vw] font-semibold leading-none tracking-tight md:text-[13rem]">
            ASWAD
          </div>
        </div>
        <div className="border-t border-line py-6 text-center text-xs text-faint">
          © {new Date().getFullYear()} Aswad Granite Industries, Ongole — Premium Natural Stone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
