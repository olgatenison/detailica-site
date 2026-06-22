"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  {
    value: 12500,
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
    label: "AR · STR · BIM workflows",
  },
];

const images = [
  "/company/1.jpg",
  "/company/2.jpg",
  "/company/3.jpg",
  "/company/4.jpg",
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
            Detailica
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            Integrated BIM support for complex project delivery.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            DETAILICA supports AEC teams with architectural documentation,
            structural BIM, coordination, and technical project delivery — from
            single tasks to full project lifecycle support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center border border-gray-950 bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Explore services
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center border border-gray-300 px-5 text-sm font-medium text-gray-950 transition hover:border-gray-950"
            >
              Let’s collaborate
            </Link>
          </div>
        </motion.div> */}

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h2 className="text-2xl font-medium tracking-tight text-gray-950">
              A specialist BIM partner for AEC teams.
            </h2>

            <p className="mt-6 text-sm leading-6 text-gray-600">
              We work as an integrated subcontractor within your project team,
              helping clients manage workload, meet tight deadlines, and deliver
              reliable technical documentation.
            </p>

            <p className="mt-6 text-sm leading-6 text-gray-600">
              With experience across international project environments, we
              adapt to different documentation standards, coordination
              workflows, and project delivery requirements.
            </p>

            <div className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
                The numbers
              </p>

              <hr className="mt-5 border-t border-gray-200" />

              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:pt-10"
          >
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:-mx-8 lg:mx-0">
              {images.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className={[
                    "aspect-square overflow-hidden border border-black/10 bg-gray-100 shadow-sm",
                    index % 2 === 1 ? "-mt-8 lg:-mt-20" : "",
                  ].join(" ")}
                >
                  <img
                    src={image}
                    alt=""
                    className="block h-full w-full object-cover grayscale"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
