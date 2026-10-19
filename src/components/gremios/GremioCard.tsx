import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IGremio } from "@/Interfaces/IGremio";

interface GremioCardProps {
  gremio: IGremio;
}

export default function GremioCard({ gremio }: GremioCardProps) {
  return (
    <div className="group panel flex flex-col overflow-hidden hover:border-circuit-border">
      {/* Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-carbon-veil">
        {gremio.bannerImage ? (
          <Image
            src={gremio.bannerImage}
            alt={gremio.name}
            fill
            className="object-cover opacity-60 grayscale-[35%] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-80"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-[42px] text-pine-15">{gremio.name[0]}</span>
          </div>
        )}
        <div className="img-veil absolute inset-0" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="chip bg-ground-iron/80">Nv. {gremio.level}</span>
          <span className="chip bg-ground-iron/80">{gremio.ranking}</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-8 pt-6">
        <h2 className="text-heading-sm">{gremio.name}</h2>
        {gremio.slogan && <p className="mt-1 text-[14px] italic text-deep-fern">&quot;{gremio.slogan}&quot;</p>}
        <p className="mt-4 text-body text-sage-60 line-clamp-3">{gremio.description}</p>

        <dl className="my-6 grid grid-cols-2 gap-4 border-y border-phosphor-blue-black py-4 text-[14px]">
          <div>
            <dt className="eyebrow">Líder</dt>
            <dd className="mt-1 text-phosphor-white">{gremio.leader}</dd>
          </div>
          <div>
            <dt className="eyebrow">Miembros</dt>
            <dd className="mt-1 font-mono text-phosphor-white">
              {gremio.membersCount} / {gremio.maxMembers}
            </dd>
          </div>
          {gremio.focus && (
            <div className="col-span-2">
              <dt className="eyebrow">Enfoque</dt>
              <dd className="mt-1 text-moss-80">{gremio.focus}</dd>
            </div>
          )}
        </dl>

        <Link href={`/gremios/${gremio.id}`} className="btn-primary mt-auto w-full">
          Ver información del gremio
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
