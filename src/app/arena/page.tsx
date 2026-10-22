import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import CookieAvatar from "@/components/jefes/CookieAvatar";
import { ArenaTeams } from "@/Data/Arena";
import { Treasures, treasureInitials } from "@/Data/Treasures";
import { getCookie } from "@/Data/cookies";

export const metadata = {
  title: "Arena PvP | Knights Citadel",
  description: "Mejores equipos de Arena de Cookie Run: Kingdom con sus builds de toppings, biscuits y tesoros",
};

export default function ArenaPage() {
  const teams = Object.values(ArenaTeams);

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-16 md:px-6">
      <PageHeader
        badge="Kingdom Arena"
        title="Arena PvP"
        subtitle="Los equipos más usados de la temporada actual, con toppings, tarta, biscuit y tesoros de cada galleta."
        backHref="/"
        backLabel="Volver al Inicio"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {teams.map((team) => (
          <Link key={team.id} href={team.url} className="group panel overflow-hidden hover:border-circuit-border">
            <div className="relative h-40 overflow-hidden">
              <Image
                src={team.background}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover opacity-50 grayscale-[30%] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-70"
              />
              <div className="img-veil absolute inset-0" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="chip">{team.category?.replace("Arena PvP · ", "Temporada: ") ?? "Arena"}</span>
                <h2 className="mt-2 font-cookie text-heading-sm">{team.name}</h2>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-5">
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-sage-60">
                {team.team.map((m, i) => (
                  <li key={`${m.cookieId}-${i}`}>{getCookie(m.cookieId).name.replace(/ Cookie.*$/, "")}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex -space-x-2">
                  {team.team.map((m, i) => (
                    <CookieAvatar key={`${m.cookieId}-${i}`} cookieId={m.cookieId} size={40} />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {team.treasures.map((key, i) => (
                    <span key={key + i} className="relative h-8 w-8" title={Treasures[key].name}>
                      {Treasures[key].img ? (
                        <Image src={Treasures[key].img} alt={Treasures[key].name} fill sizes="32px" className="object-contain" />
                      ) : (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-pine-15 text-[10px] text-moss-70">
                          {treasureInitials(Treasures[key].name)}
                        </span>
                      )}
                    </span>
                  ))}
                  <span className="ml-3 text-[14px] text-fern-link group-hover:text-phosphor-white">Ver builds →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-deep-fern">
        Equipos y builds de la comunidad (The Cookie Book), temporadas Destruction and Creation 2 y 3 (agosto–octubre
        2026). El meta de Arena cambia con cada temporada.
      </p>
    </main>
  );
}
