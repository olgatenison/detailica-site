import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { services } from "../../data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: `${service.title} | DETAILICA`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-950"
          >
            <ArrowLongLeftIcon className="size-5" />
            Back to services
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                {service.eyebrow}
              </p>

              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-gray-950 text-balance sm:text-7xl">
                {service.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                {service.intro}
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={900}
                height={700}
                priority
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />

              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[0.65fr_1fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                What we support
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Our role is to help your team move from project information to
                coordinated, structured, and buildable documentation.
              </p>
            </div>

            <div>
              <p className="text-base leading-8 text-gray-600">
                {service.details}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="border border-black/10 bg-white p-5"
                  >
                    <div className="text-xl leading-none text-gray-950">+</div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-black/10 pt-10">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center border border-gray-950 bg-gray-950 px-6 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
