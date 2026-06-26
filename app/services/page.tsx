import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Services
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 text-balance sm:text-6xl">
              Documentation and BIM support for project delivery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              We support architecture and engineering teams with clear
              documentation, coordinated BIM workflows, and reliable technical
              project delivery.
            </p>

            <div className="mt-16 space-y-16 lg:mt-20">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="relative isolate flex flex-col gap-8 border-b border-black/10 pb-16 last:border-b-0 last:pb-0 lg:flex-row"
                >
                  <Link
                    href={service.href}
                    className="relative aspect-video overflow-hidden bg-gray-100 sm:aspect-[2/1] lg:aspect-square lg:w-72 lg:shrink-0"
                  >
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={600}
                      height={600}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-x-4 text-xs">
                      <span className="font-medium uppercase tracking-[0.2em] text-gray-500">
                        {service.eyebrow}
                      </span>
                    </div>

                    <div className="group relative max-w-xl">
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950 group-hover:text-gray-600">
                        <Link href={service.href}>
                          <span className="absolute inset-0" />
                          {service.title}
                        </Link>
                      </h2>

                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {service.shortDescription}
                      </p>
                    </div>

                    <ul className="mt-6 grid gap-3 text-sm leading-6 text-gray-600 sm:grid-cols-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="text-gray-950">+</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-950"
                      >
                        Read more
                        <ArrowLongRightIcon className="size-5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
