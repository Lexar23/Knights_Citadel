import { IBoss } from "@/Interfaces/IBoss";
import { validateBoss } from "@/Data/Bosses";

import sandJellyWorm from "./events/sand-jelly-worm.json";

/**
 * ============================================================================
 * EVENTOS — guías en src/Data/events/<id>.json
 * ============================================================================
 * Mismo formato que los jefes (ver src/Data/bosses/README.md), más
 * "category" (ej. "Desert Raid"). Para agregar uno, crea su JSON e impórtalo aquí.
 */
const eventList = [sandJellyWorm].map(validateBoss);

export const Events: Record<string, IBoss> = Object.fromEntries(eventList.map((e) => [e.id, e]));

export function getEventById(id: string): IBoss | undefined {
  return Events[id];
}
