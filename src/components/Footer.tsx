import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto max-w-[1560px] px-5 pb-10 pt-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo-black.png" alt="ASWAD Granites" width={400} height={200} className="h-16 w-auto" />
            <p className="mt-6 max-w-sm font-display text-2xl font-medium italic leading-snug text-muted">
              Surfaces that define space. Since 1998.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm font-bold uppercase tracking-[0.14em] text-ink">
              <li><Link href="/products" className="u-link">Products</Link></li>
              <li><Link href="/gallery" className="u-link">Gallery</Link></li>
              <li><Link href="/about" className="u-link">About</Link></li>
              <li><Link href="/contact" className="u-link">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Visit</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gilt" /> Kondhwa Budruk, Pune</li>
              <li className="flex gap-3"><Phone size={16} className="shrink-0 text-gilt" /> <a href="tel:+919686572109" className="font-bold tracking-wide text-ink">+91 96865 72109</a></li>
              <li className="flex gap-3"><Mail size={16} className="shrink-0 text-gilt" /> sales@aswadgranites.com</li>
            </ul>
            <a
              href="https://maps.app.goo.gl/VbS7wQPESCYe2hWV8"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block border-b border-ink pb-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-ink"
            >
              Get Directions →
            </a>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-faint">Follow</h4>
            <div className="mt-5 flex gap-3">
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
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-faint">
              4.2 ★ Google Rating
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-[11px] uppercase tracking-[0.25em] text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Aswad Granites</span>
          <span>Granite & Marble Dealers, Pune</span>
        </div>
      </div>
    </footer>
  );
}
