"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c9a227] text-black">
            <Mountain size={22} strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide">
              ASWAD <span className="text-[#8a6d1f]">GRANITES</span>
            </span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-stone-500">
              Quarry • Process • Export
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-[#8a6d1f]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#c9a227] px-5 py-2 text-sm font-bold text-black hover:bg-[#d4af6a]"
          >
            Get Quote
          </Link>
        </nav>

        <button
          className="md:hidden text-stone-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-stone-200 bg-stone-50 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-stone-700 hover:bg-stone-100"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#c9a227] px-5 py-2 text-center text-sm font-bold text-black"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
