import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bosses, getBossById } from "@/Data/Bosses";
import { getCookieImageMap } from "@/lib/cookieImages";
import BossBento from "@/components/jefes/BossBento";
import GuideInfo from "@/components/jefes/GuideInfo";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(Bosses).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const boss = getBossById(id);
  if (!boss) return { title: "Jefe no encontrado" };
  return {
    title: `${boss.name} | Knights Citadel`,
    description: `Equipo estándar, builds y timings para ${boss.name}.`,
  };
}

export default async function BossPage({ params }: PageProps) {
  const { id } = await params;
  const boss = getBossById(id);

  if (!boss) {
    notFound();
  }

  const others = Object.values(Bosses).filter((b) => b.id !== boss.id);

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-8 md:px-6">
      <Link href="/jefes" className="link-ghost mb-6">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Jefes de Gremio
      </Link>

      <BossBento boss={boss} images={getCookieImageMap(boss.team.map((m) => m.cookieId))} />

      {/* 13 · Info */}
      <GuideInfo notes={boss.notes} timing={boss.timing} timingTitle={`timing — ${boss.siglas}`} credit={boss.credit} />

      {/* Otros jefes */}
      <section className="pt-16">
        <p className="eyebrow">Otros jefes</p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {others.map((b) => (
            <Link key={b.id} href={b.url} className="group panel flex items-center gap-4 p-4 hover:border-circuit-border">
              <span className="relative h-14 w-14 shrink-0">
                <Image src={b.img ?? b.background} alt="" fill sizes="56px" className="object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[16px] text-phosphor-white">{b.name}</span>
                <span className="text-[12px] uppercase tracking-[0.6px] text-deep-fern">{b.siglas}</span>
              </span>
              <span className="ml-auto text-fern-link group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
