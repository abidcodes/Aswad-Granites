"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { n: "40+", l: "Stone colours live in the yard" },
  { n: "25+", l: "Years serving Pune" },
  { n: "4.2★", l: "Google rating, Kondhwa Budruk" },
];

export default function EditorialAbout() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-[1560px] px-5 py-24 sm:px-10 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease }}
          className="lg:col-span-5"
        >
          <img
            src="/gallery/Granite_showroom_with_stone_slabs_20261007200955.jpg"
            alt="Stone slabs on display in the Aswad yard"
            loading="lazy"
            className="h-[55vh] w-full object-cover lg:h-[72vh]"
          />
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-faint">
            The yard · Kondhwa Budruk, Pune
          </p>
        </motion.div>
        <div className="lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-faint">04 · The Yard</p>
            <h2 className="mt-6 font-display text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.85]">
              25+
              <br />
              YEARS
              <br />
              <span className="italic text-gilt">OF STONE</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted">
              Since 1998, Aswad Granites has been Pune&apos;s address for premium
              natural stone. Walk the yard, compare full slabs side by side, and
              have your kitchen, flooring or cladding cut to exact measure,
              then fitted by our own teams.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: reduce ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease }}
                className="border-t border-ink pt-4"
              >
                <div className="font-display text-4xl font-semibold sm:text-5xl">{s.n}</div>
                <div className="mt-2 text-[11px] font-bold uppercase leading-relaxed tracking-[0.18em] text-muted">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t border-line pt-6"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-faint">Call the yard</p>
              <a href="tel:+919686572109" className="mt-2 block font-display text-[1.7rem] font-semibold leading-none tracking-wide text-ink transition-colors hover:text-gilt">+91 96865 72109</a>
            </div>
            <a
              href="https://maps.app.goo.gl/VbS7wQPESCYe2hWV8"
              target="_blank"
              rel="noreferrer"
              className="pb-1 text-[12px] font-bold uppercase tracking-[0.2em] text-gilt"
            >
              Get Directions →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
