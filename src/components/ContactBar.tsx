"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/919686572109?text=Hi%20Aswad%20Granites%2C%20I%27d%20like%20a%20quote.";

export default function ContactBar() {
  return (
    <>
      {/* floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-[100] flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-black/20 transition-transform hover:scale-110 md:bottom-6 md:right-6"
      >
        <MessageCircle size={24} />
      </a>
      {/* mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-[100] grid grid-cols-3 border-t border-line bg-base/95 backdrop-blur-xl md:hidden">
        <a href="tel:+919686572109" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold text-ink">
          <Phone size={18} className="text-gilt" /> Call
        </a>
        <a href={WA} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold text-ink">
          <MessageCircle size={18} className="text-gilt" /> WhatsApp
        </a>
        <Link href="/contact" className="flex items-center justify-center bg-[var(--gold)] text-[11px] font-bold text-white">
          Get Quote
        </Link>
      </div>
    </>
  );
}
