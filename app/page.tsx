// import Image from "next/image";
import { ContactSection } from "./components/ContactSection";
import { DetailicaHero } from "./components/DetailicaHero";
import { DetailicaIntroStats } from "./components/DetailicaIntroStats";
import GlobalPresenceSection from "./components/Map";
import { ServicesCarousel } from "./components/ServicesCarousel";

export default function Home() {
  return (
    <div className="bg-zinc-50 text-black">
      <DetailicaHero />
      <GlobalPresenceSection />
      <DetailicaIntroStats />
      <ServicesCarousel />
      <ContactSection />
    </div>
  );
}
