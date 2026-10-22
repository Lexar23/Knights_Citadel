import { IBoss } from "@/Interfaces/IBoss";
import { IAllianceSeason } from "@/Interfaces/IAlliance";
import { validateBoss } from "@/Data/Bosses";

import season32 from "./alliance/season-3-2.json";
import season33 from "./alliance/season-3-3.json";

/**
 * ============================================================================
 * COOKIE ALLIANCE — temporadas en src/Data/alliance/<id>.json
 * ============================================================================
 * Cada temporada tiene varios equipos ("teams"); cada equipo usa el mismo
 * formato de "team" que los jefes. Marca con "current": true la temporada actual.
 */
const seasons = [season32, season33] as IAllianceSeason[];

/** Convierte un equipo de la temporada en una "guía" para reutilizar el bento. */
export function seasonTeamAsGuide(season: IAllianceSeason, index: number): IBoss {
  const team = season.teams[index];
  return validateBoss({
    id: `${season.id}-${index + 1}`,
    name: team.name,
    siglas: season.name,
    category: `${season.category} · ${season.name}`,
    url: "/alianza",
    background: season.background,
    treasures: team.treasures,
    team: team.team,
    notes: [],
    timing: [],
    credit: season.credit,
  });
}

// Valida todos los equipos al cargar (errores claros si el JSON está mal).
seasons.forEach((s) => s.teams.forEach((_, i) => seasonTeamAsGuide(s, i)));

export const currentSeason: IAllianceSeason | undefined = seasons.find((s) => s.current) ?? seasons[0];
