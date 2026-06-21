import Image from "next/image";
import { GlobalPresenceSection } from "./components/Map";

export default function Home() {
  return (
    <div className="bg-zinc-800 text-black">
      <GlobalPresenceSection />
    </div>
  );
}
