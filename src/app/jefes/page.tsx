import { Bosses } from "@/Data/Bosses";
import BossParallax from "@/components/jefes/BossParallax";
import BossCards from "@/components/jefes/BossCards";

export const metadata = {
  title: "Jefes de Gremio | Knights Citadel",
  description: "Elige un jefe de la Batalla de Gremio para ver sus builds",
};

export default function BossesPage() {
  const list = Object.values(Bosses);

  return (
    <main className="w-full">
      <h1 className="sr-only">Jefes de Gremio</h1>

      {/* Escritorio: escena con parallax (siluetas) */}
      <BossParallax
        bosses={list.map((b) => ({
          id: b.id,
          name: b.name,
          url: b.url,
          img: b.listImg ?? b.img ?? b.background,
        }))}
      />

      {/* Móvil: tarjetas 2×2 con la imagen a color */}
      <BossCards
        bosses={list.map((b) => ({
          id: b.id,
          name: b.name,
          siglas: b.siglas,
          url: b.url,
          img: b.img ?? b.listImg ?? b.background,
          background: b.background,
        }))}
      />
    </main>
  );
}
