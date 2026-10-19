import Link from "next/link";
import { notFound } from "next/navigation";
import { Events, getEventById } from "@/Data/Events";
import { getCookieImageMap } from "@/lib/cookieImages";
import BossBento from "@/components/jefes/BossBento";
import GuideInfo from "@/components/jefes/GuideInfo";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(Events).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const ev = getEventById(id);
  if (!ev) return { title: "Evento no encontrado" };
  return {
    title: `${ev.name} | Knights Citadel`,
    description: `Equipo estándar, builds y timings para ${ev.name} (${ev.category ?? "Evento"}).`,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;
  const ev = getEventById(id);

  if (!ev) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-8 md:px-6">
      <Link href="/eventos" className="link-ghost mb-6">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Eventos
      </Link>

      <BossBento boss={ev} images={getCookieImageMap(ev.team.map((m) => m.cookieId))} />

      <GuideInfo notes={ev.notes} timing={ev.timing} timingTitle={`timing — ${ev.siglas}`} credit={ev.credit} />
    </main>
  );
}
