import Link from "next/link";
import { notFound } from "next/navigation";
import { ArenaTeams, getArenaTeamById } from "@/Data/Arena";
import { getCookieImageMap } from "@/lib/cookieImages";
import BossBento from "@/components/jefes/BossBento";
import GuideInfo from "@/components/jefes/GuideInfo";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(ArenaTeams).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const team = getArenaTeamById(id);
  if (!team) return { title: "Equipo no encontrado" };
  return {
    title: `${team.name} | Arena PvP | Knights Citadel`,
    description: `Builds de toppings, tarta, biscuit y tesoros del ${team.name} para la Arena.`,
  };
}

export default async function ArenaTeamPage({ params }: PageProps) {
  const { id } = await params;
  const team = getArenaTeamById(id);

  if (!team) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1280px] px-4 pt-8 md:px-6">
      <Link href="/arena" className="link-ghost mb-6">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Arena PvP
      </Link>

      <BossBento boss={team} images={getCookieImageMap(team.team.map((m) => m.cookieId))} />

      <GuideInfo notes={team.notes} timing={team.timing} timingTitle={`timing — ${team.siglas}`} credit={team.credit} showTiming={false} />
    </main>
  );
}
