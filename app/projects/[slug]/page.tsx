import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { projects } from "@/app/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.shortTitle} — ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const heroImages = project.images.slice(0, 4);

  return (
    <main className="bg-white text-gray-950">
      <section className="pt-6 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-950"
          >
            <ArrowLeftIcon className="size-4" />
            Back to projects
          </Link>

          <div className="mt-6 grid h-65 grid-cols-4 gap-2 overflow-hidden sm:h-90 lg:h-105">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={
                  index === 0
                    ? "relative col-span-4 overflow-hidden bg-gray-100 lg:col-span-2"
                    : "relative hidden overflow-hidden bg-gray-100 lg:block"
                }
              >
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 100vw"
                  }
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                {project.shortTitle}
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-4 text-xl font-medium uppercase tracking-tight text-gray-800">
                {project.stage}
              </p>

              <div className="mt-8 border-t border-gray-950" />

              <div className="mt-8 grid gap-8 text-base leading-8 text-gray-700 md:grid-cols-2">
                <p>{project.description}</p>
                <p>{project.challenge}</p>
              </div>
            </div>

            <aside>
              <div className="border-t border-gray-950 pt-8">
                <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-gray-950">Location</dt>
                    <dd className="mt-1 text-gray-700">{project.location}</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-gray-950">Status</dt>
                    <dd className="mt-1 text-gray-700">{project.status}</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-gray-950">Completed</dt>
                    <dd className="mt-1 text-gray-700">{project.year}</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-gray-950">Size</dt>
                    <dd className="mt-1 text-gray-700">
                      {project.area.toLocaleString("en-US")} {project.areaUnit}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-gray-950">Stage</dt>
                    <dd className="mt-1 text-gray-700">{project.stage}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>

          {project.images.length > 4 && (
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.slice(4).map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-4/3 overflow-hidden bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 5}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
