"use client";

import { useState } from "react";
import Image from "next/image";
import { IBoss, ICookieBuild, ToppingKey } from "@/Interfaces/IBoss";
import { getCookie } from "@/Data/cookies";
import { BISCUITS } from "@/Data/Biscuits";
import { TOPPING_CATALOG } from "@/Data/Toppings";
import { Treasures, treasureInitials } from "@/Data/Treasures";
import { ICookieImages, pickBuildImage, pickTileImage } from "@/lib/cookieImagePick";
import ToppingTart from "./ToppingTart";

interface BossBentoProps {
  boss: IBoss;
  /** Usa h2 cuando hay varios bentos en la misma página. */
  titleAs?: "h1" | "h2" | "h3";
  /** Imágenes resueltas en el servidor (getCookieImageMap). */
  images?: Record<string, ICookieImages>;
}

/** Set de toppings: solo los 5 toppings (la tarta va aparte, no es un topping). */
function getSetPieces(build: ICookieBuild) {
  const tart: ToppingKey = build.tart;
  const counts = new Map<ToppingKey, number>();
  build.toppings.forEach((p) => counts.set(p.type, (counts.get(p.type) ?? 0) + p.count));
  const pieces = [...counts.entries()].map(([type, count]) => ({ type, count }));
  const label = `X${pieces.map((p) => p.count).join("/")}`;
  return { tart, pieces, label };
}

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .replace(/Cookie/i, "")
    .trim()
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

function Portrait({ cookieId, src, sizes }: { cookieId: string; src?: string; sizes: string }) {
  const cookie = getCookie(cookieId);
  return src ? (
    <Image src={src} alt={cookie.name} fill sizes={sizes} className="object-contain p-2" />
  ) : (
    <span className="absolute inset-0 flex items-center justify-center font-cookie text-[28px] text-moss-70">
      {initials(cookie.name)}
    </span>
  );
}

const cell = "candy-cell";

export default function BossBento({ boss, titleAs: Title = "h1", images = {} }: BossBentoProps) {
  const [selected, setSelected] = useState(0);
  const [buildIdx, setBuildIdx] = useState(0);

  const member = boss.team[selected];
  const cookie = getCookie(member.cookieId);
  const build = member.builds[Math.min(buildIdx, member.builds.length - 1)];
  const { tart, pieces, label } = getSetPieces(build);
  // "Legendario Crispy · 4× Bypass DMR" → nombre + stats en dos líneas
  const [biscuitName, biscuitStats] = build.biscuit.split(" · ");
  const biscuitClass = cookie.cookieClass;
  const biscuitArt = biscuitClass ? BISCUITS[biscuitClass] : undefined;
  const notes = [...new Set([...(member.notes ?? []), ...(build.notes ?? [])])];

  const selectCookie = (i: number) => {
    setSelected(i);
    setBuildIdx(0);
  };

  return (
    <div className="boss-bento">
      {/* 0 · Imagen del jefe */}
      <div className={`bento-boss relative min-h-[300px] overflow-hidden ${cell}`}>
        <Image src={boss.background} alt="" fill priority sizes="(max-width: 1024px) 100vw, 520px" className={`object-cover grayscale-[40%] ${boss.img ? "opacity-35" : "opacity-60"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/50 to-transparent" />
        {boss.img ? (
          <div className="absolute inset-6 bottom-20">
            <Image src={boss.img} alt={boss.name} fill priority sizes="(max-width: 1024px) 80vw, 480px" className="object-contain" />
          </div>
        ) : (
          <p className="absolute inset-x-6 bottom-20 font-cookie text-[40px] leading-none text-phosphor-white/90">{boss.name}</p>
        )}
        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between gap-3">
          <span className="chip bg-ground-iron/80">{boss.siglas}</span>
          {boss.element && <span className="text-[14px] text-moss-70">Elemento: {boss.element}</span>}
        </div>
      </div>

      {/* 6 · Título */}
      <div className={`bento-title flex flex-col justify-center px-6 py-4 ${cell}`}>
        <p className="eyebrow truncate" title={`${boss.category ?? "Batalla de Gremio"}${boss.credit ? ` · Guía por ${boss.credit.author}` : ""}`}>
          {boss.category ?? "Batalla de Gremio"}
          {boss.credit ? ` · Guía por ${boss.credit.author}` : ""}
        </p>
        <Title className="mt-1 line-clamp-2 font-cookie text-[26px] leading-tight lg:text-[20px] xl:text-[26px]">
          {boss.name}
        </Title>
      </div>

      {/* 1-3 · Tesoros */}
      {boss.treasures.map((key, i) => {
        const t = Treasures[key];
        return (
          <div
            key={key + i}
            className={`bento-t bento-t${i + 1} flex flex-col items-center justify-center gap-1 p-2 text-center ${cell}`}
            title={t.name}
          >
            {t.img ? (
              <span className="relative h-12 w-12">
                <Image src={t.img} alt="" fill sizes="48px" className="object-contain" />
              </span>
            ) : (
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-pine-15 font-cookie text-[14px] text-moss-70"
                aria-hidden="true"
              >
                {treasureInitials(t.name)}
              </span>
            )}
            <span className="text-[12px] leading-tight text-moss-80">{t.name}</span>
          </div>
        );
      })}

      {/* Equipo · C1 … C5 */}
      <div className={`bento-team flex flex-col justify-center px-3 py-2 ${cell} bg-carbon-veil`}>
        <p className="eyebrow">Equipo</p>
        <p className="text-[12px] text-deep-fern lg:mt-1">Toca una galleta</p>
      </div>
      {boss.team.map((m, i) => {
        const c = getCookie(m.cookieId);
        const active = i === selected;
        return (
          <button
            key={`${m.cookieId}-${i}`}
            type="button"
            onClick={() => selectCookie(i)}
            aria-pressed={active}
            aria-label={c.name}
            className={`bento-c bento-c${i + 1} group relative aspect-square cursor-pointer overflow-hidden rounded-[16px] border-2 lg:aspect-auto ${
              active
                ? "border-lime-pulse bg-carbon-veil shadow-[0_0_0_3px_rgba(255,204,77,0.28),0_4px_0_#0f0b29]"
                : "border-pine-15 bg-ground-iron shadow-[0_4px_0_#0f0b29] hover:border-circuit-border"
            }`}
          >
            <Portrait cookieId={m.cookieId} src={pickTileImage(images[m.cookieId])} sizes="112px" />
            <span className="absolute left-1.5 top-1.5 font-cookie text-[11px] text-deep-fern">C{i + 1}</span>
            {active && <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-lime-pulse" aria-hidden="true" />}
          </button>
        );
      })}

      {/* Nombre de la galleta */}
      <div className={`bento-name flex flex-col justify-center px-4 py-3 lg:px-3 ${cell}`}>
        <p className="eyebrow truncate">Build</p>
        <p className="mt-1 break-words font-cookie text-[16px] leading-tight text-phosphor-white lg:text-[14px] xl:text-[16px]">
          {cookie.name.replace(/ Cookie$/, "")}
        </p>
      </div>

      {/* 7 · Pic */}
      <div className={`bento-pic relative min-h-[180px] overflow-hidden ${cell} bg-carbon-veil`}>
        <Portrait cookieId={member.cookieId} src={pickBuildImage(images[member.cookieId])} sizes="240px" />
      </div>

      {/* 4 · Toppings + tarta (arriba) / Biscuit (abajo) */}
      <div className={`bento-tart relative flex flex-col overflow-hidden ${cell} bg-carbon-veil`}>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-3 pt-3 pb-2">
          <div className="aspect-square w-full max-w-[200px] lg:min-h-0 lg:flex-1 lg:max-h-[196px] lg:w-auto lg:max-w-full">
            <ToppingTart tart={tart} toppings={build.toppings} />
          </div>
          <p className="mt-1 text-[12px] text-deep-fern">Tarta de {TOPPING_CATALOG[tart].shortName}</p>
        </div>

        <div className="flex items-center gap-3 border-t-2 border-pine-15 bg-ground-iron/70 px-3 py-2.5">
          {biscuitArt ? (
            <span className="relative h-11 w-11 shrink-0" title={`Biscuit de ${biscuitArt.label}`}>
              <Image src={biscuitArt.img} alt={`Biscuit de ${biscuitArt.label}`} fill sizes="44px" className="object-contain" />
            </span>
          ) : (
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-pine-15 text-[11px] text-deep-fern"
              aria-hidden="true"
            >
              ?
            </span>
          )}
          <div className="min-w-0">
            <p className="eyebrow">Biscuit</p>
            <p className="text-[14px] leading-snug text-phosphor-white">{biscuitName}</p>
            {biscuitStats && <p className="text-[12px] leading-snug text-moss-80">{biscuitStats}</p>}
            {member.focus && <span className="chip mt-1 max-w-full truncate">{member.focus}</span>}
          </div>
        </div>
      </div>

      {/* Set de toppings */}
      <div className={`bento-set flex flex-col gap-2 p-3 ${cell}`}>
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          <span className="eyebrow">Set</span>
          <span className="font-cookie text-[16px] text-phosphor-white">{label}</span>
        </div>
        <ul className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
          {pieces.map((p) => (
            <li
              key={p.type}
              className="flex flex-wrap items-center gap-x-2 lg:gap-y-0"
              title={TOPPING_CATALOG[p.type].name}
            >
              <span className="relative h-8 w-6 shrink-0">
                <Image src={TOPPING_CATALOG[p.type].icon} alt="" fill sizes="24px" className="object-contain" />
              </span>
              <span className="text-[14px] text-phosphor-white">×{p.count}</span>
              <span className="text-[12px] text-deep-fern lg:basis-full lg:leading-tight">
                {TOPPING_CATALOG[p.type].stat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 5 · Stats */}
      <div className={`bento-stat flex flex-col ${cell}`}>
        <div className="flex-1 p-4">
          <p className="eyebrow mb-2">Stats objetivo</p>
          <dl className="flex flex-col gap-1.5">
            {build.stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-3">
                <dt className="flex min-w-0 items-center gap-1.5 text-[14px] text-moss-80">
                  {s.key && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-phosphor-white" aria-label="clave" />}
                  <span className="truncate">{s.label}</span>
                </dt>
                <dd className={`shrink-0 text-[15px] ${s.key ? "text-phosphor-white" : "text-moss-80"}`}>{s.value}</dd>
              </div>
            ))}
          </dl>
          {build.stats.some((s) => s.note) && (
            <ul className="mt-2 flex flex-col gap-0.5 text-[11px] leading-snug text-deep-fern">
              {build.stats
                .filter((s) => s.note)
                .map((s) => (
                  <li key={s.label}>
                    {s.label}: {s.note}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      {/* Builds disponibles + notas de la galleta */}
      <div className={`bento-notes flex flex-col gap-3 p-4 md:flex-row md:items-center md:gap-6 ${cell}`}>
        {member.builds.length > 1 && (
          <div className="flex shrink-0 flex-wrap gap-2" role="group" aria-label="Builds disponibles">
            {member.builds.map((b, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setBuildIdx(i)}
                aria-pressed={i === buildIdx}
                className={`cursor-pointer rounded-full border px-4 py-1.5 text-[14px] ${
                  i === buildIdx
                    ? "border-[#8a4f14] bg-lime-pulse text-cookie-dark shadow-[0_3px_0_#8a4f14]"
                    : "border-circuit-border text-fern-link hover:text-phosphor-white"
                }`}
              >
                {b.name ?? `Build ${i + 1}`}
              </button>
            ))}
          </div>
        )}
        {notes.length > 0 ? (
          <ul className="flex flex-col gap-1 text-[14px] text-sage-60">
            {notes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="text-moss-70" aria-hidden="true">›</span>
                {n}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[14px] text-deep-fern">
            {member.builds.length > 1 ? "Elige la build que mejor se ajuste a tus subs." : "Build única recomendada para esta galleta."}
          </p>
        )}
      </div>
    </div>
  );
}
