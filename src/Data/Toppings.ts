import { ToppingKey } from "@/Interfaces/IBoss";

/**
 * Catálogo maestro de Toppings de Cookie Run: Kingdom
 */
export interface ToppingCatalogItem {
  key: ToppingKey;
  name: string;
  shortName: string;
  /** Stat principal que otorga el set. */
  stat: string;
  icon: string;
  tart: string;
  bonus3?: string;
  bonus5?: string;
}

export const TOPPING_CATALOG: Record<ToppingKey, ToppingCatalogItem> = {
  raspberry: {
    key: "raspberry",
    name: "Frambuesa Ardiente",
    shortName: "Frambuesa",
    stat: "ATK",
    icon: "/Assets/toppings/raspberry.webp",
    tart: "/Assets/tarts/raspberry.webp",
    bonus3: "+3% ATQ",
    bonus5: "+5% ATQ Adicional",
  },
  chocolate: {
    key: "chocolate",
    name: "Chocolate Rápido",
    shortName: "Chocolate",
    stat: "CD",
    icon: "/Assets/toppings/chocolatechip.webp",
    tart: "/Assets/tarts/chocolate.webp",
    bonus3: "+3% Reducción Cooldown",
    bonus5: "+5% Reducción Cooldown",
  },
  apple: {
    key: "apple",
    name: "Gelatina de Manzana",
    shortName: "Manzana",
    stat: "Crit",
    icon: "/Assets/toppings/applejelly.webp",
    tart: "/Assets/tarts/apple.webp",
    bonus3: "+3% Prob. Crítica",
    bonus5: "+5% Prob. Crítica",
  },
  almond: {
    key: "almond",
    name: "Almendra Sólida",
    shortName: "Almendra",
    stat: "DMR",
    icon: "/Assets/toppings/almond.webp",
    tart: "/Assets/tarts/almond.webp",
    bonus3: "+3% Res. Daño",
    bonus5: "+5% Res. Daño",
  },
  caramel: {
    key: "caramel",
    name: "Caramelo Rebotante",
    shortName: "Caramelo",
    stat: "ATK SPD",
    icon: "/Assets/toppings/caramel.webp",
    tart: "/Assets/tarts/caramel.webp",
    bonus3: "+3% Vel. Ataque",
    bonus5: "+5% Vel. Ataque",
  },
  hazelnut: {
    key: "hazelnut",
    name: "Avellana Dura",
    shortName: "Avellana",
    stat: "DEF",
    icon: "/Assets/toppings/hazelnut.webp",
    tart: "/Assets/tarts/hazelnut.webp",
    bonus3: "+3% Defensa",
    bonus5: "+5% Defensa",
  },
  kiwi: {
    key: "kiwi",
    name: "Kiwi Vivaz",
    shortName: "Kiwi",
    stat: "Debuff Res",
    icon: "/Assets/toppings/kiwi.webp",
    tart: "/Assets/tarts/kiwi.webp",
    bonus3: "+3% Res. Debuff",
    bonus5: "+5% Res. Debuff",
  },
  peanut: {
    key: "peanut",
    name: "Cacahuate Robusto",
    shortName: "Cacahuate",
    stat: "HP",
    icon: "/Assets/toppings/peanut.webp",
    tart: "/Assets/tarts/peanut.webp",
    bonus3: "+3% PS Máximos",
    bonus5: "+5% PS Máximos",
  },
  candy: {
    key: "candy",
    name: "Caramelo Dulce",
    shortName: "Caramelo Dulce",
    stat: "Amp Buff",
    icon: "/Assets/toppings/chocolatecandy.webp",
    tart: "/Assets/tarts/candy.webp",
    bonus3: "+3% Amplificar Buff",
    bonus5: "+5% Amplificar Buff",
  },
  walnut: {
    key: "walnut",
    name: "Nuez Jugosa",
    shortName: "Nuez",
    stat: "DEF",
    icon: "/Assets/toppings/walnut.webp",
    tart: "/Assets/tarts/walnut.webp",
    bonus3: "+3% Defensa",
    bonus5: "+5% Defensa",
  },
};
