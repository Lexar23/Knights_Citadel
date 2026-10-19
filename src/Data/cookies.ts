/**
 * Las imágenes se buscan por convención con el id de la galleta:
 *   /Assets/cookies/Heads/<ID>_Cookie.webp         → cabeza (selector C1–C5, 1ª opción)
 *   /Assets/cookies/illustration/<ID>_Cookie.webp  → ilustración (build 1ª opción; selector 3ª)
 *   /Assets/cookies/<ID>_Cookie.webp               → imagen raíz (selector 2ª; build 2ª)
 * Ver src/lib/cookieImages.ts.
 */
export interface ICookie {
  id: string;
  name: string;
}

export const Cookies: Record<string, ICookie> = {
  // --- Avatar of Destiny ---
  AMP: { id: "AMP", name: "À-la-Mode Pudding Cookie" },
  MC: { id: "MC", name: "Mint Choco Cookie" },
  CB: { id: "CB", name: "Crème Brûlée Cookie" },
  CF: { id: "CF", name: "Cream Ferret Cookie" },
  SC: { id: "SC", name: "Star Coral Cookie" },

  // --- Machine-God of the Eternal Void ---
  FJ: { id: "FJ", name: "Frilled Jellyfish Cookie" },
  SF: { id: "SF", name: "Sea Fairy Cookie" },
  SE: { id: "SE", name: "Seltzer Cookie" },
  ME: { id: "ME", name: "Menthol Cookie" },

  // --- Living Abyss ---
  BBP: { id: "BBP", name: "Blueberry Pie Cookie" },
  CP: { id: "CP", name: "Cream Puff Cookie" },
  WA: { id: "WA", name: "Wind Archer Cookie" },
  MB: { id: "MB", name: "Mallow Bunny Cookie" },

  // --- Desert Raid: Sand Jelly Worm ---
  NT: { id: "NT", name: "Nutmeg Tiger Cookie" },
  MS: { id: "MS", name: "Mala Sauce Cookie" },
  LZ: { id: "LZ", name: "Linzer Cookie" },
  FS: { id: "FS", name: "Fire Spirit Cookie" },
  RJ: { id: "RJ", name: "Rajapendra Cookie" },

  // --- Cookie Alliance: Season 3-2 ---
  // Nombres por confirmar: renombra estas entradas cuando sepas qué galleta es.
  BSP: { id: "BSP", name: "Burning Spice Cookie" },
  SS: { id: "SS", name: "Sugar Swan Cookie" },
  AD: { id: "AD", name: "Ananas Dragon Cookie" },
  DE: { id: "DE", name: "Dark Enchantress Cookie" },
  TK: { id: "TK", name: "Timekeeper Cookie" },
  LT: { id: "LT", name: "Litmus Cookie" },

  // --- Red Velvet Dragon ---
  PD: { id: "PD", name: "Pompom Dough Cookie" },
  SM: { id: "SM", name: "Shadow Milk Cookie" },
  PJ: { id: "PJ", name: "Prune Juice Cookie" },
  BS: { id: "BS", name: "Black Sapphire Cookie" },
  CA: { id: "CA", name: "Candy Apple Cookie" },
};

export function getCookie(id: string): ICookie {
  return Cookies[id] ?? { id, name: id };
}
