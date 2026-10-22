import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import CookieAvatar from "@/components/jefes/CookieAvatar";
import { Events } from "@/Data/Events";
import { Treasures, treasureInitials } from "@/Data/Treasures";

export const metadata = {
  title: "Eventos | Knights Citadel",
  description: "Guías de eventos de Cookie Run: Kingdom: equipos, builds y timings",
};

export default function EventosPage() {
  const events = Object.values(Events);

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-16 md:px-6">
      <PageHeader
        badge="Eventos activos"
        title="Eventos"
        subtitle="Guías de los eventos del juego: equipo estándar, builds de toppings, stats objetivo y timings."
        backHref="/"
        backLabel="Volver al Inicio"
      />

      {events.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {events.map((ev) => (
            <Link key={ev.id} href={ev.url} className="group panel overflow-hidden hover:border-circuit-border">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ev.background}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover opacity-55 grayscale-[35%] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-75"
                />
                <div className="img-veil absolute inset-0" />
                {ev.img && (
                  <div className="absolute inset-y-3 right-4 w-2/5">
                    <Image
                      src={ev.img}
                      alt={ev.name}
                      fill
                      sizes="260px"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="chip chip-live">{ev.category ?? "Evento"}</span>
                  <h2 className="mt-3 font-cookie text-heading">{ev.name}</h2>
                  {ev.credit && <p className="mt-1 text-[14px] text-moss-80">Guía por {ev.credit.author}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex -space-x-2">
                  {ev.team.map((m, i) => (
                    <CookieAvatar key={`${m.cookieId}-${i}`} cookieId={m.cookieId} size={40} />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {ev.treasures.map((key, i) => (
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
                  <span className="ml-3 text-[14px] text-fern-link group-hover:text-phosphor-white">Ver guía →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="panel flex flex-col items-center px-8 py-20 text-center">
          <h2 className="text-heading md:text-heading-lg">Eventos</h2>
          <p className="mx-auto mt-4 max-w-md text-body text-sage-60">
            Esta sección está reservada para los próximos eventos de gremio, torneos internos y anuncios especiales.
          </p>
        </div>
      )}
    </main>
  );
}
