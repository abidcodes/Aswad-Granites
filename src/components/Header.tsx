"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-[#f7f6f2]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1560px] items-center justify-between px-5 sm:px-10">
          <Link href="/" aria-label="Aswad Granites — home">
            <Image src="/logo-black.png" alt="ASWAD Granites" width={360} height={180} priority className="h-12 w-auto" />
          </Link>
          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="u-link text-[12px] font-bold uppercase tracking-[0.22em] text-muted hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-[var(--gold)] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[var(--gold-deep)]"
            >
              Get Quote
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2 text-ink lg:hidden">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[130] flex flex-col bg-[#f7f6f2]"
          >
            <div className="mx-auto flex h-20 w-full max-w-[1560px] items-center justify-between px-5 sm:px-10">
              <Image src="/logo.png" alt="ASWAD Granites" width={360} height={180} className="h-12 w-auto" />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-ink">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl font-medium uppercase text-ink hover:text-gilt transition-colors sm:text-6xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[var(--gold)] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white"
                >
                  Get Quote <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
