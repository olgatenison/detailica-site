import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    id: 1,
    title: "Architectural Documentation Support",
    href: "/projects/architectural-documentation-support",
    description:
      "BIM modeling and drawing production support for architectural teams during design development and documentation stages.",
    imageUrl: "/services/architectural.jpg",
    category: "Architecture",
    scope: "Documentation",
  },
  {
    id: 2,
    title: "Structural BIM Documentation",
    href: "/projects/structural-bim-documentation",
    description:
      "Structural BIM modeling and drawing support for reinforced concrete and steel building projects.",
    imageUrl: "/services/structural.jpg",
    category: "Structural",
    scope: "BIM Modeling",
  },
  {
    id: 3,
    title: "BIM Coordination Workflow",
    href: "/projects/bim-coordination-workflow",
    description:
      "Revit-based coordination workflows, model integration, clash review support, and technical delivery assistance.",
    imageUrl: "/services/bim.jpg",
    category: "BIM",
    scope: "Coordination",
  },
  {
    id: 4,
    title: "Project Delivery Support",
    href: "/projects/project-delivery-support",
    description:
      "Flexible production support for project teams working through fast-paced documentation and delivery stages.",
    imageUrl: "/services/delivery.jpg",
    category: "Delivery",
    scope: "Technical Support",
  },
  {
    id: 5,
    title: "International Documentation Workflows",
    href: "/projects/international-documentation-workflows",
    description:
      "Support for teams working with different drawing standards, BIM requirements, and international delivery processes.",
    imageUrl: "/services/workflows.jpg",
    category: "Workflow",
    scope: "Standards",
  },
  {
    id: 6,
    title: "AEC Production Support",
    href: "/projects/aec-production-support",
    description:
      "Ongoing architectural, structural, and BIM production support for architecture, engineering, and construction teams.",
    imageUrl: "/services/architectural.jpg",
    category: "AEC",
    scope: "Production",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Projects
            </p>

            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-gray-950 text-balance sm:text-7xl">
              Selected project experience
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              A closer look at the project types, delivery stages, and technical
              workflows we support across architecture, engineering, and BIM
              documentation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col border border-black/10 bg-white"
              >
                <Link
                  href={project.href}
                  className="relative block overflow-hidden"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={520}
                    className="aspect-4/3 w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-medium uppercase tracking-[0.2em] text-gray-500">
                      {project.category}
                    </span>

                    <span className="text-gray-300">/</span>

                    <span className="text-gray-500">{project.scope}</span>
                  </div>

                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-gray-950">
                    <Link
                      href={project.href}
                      className="transition group-hover:text-gray-600"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-950"
                    >
                      View project
                      <ArrowLongRightIcon className="size-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
