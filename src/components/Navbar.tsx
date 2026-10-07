"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#c9a227]/20 bg-stone-950/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a227] to-[#d4af6a] text-black shadow-lg shadow-[#c9a227]/20 group-hover:shadow-[#c9a227]/40 transition-shadow">
            <Mountain size={24} strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-extrabold tracking-wide">
              ASWAD <span className="text-[#d4af6a]">GRANITES</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-stone-400">
              Premium Natural Stone
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-stone-300 hover:text-[#d4af6a] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#c9a227] after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-6 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#c9a227]/20 hover:shadow-[#c9a227]/40 hover:scale-105 transition-all"
          >
            Get Quote
          </Link>
        </nav>

        <button
          className="lg:hidden text-stone-200 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#c9a227]/10 bg-stone-950/98 backdrop-blur-xl px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-stone-200 hover:bg-white/5 hover:text-[#d4af6a] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4af6a] px-6 py-3 text-center text-sm font-bold text-black"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
