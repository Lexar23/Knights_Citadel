"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ParallaxBoss {
  id: string;
  name: string;
  url: string;
  img: string;
}

interface BossParallaxProps {
  bosses: ParallaxBoss[];
}

/**
 * Escena en 3 capas (solo escritorio): cielo (Guild.webp) al fondo, jefes en
 * medio y la muralla (GuildBase.webp) al frente. Cada capa se desplaza distinto
 * según el puntero y el scroll. En móvil se muestran tarjetas (BossCards).
 */
// Desplazamiento máximo en px por capa (más cerca = se mueve más).
const DEPTH = { sky: 10, bosses: 22, base: 34 };
// Cuánto bajan el cielo y la muralla dentro de la escena (caja interior más alta, anclada abajo).
const DROP = "-bottom-[10%]";

export default function BossParallax({ bosses }: BossParallaxProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (
      !scene ||
      !window.matchMedia("(min-width: 768px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      scene.style.setProperty("--px", current.x.toFixed(4));
      scene.style.setProperty("--py", current.y.toFixed(4));
      scene.style.setProperty("--sy", String(window.scrollY));
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const layer = (depth: number, scrollFactor: number): React.CSSProperties => ({
    transform: `translate3d(calc(var(--px) * ${-depth}px), calc(var(--py) * ${-depth * 0.6}px + var(--sy) * ${scrollFactor}px), 0)`,
  });

  return (
    <div
      ref={sceneRef}
      className="relative hidden h-[calc(100svh-64px)] min-h-[520px] w-full overflow-hidden bg-void-black md:block"
      style={{ "--px": 0, "--py": 0, "--sy": 0 } as React.CSSProperties}
    >
      {/* Cielo */}
      <div className="absolute -inset-8 will-change-transform" style={layer(DEPTH.sky, 0.35)} aria-hidden="true">
        <div className={`absolute inset-x-0 top-0 ${DROP}`}>
          <Image
            src="/Assets/backgrounds/pageBackgrounds/Guild.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Jefes */}
      <div className="absolute inset-x-0 top-[13%] bottom-[37%] will-change-transform" style={layer(DEPTH.bosses, 0.15)}>
        <ul className="mx-auto grid h-full w-full max-w-[1280px] grid-cols-4 items-center gap-x-8 px-6">
          {bosses.map((boss, i) => (
            <li key={boss.id} className="relative h-full min-h-0 origin-bottom scale-[1.2]">
              <Link
                href={boss.url}
                aria-label={`${boss.name} — ver builds`}
                title={boss.name}
                className="boss-float group absolute inset-0 block"
                style={{ animationDelay: `${i * -1.3}s` }}
              >
                <Image
                  src={boss.img}
                  alt={boss.name}
                  fill
                  priority
                  sizes="360px"
                  className="boss-glow object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Muralla (frente) */}
      <div
        className="pointer-events-none absolute -inset-x-10 -bottom-10 top-0 will-change-transform"
        style={layer(DEPTH.base, 0)}
        aria-hidden="true"
      >
        <div className={`absolute inset-x-0 top-0 ${DROP}`}>
          <Image
            src="/Assets/backgrounds/pageBackgrounds/GuildBase.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Fundido hacia el lienzo negro */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void-black to-transparent" />
    </div>
  );
}
