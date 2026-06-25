/* eslint-disable @next/next/no-img-element */
"use client";

import * as Headless from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import Link from "next/link";

const services = [
  {
    label: "AR",
    title: "Architectural Documentation",
    description:
      "Support for architectural teams in BIM modeling, drawing production, and project documentation.",
    image: "/services/architectural.jpg",
    href: "/services",
  },
  {
    label: "STR",
    title: "Structural Documentation",
    description:
      "Structural BIM modeling and drawing production support for reinforced concrete and steel projects.",
    image: "/services/structural.jpg",
    href: "/services",
  },
  {
    label: "BIM",
    title: "BIM Coordination",
    description:
      "Revit-based coordination workflows, model integration, and production support within collaborative BIM environments.",
    image: "/services/bim.jpg",
    href: "/services",
  },
  {
    label: "Delivery",
    title: "Project Delivery Support",
    description:
      "Flexible technical support for project teams during fast-paced delivery stages and complex documentation workflows.",
    image: "/services/delivery.jpg",
    href: "/services",
  },
  {
    label: "Workflow",
    title: "International Workflows",
    description:
      "Experience adapting to different documentation standards, coordination workflows, and project delivery requirements.",
    image: "/services/workflows.jpg",
    href: "/services",
  },
];

function ServiceCard({
  label,
  title,
  description,
  image,
  href,
  bounds,
  scrollX,
  ...props
}: {
  label: string;
  title: string;
  description: string;
  image: string;
  href: string;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<"article">) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const computeOpacity = useCallback(() => {
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    }

    if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    }

    return 1;
  }, [element, bounds.width, bounds.left, bounds.right]);

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.article
      ref={setElement}
      style={{ opacity }}
      {...props}
      className="relative flex h-105 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-between overflow-hidden border border-black/10 bg-white sm:w-96"
    >
      <div className="relative h-48 border-b border-black/10 bg-gray-100">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          {label}
        </p>

        <h3 className="mt-4 text-xl font-semibold text-gray-950">{title}</h3>

        <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-950"
          >
            Explore service
            <ArrowLongRightIcon className="size-5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    const firstChild = scrollRef.current?.children[0] as
      | HTMLElement
      | undefined;

    if (!firstChild) return;

    const gap = 32;
    const width = firstChild.clientWidth + gap;

    setActiveIndex(Math.round(x / width));
  });

  function scrollTo(index: number) {
    const firstChild = scrollRef.current?.children[0] as
      | HTMLElement
      | undefined;

    if (!scrollRef.current || !firstChild) return;

    const gap = 32;
    const width = firstChild.offsetWidth;

    scrollRef.current.scrollTo({
      left: (width + gap) * index,
      behavior: "smooth",
    });
  }

  return (
    <section className="overflow-hidden py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={setReferenceWindowRef}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Services
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            BIM support for every stage of project delivery.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            DETAILICA supports AEC teams with architectural documentation,
            structural BIM, coordination, and technical project delivery.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={clsx(
          "mt-14 flex gap-8 px-(--scroll-padding)",
          "scrollbar-none [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
          "[--scroll-padding:max(--spacing(4),calc((100vw-(var(--container-7xl)))/2))] sm:[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-7xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
        )}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(index)}
          />
        ))}

        <div className="w-8 shrink-0 sm:w-32" />
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-950"
          >
            View all services
            <ArrowLongRightIcon className="size-5" />
          </Link>

          <div className="hidden gap-2 sm:flex">
            {services.map((service, index) => (
              <Headless.Button
                key={service.title}
                onClick={() => scrollTo(index)}
                data-active={activeIndex === index ? true : undefined}
                aria-label={`Scroll to ${service.title}`}
                className={clsx(
                  "size-2.5 border border-transparent bg-gray-300 transition",
                  "data-active:bg-gray-500 data-hover:bg-gray-400",
                  "forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
