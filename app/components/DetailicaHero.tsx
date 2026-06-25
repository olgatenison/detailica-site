"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function HeroButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex h-11 items-center justify-center border px-5 text-sm font-medium transition";

  const styles = {
    primary: "border-gray-950 bg-gray-950 text-white hover:bg-black/70 ",
    secondary:
      " bg-gray-300/60 border-gray-200 text-gray-950 hover:border-gray-950 ",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

export function DetailicaHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* <div className="absolute inset-2 bottom-0 rounded-4xl bg-[url('/23.jpg')] bg-contain bg-right ring-1 ring-black/5 ring-inset bg-no-repeat max-w-7xl mx-auto bg-[#dddddd]" /> */}
      <div className="absolute inset-2 bottom-0 max-w-7xl mx-auto rounded-4xl bg-[#dddddd] bg-[url('/23.jpg')] bg-contain bg-right bg-no-repeat ring-1 ring-black/5 ring-inset" />

      <div className="pointer-events-none absolute inset-2 bottom-0 max-w-7xl mx-auto rounded-4xl bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.62)_28%,rgba(255,255,255,0.25)_48%,rgba(255,255,255,0)_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-950/60">
              Detailica
            </p>

            <h1 className="mt-5 max-w-5xl text-xl font-semibold text-gray-950 sm:text-5xl  text-balance">
              Supporting Architecture and Engineering Teams Across International
              Projects
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg font-light text-balance text-gray-500">
              DETAILICA acts as an integrated project partner, supporting
              architecture and engineering teams with documentation, modelling
              and technical project development across international markets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <HeroButton href="/services">Explore services</HeroButton>

              <HeroButton href="/contact" variant="secondary">
                Let’s collaborate
              </HeroButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
