import { IBoss } from "@/Interfaces/IBoss";
import { validateBoss } from "@/Data/Bosses";

import millennialTree from "./arena/millennial-tree.json";
import silentSalt from "./arena/silent-salt.json";
import hollyberry from "./arena/hollyberry.json";
import rajapendra from "./arena/rajapendra.json";
import sugarSwan from "./arena/sugar-swan.json";

/**
 * ============================================================================
 * ARENA PvP — equipos en src/Data/arena/<id>.json
 * ============================================================================
 * Mismo formato que los jefes (ver src/Data/bosses/README.md). El campo
 * "category" indica la temporada de Arena. Para agregar un equipo, crea su
 * JSON e impórtalo aquí; el orden de esta lista es el de la página.
 */
const teamList = [millennialTree, silentSalt, hollyberry, rajapendra, sugarSwan].map(validateBoss);

export const ArenaTeams: Record<string, IBoss> = Object.fromEntries(teamList.map((t) => [t.id, t]));

export function getArenaTeamById(id: string): IBoss | undefined {
  return ArenaTeams[id];
}
