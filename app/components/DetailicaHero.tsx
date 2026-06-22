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
    primary: "border-gray-950 bg-gray-950 text-white hover:bg-gray-800",
    secondary: "border-gray-300 text-gray-950 hover:border-gray-950",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

export function DetailicaHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-2 bottom-0 rounded-4xl bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#f7f2ea] from-[28%] via-[#e7edf0] via-[70%] to-[#d8e2e6] ring-1 ring-black/5 ring-inset" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 sm:pt-28 sm:pb-32 md:pt-36 md:pb-48">
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

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Integrated BIM support for complex project delivery.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              DETAILICA supports AEC teams with architectural documentation,
              structural BIM, coordination, and technical project delivery —
              from single tasks to full project lifecycle support.
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
// "use client";

// import Link from "next/link";

// function HeroButton({
//   href,
//   children,
//   variant = "primary",
// }: {
//   href: string;
//   children: React.ReactNode;
//   variant?: "primary" | "secondary";
// }) {
//   const base =
//     "inline-flex items-center justify-center rounded-full px-4 py-[calc(var(--spacing)*2-1px)] text-base font-medium whitespace-nowrap shadow-md transition";

//   const styles = {
//     primary:
//       "border border-transparent bg-gray-950 text-white hover:bg-gray-800",
//     secondary:
//       "relative border border-transparent bg-white/15 text-gray-950 ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] hover:bg-white/20",
//   };

//   return (
//     <Link href={href} className={`${base} ${styles[variant]}`}>
//       {children}
//     </Link>
//   );
// }

// export function DetailicaHero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="absolute inset-2 bottom-0 rounded-4xl bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#f7f2ea] from-28% via-[#e7edf0] via-70% to-[#d8e2e6] ring-1 ring-black/5 ring-inset" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="pt-20 pb-24 sm:pt-28 sm:pb-32 md:pt-36 md:pb-48">
//           <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-gray-950/60">
//             BIM Support · Architecture · Structural Documentation
//           </p>

//           <h1 className="font-display max-w-5xl text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-7xl/[0.8] ">
//             Integrated BIM support for complex project delivery.
//           </h1>

//           <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
//             DETAILICA supports AEC teams with architectural documentation,
//             structural BIM, coordination, and technical project delivery — from
//             single tasks to full project lifecycle support.
//           </p>

//           <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
//             <HeroButton href="/services">Explore services</HeroButton>

//             <HeroButton href="/contact" variant="secondary">
//               Let’s collaborate
//             </HeroButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
