import Image from "next/image";
import Link from "next/link";
import { gremios } from "@/Data/Gremios";

const sections = [
  {
    href: "/gremios",
    eyebrow: "Comunidad",
    title: "Gremios",
    description: "Nuestros 3 gremios activos, sus requisitos de daño y el lugar ideal para tu progreso.",
    image: "/Assets/backgrounds/pageBackgrounds/Guild.webp",
  },
  {
    href: "/jefes",
    eyebrow: "Batalla de Gremio",
    title: "Jefes de Gremio",
    description: "Equipos estándar, builds de toppings, stats objetivo y timings para cada jefe.",
    image: "/Assets/backgrounds/pageBackgrounds/Bosses.webp",
  },
  {
    href: "/arena",
    eyebrow: "Kingdom Arena",
    title: "Arena PvP",
    description: "Los mejores equipos de la temporada con sus builds de toppings, biscuits y tesoros.",
    image: "/Assets/backgrounds/pageBackgrounds/Pvp.webp",
  },
  {
    href: "/alianza",
    eyebrow: "Modo cooperativo",
    title: "Alianza",
    description: "Rotación estratégica en 3 equipos para conquistar todas las oleadas.",
    image: "/Assets/backgrounds/pageBackgrounds/Alliance.webp",
  },
  {
    href: "/eventos",
    eyebrow: "Próximamente",
    title: "Eventos",
    description: "Eventos de gremio, torneos internos y anuncios especiales.",
    image: "/Assets/backgrounds/pageBackgrounds/Event.webp",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-[55%] h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(127,238,100,0.55), rgba(24,183,89,0.15), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-4 pb-20 pt-24 text-center md:px-6 md:pt-32">
          <p className="eyebrow mb-5">Alianza de Cookie Run: Kingdom</p>
          <h1 className="text-[44px] leading-none tracking-[-0.4px] md:text-display">
            <span className="text-lime-pulse">Knights Citadel</span>
            <br />
            guías, builds y gremios
          </h1>
          <p className="mt-6 max-w-[640px] text-subheading text-moss-80">
            Todo lo que necesita tu gremio para la Batalla de Gremio: equipos estándar, toppings, stats objetivo y
            timings de cada jefe.
          </p>
          {/* <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/jefes" className="pill-accent">
              Ver builds de jefes
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/gremios" className="btn-ghost">
              Conocer los gremios
            </Link>
          </div> */}
        </div>
      </section>

      {/* Secciones */}
      <section className="border-t border-phosphor-blue-black bg-ground-iron/40">
        <div className="mx-auto max-w-[1280px] px-4 py-20 md:px-6">
          <p className="eyebrow">Secciones</p>
          <h2 className="mt-3 text-heading md:text-heading-lg">Explora la ciudadela</h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group panel overflow-hidden hover:border-circuit-border md:last:odd:col-span-2"
              >
                <div className="relative h-44 w-full overflow-hidden md:h-52">
                  <Image
                    src={section.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover opacity-70 grayscale-[35%] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                  />
                  <div className="img-veil absolute inset-0" />
                </div>
                <div className="p-8 pt-6">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h3 className="mt-2 flex items-center justify-between text-heading-sm">
                    {section.title}
                    <span className="text-fern-link transition-transform group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className="mt-2 text-body text-sage-60">{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gremios strip */}
      <section className="mx-auto w-full max-w-[1280px] px-4 pt-20 md:px-6">
        <p className="eyebrow">Nuestros gremios</p>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3">
          {gremios.map((g) => (
            <Link key={g.id} href={`/gremios/${g.id}`} className="group flex items-baseline justify-between border-b border-phosphor-blue-black pb-4">
              <span className="font-display text-[20px] text-phosphor-white">{g.name}</span>
              <span className="text-[14px] text-deep-fern group-hover:text-moss-70">{g.ranking}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
