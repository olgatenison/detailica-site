import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section aria-labelledby="services-page-title" className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Services
            </p>

            <h1
              id="services-page-title"
              className="mt-4 text-5xl font-semibold tracking-tight text-gray-950 text-balance sm:text-7xl"
            >
              Documentation and BIM support for project delivery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              We support architecture and engineering teams with clear
              documentation, coordinated BIM workflows, and reliable technical
              project delivery.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-20 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="group flex min-h-150 flex-col overflow-hidden bg-white md:min-h-0 md:flex-row md:gap-8 lg:min-h-150 lg:flex-col lg:gap-0"
                >
                  <div
                    className={
                      index === 1
                        ? "flex flex-1 flex-col md:order-2 md:basis-1/2 lg:order-0 lg:basis-auto"
                        : "flex flex-1 flex-col md:basis-1/2 lg:basis-auto"
                    }
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                      {service.eyebrow}
                    </p>

                    <h2 className="mt-4 pr-12 text-2xl font-semibold tracking-tight text-gray-950">
                      <Link
                        href={service.href}
                        className="text-balance transition hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        {service.title}
                      </Link>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-7 space-y-3 text-sm leading-6 text-gray-600">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span aria-hidden="true" className="text-gray-950">
                            +
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <Link
                        href={service.href}
                        aria-label={`Read more about ${service.title}`}
                        className="mb-16 inline-flex items-center gap-2 text-base font-medium text-gray-950 transition hover:text-gray-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black md:mb-0 lg:mb-16"
                      >
                        Read more
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="size-5"
                        />
                      </Link>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    aria-label={`Open ${service.title}`}
                    className={
                      index === 1
                        ? "relative mt-auto block aspect-4/3 overflow-hidden bg-gray-100 md:order-1 md:mt-0 md:basis-1/2 lg:order-0 lg:mt-auto lg:basis-auto"
                        : "relative mt-auto block aspect-4/3 overflow-hidden bg-gray-100 md:mt-0 md:basis-1/2 lg:mt-auto lg:basis-auto"
                    }
                  >
                    <Image
                      src={service.imageUrl}
                      alt=""
                      width={800}
                      height={600}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
