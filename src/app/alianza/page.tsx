import React from "react";
import { allianceTeams } from "@/Data/Alianza";
import { currentSeason, seasonTeamAsGuide } from "@/Data/AllianceSeasons";
import AllianceTeamCard from "@/components/alianza/AllianceTeamCard";
import PageHeader from "@/components/common/PageHeader";
import { getCookieImageMap } from "@/lib/cookieImages";
import BossBento from "@/components/jefes/BossBento";
import GuideInfo from "@/components/jefes/GuideInfo";

export const metadata = {
  title: "Alianza de Gremios | Knights Citadel",
  description: "Temporada actual de Cookie Alliance y los equipos recomendados para la Alianza de Gremios",
};

export default function AlianzaPage() {
  const season = currentSeason;

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-16 md:px-6">
      <PageHeader
        badge="Modo Cooperativo"
        title="Alianza de Gremios"
        subtitle="Composiciones y rotación estratégica dividida en 3 equipos para conquistar todas las oleadas del modo Alianza."
        backHref="/"
        backLabel="Volver al Inicio"
      />

      {/* Temporada actual */}
      {season && (
        <section>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="chip chip-live">Temporada actual</span>
            <h2 className="font-cookie text-heading">
              {season.category} · {season.name}
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {season.teams.map((team, i) => (
              <BossBento
                key={team.name}
                boss={seasonTeamAsGuide(season, i)}
                titleAs="h3"
                images={getCookieImageMap(team.team.map((m) => m.cookieId))}
              />
            ))}
          </div>

          <div className="mt-8">
            <GuideInfo
              notes={season.notes}
              timing={season.timing}
              timingTitle={`timing — ${season.name}`}
              credit={season.credit}
            />
          </div>
        </section>
      )}

      {/* Guía general: alianza lleva 3 equipos */}
      <section className="pt-20">
        <p className="eyebrow">Guía general</p>
        <h2 className="mt-3 mb-8 text-heading">Roles de los 3 equipos</h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {allianceTeams.map((team) => (
            <AllianceTeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
    </main>
  );
}
