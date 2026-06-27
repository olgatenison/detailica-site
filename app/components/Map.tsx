"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

type Service = "Architecture" | "Structure" | "BIM";
type Filter = "All" | Service;

type Country = {
  name: string;
  services: Service[];
  top: string;
  left: string;
  projects: Partial<Record<Service, string[]>>;
};

const FILTERS: Filter[] = ["All", "Architecture", "Structure", "BIM"];

const COUNTRIES: Country[] = [
  {
    name: "Ukraine",
    services: ["Architecture", "Structure", "BIM"],
    top: "37.4%",
    left: "55.0%",
    projects: {
      Architecture: [
        "Residential Projects",
        "Public Buildings",
        "Model Federation",
      ],
      Structure: ["Structural Documentation", "Technical Calculations"],
      BIM: ["BIM Coordination", "Model Federation"],
    },
  },
  {
    name: "Estonia",
    services: ["Structure"],
    top: "32.4%",
    left: "53.5%",
    projects: {
      Structure: ["Schools", "Hospital", "Public Buildings", "Music School"],
    },
  },
  {
    name: "United States",
    services: ["Architecture"],
    top: "43.7%",
    left: "22.0%",
    projects: {
      Architecture: ["Architectural Documentation", "Concept Support"],
    },
  },
  {
    name: "Netherlands",
    services: ["Architecture"],
    top: "36.3%",
    left: "48.4%",
    projects: {
      Architecture: ["Architecture Support", "Technical Documentation"],
    },
  },
  {
    name: "Canada",
    services: ["BIM"],
    top: "40.2%",
    left: "27.8%",
    projects: {
      BIM: ["BIM Modelling", "Coordination Support"],
    },
  },
  {
    name: "Australia",
    services: ["Architecture", "BIM"],
    top: "83.8%",
    left: "85.9%",
    projects: {
      Architecture: ["Architecture Projects", "Design Documentation"],
      BIM: ["BIM-Based Workflows", "Model Coordination"],
    },
  },
  {
    name: "Kazakhstan",
    services: ["Structure"],
    top: "36.9%",
    left: "65.5%",
    projects: {
      Structure: ["Structural BIM", "Technical Support"],
    },
  },
  {
    name: "Sweden",
    services: ["Structure"],
    top: "32.4%",
    left: "51.8%",
    projects: {
      Structure: ["Structural Documentation", "Engineering Support"],
    },
  },
  {
    name: "Norway",
    services: ["Structure"],
    top: "32.1%",
    left: "49.9%",
    projects: {
      Structure: ["Structural BIM", "Project Documentation"],
    },
  },
  {
    name: "Israel",
    services: ["Architecture", "Structure", "BIM"],
    top: "47.5%",
    left: "56.1%",
    projects: {
      Architecture: ["Architecture Projects", "Concept Design"],
      Structure: ["Structural Engineering", "Technical Support"],
      BIM: ["BIM Coordination", "Clash Detection"],
    },
  },
];

function getVisibleServices(country: Country, activeFilter: Filter): Service[] {
  if (activeFilter === "All") return country.services;
  return country.services.includes(activeFilter) ? [activeFilter] : [];
}

function MapPin({
  country,
  delay,
  activeFilter,
  selectedCountry,
  onSelect,
}: {
  country: Country;
  delay: number;
  activeFilter: Filter;
  selectedCountry: string | null;
  onSelect: (country: Country) => void;
}) {
  const visibleServices = getVisibleServices(country, activeFilter);
  const isActive = visibleServices.length > 0;
  const isSelected = selectedCountry === country.name;

  const tooltipProjects =
    activeFilter === "All"
      ? []
      : (country.projects[activeFilter]?.slice(0, 2) ?? []);

  const tooltipId = `map-pin-${country.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <motion.button
      type="button"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      style={{ top: country.top, left: country.left }}
      onClick={() => {
        if (isActive) onSelect(country);
      }}
      disabled={!isActive}
      aria-label={
        isActive
          ? `Show projects in ${country.name}`
          : `${country.name} has no projects for the selected filter`
      }
      aria-pressed={isSelected}
      aria-describedby={isActive ? tooltipId : undefined}
      className={clsx(
        "group absolute z-0 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        isActive ? "cursor-pointer hover:z-20" : "cursor-default",
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "block rounded-full transition-all duration-300",
          isSelected ? "size-3.5 ring-6" : "size-2.5 ring-4",
          isActive
            ? "bg-accent ring-accent/20 group-hover:bg-gray-950 group-hover:ring-gray-950/20 group-focus-visible:bg-gray-950 group-focus-visible:ring-gray-950/20"
            : "bg-gray-300 ring-gray-300/20",
        )}
      />

      <span
        id={tooltipId}
        className={clsx(
          "pointer-events-none absolute bottom-9 left-1/2 z-20 w-max max-w-64 -translate-x-1/2 rounded-sm bg-gray-950 px-3 py-2 text-left text-base font-medium text-white opacity-0 shadow-lg transition-opacity",
          isActive
            ? "group-hover:opacity-100 group-focus-visible:opacity-100"
            : "hidden",
        )}
      >
        <span className="block">{country.name}</span>

        <span className="mt-0.5 block text-white/60">
          {visibleServices.join(" · ")}
        </span>

        {tooltipProjects.length > 0 && (
          <span className="mt-2 block space-y-0.5 text-white/80">
            {tooltipProjects.map((project) => (
              <span key={project} className="block">
                {project}
              </span>
            ))}
          </span>
        )}
      </span>
    </motion.button>
  );
}

function CountryCard({
  country,
  activeFilter,
  onClose,
}: {
  country: Country;
  activeFilter: Filter;
  onClose: () => void;
}) {
  const cardServices = getVisibleServices(country, activeFilter);
  const titleId = `country-card-${country.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <motion.div
      role="region"
      aria-labelledby={titleId}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-xl backdrop-blur"
    >
      <div className="flex flex-row items-start justify-between gap-4">
        <div>
          <p className="text-xl font-medium uppercase tracking-[0.18em] text-accent">
            {cardServices.join(" · ")}
          </p>

          <h3
            id={titleId}
            className="mt-2 text-2xl font-semibold text-gray-950"
          >
            {country.name}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close country details"
          className="self-start text-sm font-medium uppercase text-gray-400 transition hover:text-gray-950 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Close
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {cardServices.map((service) => {
          const items = country.projects[service] ?? [];

          if (items.length === 0) return null;

          return (
            <div key={service}>
              {cardServices.length > 1 && (
                <p className="self-start text-sm font-medium uppercase text-gray-400 transition">
                  {service}
                </p>
              )}

              <ul
                className={clsx(
                  "grid gap-2 sm:grid-cols-2",
                  cardServices.length > 1 && "mt-2",
                )}
              >
                {items.map((project) => (
                  <li
                    key={project}
                    className="bg-accent/10 px-4 py-3 text-sm font-medium text-gray-800"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function GlobalPresenceSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const visibleSelectedCountry =
    selectedCountry &&
    getVisibleServices(selectedCountry, activeFilter).length > 0
      ? selectedCountry
      : null;

  return (
    <section
      aria-labelledby="global-presence-title"
      className="relative w-full overflow-hidden bg-white lg:pt-18 pt-12 lg:px-8"
    >
      <div className="mx-auto max-w-3xl px-6 pt-6 text-center ">
        <p className="text-base font-medium tracking-widest text-gray-500 uppercase">
          Supporting Projects Across 10 Countries
        </p>

        <h2
          id="global-presence-title"
          className="mt-5 text-4xl font-semibold text-gray-950 text-balance lg:text-5xl"
        >
          International Project Experience
        </h2>
      </div>

      <div
        role="group"
        aria-label="Filter countries by service"
        className="mx-auto mt-8 flex flex-wrap justify-center gap-3 px-6"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedCountry(null);
              }}
              className={clsx(
                "inline-flex h-6 items-center justify-center border px-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black",
                isActive
                  ? "border-accent text-accent"
                  : "border-white bg-white text-black hover:text-accent",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-636.5/336.5 w-full">
          <div
            aria-hidden="true"
            className="absolute inset-0 mask-[url(/map.svg)] mask-center mask-no-repeat mask-contain bg-gray-300"
          />

          {COUNTRIES.map((country, i) => (
            <MapPin
              key={country.name}
              country={country}
              delay={i * 0.05}
              activeFilter={activeFilter}
              selectedCountry={selectedCountry?.name ?? null}
              onSelect={setSelectedCountry}
            />
          ))}

          {visibleSelectedCountry && (
            <div
              aria-live="polite"
              className="absolute left-1/2 top-4 z-30 hidden w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 sm:block sm:top-6"
            >
              <CountryCard
                country={visibleSelectedCountry}
                activeFilter={activeFilter}
                onClose={() => setSelectedCountry(null)}
              />
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 text-center text-base font-medium text-gray-500 sm:hidden">
        Tap a highlighted location
      </p>

      {visibleSelectedCountry && (
        <div aria-live="polite" className="mx-4 mt-6 sm:hidden">
          <CountryCard
            country={visibleSelectedCountry}
            activeFilter={activeFilter}
            onClose={() => setSelectedCountry(null)}
          />
        </div>
      )}
    </section>
  );
}
