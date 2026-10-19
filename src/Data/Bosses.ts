import { IBoss, ToppingKey, TreasureKey } from "@/Interfaces/IBoss";
import { TOPPING_CATALOG } from "@/Data/Toppings";
import { Treasures } from "@/Data/Treasures";
import { Cookies } from "@/Data/cookies";

import redVelvet from "./bosses/red-velvet.json";
import avatarOfDestiny from "./bosses/avatar-of-destiny.json";
import machineGod from "./bosses/machine-god-of-the-eternal-void.json";
import livingAbyss from "./bosses/living-abyss.json";

/**
 * ============================================================================
 * JEFES DE GREMIO — los datos viven en src/Data/bosses/<id>.json
 * ============================================================================
 * Para cambiar la build de una galleta en un jefe, edita su JSON
 * (ver src/Data/bosses/README.md). Aquí solo se cargan y se validan, para que
 * un topping, tesoro o galleta mal escrito rompa el build con un error claro.
 */

export function validateBoss(data: unknown): IBoss {
  const boss = data as IBoss;
  const where = `bosses/${boss.id}.json`;
  const fail = (msg: string) => {
    throw new Error(`[${where}] ${msg}`);
  };

  boss.treasures.forEach((t: TreasureKey) => {
    if (!Treasures[t]) fail(`tesoro desconocido "${t}". Usa: ${Object.keys(Treasures).join(", ")}`);
  });

  boss.team.forEach((member) => {
    if (!Cookies[member.cookieId]) fail(`galleta desconocida "${member.cookieId}" (agrégala en Data/cookies.ts)`);
    if (!member.builds.length) fail(`${member.cookieId} no tiene builds`);

    member.builds.forEach((build, i) => {
      const label = `${member.cookieId} build ${i + 1}`;
      const keys: ToppingKey[] = [...build.toppings.map((p) => p.type), ...(build.tart ? [build.tart] : [])];
      keys.forEach((k) => {
        if (!TOPPING_CATALOG[k]) fail(`${label}: topping desconocido "${k}". Usa: ${Object.keys(TOPPING_CATALOG).join(", ")}`);
      });
      const total = build.toppings.reduce((sum, p) => sum + p.count, 0);
      if (total !== 5) fail(`${label}: los toppings suman ${total}, deben ser 5`);
    });
  });

  return boss;
}

const bossList = [redVelvet, avatarOfDestiny, machineGod, livingAbyss].map(validateBoss);

export const Bosses: Record<string, IBoss> = Object.fromEntries(bossList.map((b) => [b.id, b]));

export function getBossById(id: string): IBoss | undefined {
  return Bosses[id];
}
