"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    eyebrow: "Architecture",
    title: "Architectural Documentation",
    description:
      "Transforming design intent into coordinated, buildable documentation.",
    href: "/services#architectural-documentation",
    features: [
      "Revit-based workflows",
      "DD / CD documentation",
      "Plans, sections and elevations",
      "Coordination support",
      "Existing drawing conversion",
      "BIM production assistance",
    ],
  },
  {
    eyebrow: "Structure",
    title: "Structural Design & Documentation",
    description:
      "Translating engineering solutions into clear construction information.",
    href: "/services#structural-documentation",
    features: [
      "Reinforced concrete documentation",
      "Steel structure drafting",
      "Precast coordination",
      "Structural detailing",
      "BIM integration",
      "Coordination-driven workflows",
    ],
  },
  {
    eyebrow: "Existing Conditions",
    title: "Existing Conditions & Scan-to-BIM",
    description:
      "Transforming existing conditions into accurate, coordinated digital models.",
    href: "/services#scan-to-bim",
    features: [
      "Point cloud to BIM",
      "As-built model development",
      "Survey data integration",
      "Existing drawing conversion",
      "Renovation support",
      "Coordinated digital models",
    ],
  },
];

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
        {service.description}
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
          className="border-gray-950 bg-gray-950 text-white hover:bg-black/70 inline-flex h-11 items-center justify-center border px-5 text-sm font-medium transition w-full"
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
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
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

        {/*
          ВСЯ ЗОНА КАРТОЧЕК + ФОНА

          mt-20 — расстояние от заголовка секции до карточек.
          Меньше значение = карточки и фон выше.
          Например: mt-12 / mt-16 / mt-20 / mt-32.
        */}
        <div className="relative mt-20 py-12 sm:mt-32 sm:py-16">
          {/*
            ФОН

            top-16 — где начинается фон относительно начала этой зоны.
            Меньше значение = фон поднимается выше.
            Например:
            top-8  = фон очень высоко
            top-12 = фон выше
            top-16 = текущий вариант
            top-28 = фон ниже

            bottom-0 — фон тянется до низа зоны.
            -mx-8 — фон выходит шире, как в hero.
          */}
          <div className="absolute inset-x-2 top-32 bottom-0 -mx-8 max-w-7xl rounded-4xl bg-[#dddddd] bg-[url('/2323.jpg')] bg-cover bg-center bg-no-repeat ring-1 ring-black/5 ring-inset" />

          {/*
            ОВЕРЛЕЙ НА ФОН

            Сейчас выключен через hidden.
            Если фон будет слишком контрастный, убери hidden.
          */}
          {/* <div className="pointer-events-none absolute inset-x-2 top-16 bottom-0 -mx-8 hidden max-w-7xl rounded-4xl bg-white/35" /> */}

          {/*
            КАРТОЧКИ

            -mt-4 — карточки чуть подняты вверх относительно фона.
            Хочешь выше: -mt-8 / -mt-10.
            Хочешь ниже: убери -mt-4.
          */}
          <div className="relative -mt-32 mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
