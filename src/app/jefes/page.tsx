import { Bosses } from "@/Data/Bosses";
import BossParallax from "@/components/jefes/BossParallax";

export const metadata = {
  title: "Jefes de Gremio | Knights Citadel",
  description: "Elige un jefe de la Batalla de Gremio para ver sus builds",
};

export default function BossesPage() {
  const bosses = Object.values(Bosses).map((b) => ({
    id: b.id,
    name: b.name,
    url: b.url,
    img: b.listImg ?? b.img ?? b.background,
  }));

  return (
    <main className="w-full">
      <BossParallax bosses={bosses} />
    </main>
  );
}
