/**
 * Las imágenes se buscan por convención con el id de la galleta:
 *   /Assets/cookies/Heads/<ID>_Cookie.webp         → cabeza (selector C1–C5, 1ª opción)
 *   /Assets/cookies/illustration/<ID>_Cookie.webp  → ilustración (build 1ª opción; selector 3ª)
 *   /Assets/cookies/<ID>_Cookie.webp               → imagen raíz (selector 2ª; build 2ª)
 * Ver src/lib/cookieImages.ts.
 *
 * "cookieClass" elige la imagen del biscuit (ver src/Data/Biscuits.ts):
 * ambush, bomber, charge, defense, healing, magic, ranged o support.
 * Clases verificadas en cookierun.wiki (oct 2026). Si falta, se muestra un "?".
 */
import type { CookieClass } from "@/Data/Biscuits";

export interface ICookie {
  id: string;
  name: string;
  cookieClass?: CookieClass;
}

export const Cookies: Record<string, ICookie> = {
  // --- Avatar of Destiny ---
  AMP: { id: "AMP", name: "À-la-Mode Pudding Cookie", cookieClass: "bomber" },
  MC: { id: "MC", name: "Mint Choco Cookie", cookieClass: "support" },
  CB: { id: "CB", name: "Crème Brûlée Cookie", cookieClass: "magic" },
  CF: { id: "CF", name: "Cream Ferret Cookie", cookieClass: "support" },
  SC: { id: "SC", name: "Star Coral Cookie", cookieClass: "support" },

  // --- Machine-God of the Eternal Void ---
  FJ: { id: "FJ", name: "Frilled Jellyfish Cookie", cookieClass: "support" },
  SF: { id: "SF", name: "Sea Fairy Cookie", cookieClass: "bomber" },
  SE: { id: "SE", name: "Seltzer Cookie", cookieClass: "support" },
  ME: { id: "ME", name: "Menthol Cookie", cookieClass: "bomber" },

  // --- Living Abyss ---
  BBP: { id: "BBP", name: "Blueberry Pie Cookie", cookieClass: "magic" },
  CP: { id: "CP", name: "Cream Puff Cookie", cookieClass: "support" },
  WA: { id: "WA", name: "Wind Archer Cookie", cookieClass: "ranged" },
  MB: { id: "MB", name: "Mallow Bunny Cookie", cookieClass: "support" },

  // --- Desert Raid: Sand Jelly Worm ---
  NT: { id: "NT", name: "Nutmeg Tiger Cookie", cookieClass: "support" },
  MS: { id: "MS", name: "Mala Sauce Cookie", cookieClass: "charge" },
  LZ: { id: "LZ", name: "Linzer Cookie", cookieClass: "support" },
  FS: { id: "FS", name: "Fire Spirit Cookie", cookieClass: "magic" },
  RJ: { id: "RJ", name: "Rajapendra Cookie", cookieClass: "charge" },

  // --- Cookie Alliance: Season 3-2 ---
  // Nombres por confirmar: renombra estas entradas cuando sepas qué galleta es.
  BSP: { id: "BSP", name: "Burning Spice Cookie", cookieClass: "charge" },
  SS: { id: "SS", name: "Sugar Swan Cookie", cookieClass: "healing" },
  AD: { id: "AD", name: "Ananas Dragon Cookie", cookieClass: "magic" },
  DE: { id: "DE", name: "Dark Enchantress Cookie", cookieClass: "magic" },
  TK: { id: "TK", name: "Timekeeper Cookie", cookieClass: "magic" },
  LT: { id: "LT", name: "Litmus Cookie", cookieClass: "healing" },

  // --- Cookie Alliance: Season 3-3 ---
  ES: { id: "ES", name: "Eternal Sugar Cookie", cookieClass: "bomber" },

  // --- Arena PvP ---
  MT: { id: "MT", name: "Millennial Tree Cookie", cookieClass: "support" },
  TS: { id: "TS", name: "Time Shadow Cookie", cookieClass: "ambush" },
  NQ: { id: "NQ", name: "Nether Queen Cookie", cookieClass: "healing" },
  HB: { id: "HB", name: "Hollyberry Cookie (Aegis)", cookieClass: "defense" },
  SSA: { id: "SSA", name: "Silent Salt Cookie", cookieClass: "ambush" },
  SD: { id: "SD", name: "Snapdragon Cookie", cookieClass: "support" },

  // --- Red Velvet Dragon ---
  PD: { id: "PD", name: "Pompom Dough Cookie", cookieClass: "support" },
  SM: { id: "SM", name: "Shadow Milk Cookie", cookieClass: "magic" },
  PJ: { id: "PJ", name: "Prune Juice Cookie", cookieClass: "bomber" },
  BS: { id: "BS", name: "Black Sapphire Cookie", cookieClass: "ambush" },
  CA: { id: "CA", name: "Candy Apple Cookie", cookieClass: "bomber" },
};

export function getCookie(id: string): ICookie {
  return Cookies[id] ?? { id, name: id };
}
