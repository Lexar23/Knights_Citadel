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
 * Escena en 3 capas: cielo (Guild.webp) al fondo, jefes en medio y la muralla
 * (GuildBase.webp) al frente. Cada capa se desplaza distinto según el puntero,
 * la inclinación del móvil y el scroll.
 */
// Desplazamiento máximo en px por capa (más cerca = se mueve más).
const DEPTH = { sky: 10, bosses: 22, base: 34 };

export default function BossParallax({ bosses }: BossParallaxProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      target.x = Math.max(-1, Math.min(1, e.gamma / 30));
      target.y = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
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
    window.addEventListener("deviceorientation", onTilt, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, []);

  const layer = (depth: number, scrollFactor: number): React.CSSProperties => ({
    transform: `translate3d(calc(var(--px) * ${-depth}px), calc(var(--py) * ${-depth * 0.6}px + var(--sy) * ${scrollFactor}px), 0)`,
  });

  return (
    <div
      ref={sceneRef}
      className="relative h-[58svh] min-h-[400px] max-h-[560px] w-full md:h-[calc(100svh-64px)] md:max-h-none md:min-h-[520px] overflow-hidden bg-void-black"
      style={{ "--px": 0, "--py": 0, "--sy": 0 } as React.CSSProperties}
    >
      {/* Cielo */}
      <div className="absolute -inset-8 will-change-transform" style={layer(DEPTH.sky, 0.35)} aria-hidden="true">
        <Image
          src="/Assets/backgrounds/pageBackgrounds/Guild.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Jefes */}
      <div className="absolute inset-x-0 top-[37%] bottom-[29%] will-change-transform md:top-[10%] md:bottom-[40%]" style={layer(DEPTH.bosses, 0.15)}>
        <h1 className="sr-only">Jefes de Gremio</h1>
        <ul className="mx-auto grid h-full w-full max-w-[1280px] grid-cols-4 items-center gap-x-2 px-3 md:gap-x-8 md:px-6">
          {bosses.map((boss, i) => (
            <li key={boss.id} className="relative h-full min-h-0">
              <Link
                href={boss.url}
                aria-label={`${boss.name} — ver builds`}
                title={boss.name}
                className="boss-float group absolute -inset-x-1 inset-y-0 block md:inset-0"
                style={{ animationDelay: `${i * -1.3}s` }}
              >
                <Image
                  src={boss.img}
                  alt={boss.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 25vw, 300px"
                  className="object-contain drop-shadow-[0_0_24px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110"
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
        <Image
          src="/Assets/backgrounds/pageBackgrounds/GuildBase.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Fundido hacia el lienzo negro */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
