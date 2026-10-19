import Image from "next/image";
import Link from "next/link";

interface BossCard {
  id: string;
  name: string;
  siglas: string;
  url: string;
  img: string;
  background: string;
}

interface BossCardsProps {
  bosses: BossCard[];
}

/** Versión móvil de /jefes: tarjetas 2×2 con la imagen y el nombre del jefe. */
export default function BossCards({ bosses }: BossCardsProps) {
  return (
    <ul className="grid grid-cols-2 gap-3 px-4 pb-4 pt-6 md:hidden">
      {bosses.map((boss) => (
        <li key={boss.id}>
          <Link
            href={boss.url}
            aria-label={`${boss.name} — ver builds`}
            className="group panel flex h-full flex-col overflow-hidden active:translate-y-[2px]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image src={boss.background} alt="" fill sizes="50vw" className="object-cover opacity-45" />
              <div className="img-veil absolute inset-0" />
              <div className="absolute inset-3">
                <Image
                  src={boss.img}
                  alt={boss.name}
                  fill
                  sizes="45vw"
                  className="object-contain drop-shadow-[0_4px_10px_rgba(10,6,30,0.6)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="chip absolute left-2 top-2">{boss.siglas}</span>
            </div>
            <div className="flex flex-1 items-center justify-between gap-2 px-3 py-3">
              <span className="font-cookie text-[15px] leading-tight text-phosphor-white">{boss.name}</span>
              <span className="text-lime-pulse" aria-hidden="true">
                →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
