"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 220 && !open);
  });

  return (
    <>
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[120] h-[2px] origin-left bg-[var(--gold)]"
        style={{ scaleX: progress }}
      />
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[110] border-b border-line bg-base/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="block h-11 w-11 overflow-hidden rounded-xl shadow-md">
              <Image src="/logo.jpg" alt="ASWAD Granite Industries" width={44} height={44} className="h-full w-full object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-extrabold tracking-wide text-ink">
                ASWAD <span className="text-gilt">GRANITES</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-muted">
                Premium Natural Stone
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="u-link text-sm font-medium text-muted hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-gilt hover:border-[var(--gold)] transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1 rounded-full bg-[var(--gold)] px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              Get Quote
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2 text-ink">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[130] flex flex-col bg-sunken"
          >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
              <span className="text-xl font-extrabold tracking-wide text-ink">
                ASWAD <span className="text-gilt">GRANITES</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-ink">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
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
                    className="font-display text-5xl font-medium text-ink hover:text-gilt transition-colors sm:text-6xl"
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
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 font-bold text-black"
                >
                  Get Quote <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
