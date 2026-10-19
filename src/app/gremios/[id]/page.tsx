import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { gremios, getGremioById } from "@/Data/Gremios";
import PageHeader from "@/components/common/PageHeader";

export async function generateStaticParams() {
  return gremios.map((gremio) => ({
    id: gremio.id,
  }));
}

interface GremioDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: GremioDetailPageProps) {
  const { id } = await params;
  const gremio = getGremioById(id);
  if (!gremio) return { title: "Gremio no encontrado" };
  return {
    title: `${gremio.name} | Knights Citadel`,
    description: gremio.description,
  };
}

export default async function GremioDetailPage({ params }: GremioDetailPageProps) {
  const { id } = await params;
  const gremio = getGremioById(id);

  if (!gremio) {
    notFound();
  }

  const stats = [
    { label: "Líder", value: gremio.leader },
    { label: "Rango de Liga", value: gremio.ranking },
    { label: "Enfoque", value: gremio.focus || "Mixto" },
    { label: "Capacidad", value: `${Math.round((gremio.membersCount / gremio.maxMembers) * 100)}% lleno` },
  ];

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-16 md:px-6">
      <PageHeader
        badge={`Gremio Oficial • ${gremio.ranking}`}
        title={gremio.name}
        subtitle={gremio.slogan || gremio.description}
        backHref="/gremios"
        backLabel="Volver a Gremios"
      />

      {/* Banner */}
      <div className="panel relative h-64 w-full overflow-hidden md:h-80">
        {gremio.bannerImage && (
          <Image
            src={gremio.bannerImage}
            alt={gremio.name}
            fill
            priority
            className="object-cover opacity-55 grayscale-[35%]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        )}
        <div className="img-veil absolute inset-0" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 md:bottom-8 md:left-8 md:right-8 md:flex-row md:items-end">
          <div>
            <span className="chip chip-live">Nivel de Gremio: {gremio.level}</span>
            <h2 className="mt-3 text-heading md:text-heading-lg">{gremio.name}</h2>
            {gremio.slogan && <p className="mt-1 text-[16px] italic text-moss-80">&quot;{gremio.slogan}&quot;</p>}
          </div>
          <div className="self-start rounded-[8px] border border-pine-15 bg-ground-iron/85 px-5 py-3 md:self-auto">
            <span className="eyebrow block">Miembros</span>
            <span className="font-mono text-[20px] text-phosphor-white">
              {gremio.membersCount} / {gremio.maxMembers}
            </span>
          </div>
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <dl className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="panel p-6">
            <dt className="eyebrow">{s.label}</dt>
            <dd className="mt-2 text-[18px] text-phosphor-white">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Descripción */}
        <section>
          <p className="eyebrow">Sobre este gremio</p>
          <h3 className="mt-3 text-heading">Quiénes somos</h3>
          <p className="mt-4 text-body text-sage-60">{gremio.description}</p>
        </section>

        {/* Requisitos */}
        {gremio.requirements && gremio.requirements.length > 0 && (
          <section>
            <p className="eyebrow">Ingreso & permanencia</p>
            <h3 className="mt-3 text-heading">Requisitos</h3>
            <ul className="mt-6 flex flex-col">
              {gremio.requirements.map((req, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[2.5ch_1fr] gap-3 border-t border-phosphor-blue-black py-3 text-body text-sage-60"
                >
                  <span className="font-mono text-[14px] text-sage-40">{String(idx + 1).padStart(2, "0")}</span>
                  {req}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
