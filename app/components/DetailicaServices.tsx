"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../data/services";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: 0.12 + index * 0.08,
        ease: "easeOut",
      }}
      className="relative flex min-h-136 flex-col rounded-4xl border border-black/10 bg-white/95 p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 backdrop-blur"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {service.eyebrow}
      </p>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-gray-950">
        {service.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-gray-500">
        {service.shortDescription}
      </p>

      <div className="mt-7 h-px w-full bg-accent" />

      <ul className="mt-8 space-y-4">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-6 text-gray-600"
          >
            <span className="mt-0.5 text-lg leading-none text-accent">+</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <Link
          href={service.href}
          className="inline-flex h-11 w-full items-center justify-center border border-gray-950 bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-black/70"
        >
          Read more
        </Link>
      </div>
    </motion.article>
  );
}

export default function DetailicaServices() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Core Services
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 text-balance sm:text-5xl">
            Documentation and BIM support for project delivery
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
            We support architecture and engineering teams with clear
            documentation, coordinated BIM workflows and reliable technical
            project delivery.
          </p>
        </motion.div>

        <div className="relative mt-20 py-12 sm:mt-32 sm:py-16">
          <div className="absolute inset-x-2 top-32 bottom-0 -mx-8 max-w-7xl rounded-4xl bg-[#dddddd] bg-[url('/2323.jpg')] bg-cover bg-center bg-no-repeat ring-1 ring-inset ring-black/5" />

          <div className="relative -mt-32 mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
