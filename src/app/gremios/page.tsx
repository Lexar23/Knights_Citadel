import React from "react";
import { gremios } from "@/Data/Gremios";
import GremioCard from "@/components/gremios/GremioCard";
import PageHeader from "@/components/common/PageHeader";

export const metadata = {
  title: "Gremios | Knights Citadel",
  description: "Explora los gremios oficiales de la alianza Knights Citadel",
};

export default function GremiosPage() {
  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-16 md:px-6">
      <PageHeader
        badge="Comunidad & Alianza"
        title="Gremios Oficiales"
        subtitle="Conoce nuestros 3 gremios activos, sus objetivos de competencia y encuentra el lugar ideal para tu progreso."
        backHref="/"
        backLabel="Volver al Inicio"
      />

      {/* 3 cards de Gremio usando map y componente reutilizable */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {gremios.map((gremio) => (
          <GremioCard key={gremio.id} gremio={gremio} />
        ))}
      </div>
    </main>
  );
}
