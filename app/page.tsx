// import Image from "next/image";
import { ContactSection } from "./components/ContactSection";
import { DetailicaHero } from "./components/DetailicaHero";
import { DetailicaIntroStats } from "./components/DetailicaIntroStats";
import DetailicaServices from "./components/DetailicaServices";
import GlobalPresenceSection from "./components/Map";
import { ServicesCarousel } from "./components/ServicesCarousel";

export default function Home() {
  return (
    <div className="bg-zinc-100 text-black">
      <DetailicaHero />
      <GlobalPresenceSection />
      <DetailicaIntroStats />
      <DetailicaServices />
      <ServicesCarousel />
      <ContactSection />
    </div>
  );
}
