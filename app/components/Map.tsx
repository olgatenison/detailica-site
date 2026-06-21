"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

type Service = "AR" | "STR" | "BIM";

type Country = {
  name: string;
  services: Service[];
  top: string;
  left: string;
};

const COUNTRIES: Country[] = [
  {
    name: "Украина",
    services: ["AR", "STR", "BIM"],
    top: "37.4%",
    left: "55.0%",
  },
  { name: "Эстония", services: ["STR"], top: "32.4%", left: "53.5%" },
  { name: "США", services: ["AR"], top: "43.7%", left: "22.0%" },
  { name: "Нидерланды", services: ["AR"], top: "36.3%", left: "48.4%" },
  { name: "Канада", services: ["BIM"], top: "40.2%", left: "27.8%" },
  { name: "Австралия", services: ["AR", "BIM"], top: "83.8%", left: "85.9%" },
  { name: "Казахстан", services: ["STR"], top: "36.9%", left: "65.5%" },
  { name: "Швеция", services: ["STR"], top: "32.4%", left: "51.8%" },
  { name: "Норвегия", services: ["STR"], top: "32.1%", left: "49.9%" },
  {
    name: "Израиль",
    services: ["AR", "STR", "BIM"],
    top: "47.5%",
    left: "56.1%",
  },
];

const SERVICE_STYLES: Record<Service, string> = {
  AR: "bg-blue-50 text-blue-700 ring-blue-600/20",
  STR: "bg-amber-50 text-amber-700 ring-amber-600/20",
  BIM: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

function ServiceBadge({ service }: { service: Service }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        SERVICE_STYLES[service],
      )}
    >
      {service}
    </span>
  );
}

function MapPin({ country, delay }: { country: Country; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      style={{ top: country.top, left: country.left }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
    >
      <span className="block size-2.5 rounded-full bg-gray-950 ring-4 ring-gray-950/15" />
      <span className="pointer-events-none absolute -top-9 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gray-950 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
        {country.name}
        <span className="opacity-70">{country.services.join(" · ")}</span>
      </span>
    </motion.div>
  );
}

export function GlobalPresenceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 ">
      {/* <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
          Limitless
        </p>
        <h2 className="mt-2 text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Работаем по всему миру
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {COUNTRIES.length} стран, в которых мы оказываем услуги AR, STR и BIM.
        </p>
      </div> */}

      <div className="mx-auto mt-16 max-w-6xl ">
        <div className="relative aspect-636.5/336.5 w-full">
          <div className="absolute inset-0 mask-[url(/map.svg)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] bg-gray-300" />
          {COUNTRIES.map((country, i) => (
            <MapPin key={country.name} country={country} delay={i * 0.05} />
          ))}
        </div>
      </div>

      <ul className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {COUNTRIES.map((country) => (
          <li
            key={country.name}
            className="flex items-center justify-between gap-3 rounded-md bg-gray-50 px-4 py-3"
          >
            <span className="text-sm font-medium text-gray-950">
              {country.name}
            </span>
            <span className="flex gap-1">
              {country.services.map((s) => (
                <ServiceBadge key={s} service={s} />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";

// function Marker({
//   src,
//   top,
//   offset,
//   delay,
// }: {
//   src: string;
//   top: number;
//   offset: number;
//   delay: number;
// }) {
//   return (
//     <motion.div
//       variants={{
//         idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
//         active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
//       }}
//       transition={{ duration: 0.25, delay, ease: "easeOut" }}
//       style={{ "--offset": `${offset}px`, top } as React.CSSProperties}
//       className="absolute left-[calc(50%+var(--offset))] size-9.5 drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
//     >
//       <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
//         <path
//           d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
//           className="fill-black/5"
//         />
//         <path
//           d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
//           className="fill-white"
//         />
//       </svg>
//       <img
//         alt=""
//         src={src}
//         className="absolute top-1 left-1.75 size-6 rounded-full"
//       />
//     </motion.div>
//   );
// }

// export function Map() {
//   return (
//     <div aria-hidden="true" className="relative size-full">
//       <div className="absolute inset-0 bg-[url(/map.png)] mask-[linear-gradient(to_bottom,black_50%,transparent)] bg-size-[530px_430px] bg-position-[center_-75px] bg-no-repeat" />
//       <div className="absolute inset-0">
//         <Marker src="/map/1.jpg" top={96} offset={-128} delay={0.15} />
//         <Marker src="/map/2.jpg" top={160} offset={-16} delay={0.4} />
//         <Marker src="/map/3.jpg" top={144} offset={96} delay={0.3} />
//         <Marker src="/map/4.jpg" top={192} offset={64} delay={0.6} />
//         <Marker src="/map/5.jpg" top={224} offset={-32} delay={0.8} />
//       </div>
//     </div>
//   );
// }
