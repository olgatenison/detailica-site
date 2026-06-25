"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 320,
    suffix: "+",
    label: "Projects completed",
  },
  {
    value: 10,
    suffix: "",
    label: "Countries",
  },
  {
    value: 18,
    suffix: "+",
    label: "Years experience",
  },
  {
    value: 3,
    suffix: "",
    label: "Workflows",
  },
];

const workflowCards = [
  {
    eyebrow: "01 / EN Projects",
    title: "Eurocode-Based Workflows",
    text: "Experience working within Eurocode-oriented design environments, BIM coordination processes and multidisciplinary project teams across European projects.",
  },
  {
    eyebrow: "02 / KR Projects",
    title: "Ukrainian Project Experience",
    text: "Familiarity with Ukrainian documentation structure, sheet organization, annotation styles and residential/commercial drafting workflows.",
  },
  {
    eyebrow: "03 / US Projects",
    title: "US Documentation Experience",
    text: "Familiarity with US documentation structure, sheet organization, annotation styles and residential/commercial drafting workflows.",
  },
  {
    eyebrow: "BIM Delivery",
    title: "Multidisciplinary Workflows",
    text: "Revit-based coordination workflows, IFC exchange, model integration and production support within collaborative BIM environments.",
  },
];

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 90,
  });

  const rounded = useTransform(springValue, (latest) => {
    return Math.round(latest).toLocaleString("en-US");
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function DetailicaIntroStats() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-6 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Первый ряд: текст + цифры */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              How We Integrate With Project Teams
            </p>

            <h2 className="mt-5 text-xl font-semibold text-gray-950 text-balance sm:text-5xl">
              International Workflow Experience
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 font-light text-gray-500 text-balance sm:text-lg">
              Experience adapting documentation workflows to local standards,
              coordination practices and project delivery requirements across
              different regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className=""
          >
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              The numbers
            </p>

            <hr className="mt-5 border-t border-gray-200" />

            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-dotted border-gray-200 pb-5"
                >
                  <dt className="mt-2 text-sm leading-6 text-gray-600">
                    {stat.label}
                  </dt>

                  <dd className="order-first text-5xl font-medium tracking-tight text-gray-950 sm:text-6xl">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Второй ряд: 4 карточки */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-14 "
        >
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {workflowCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                  ease: "easeOut",
                }}
                className="min-h-64 rounded-4xl  "
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {card.eyebrow}
                </p>

                <div className="mt-5 h-px w-12 bg-accent" />

                <h3 className="mt-6 text-xl font-semibold text-gray-950 hover:text-accent">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {card.text}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
