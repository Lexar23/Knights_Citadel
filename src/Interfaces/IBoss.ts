export type ToppingKey =
  | "raspberry"
  | "chocolate"
  | "apple"
  | "almond"
  | "caramel"
  | "hazelnut"
  | "kiwi"
  | "peanut"
  | "candy"
  | "walnut";

export type TreasureKey =
  | "red"
  | "silbato"
  | "pergamino"
  | "reloj"
  | "speed"
  // Arena PvP
  | "jewelbox"
  | "tickwatch"
  | "papercharm"
  | "swanfeather"
  | "sagegem"
  | "explorermonocle"
  | "ragingdunes"
  | "booksellermonocle";

/** Una pieza del set de toppings: tipo + cantidad de toppings (sin contar la tarta). */
export interface IToppingPiece {
  type: ToppingKey;
  count: number;
}

/** Objetivo de stat a buscar (ej. "CD" → "35%"). */
export interface IStatTarget {
  label: string;
  value: string;
  note?: string;
  /** Marca el stat que más importa en la build. */
  key?: boolean;
}

export interface ICookieBuild {
  name?: string;
  /** Beascuit / biscuit recomendado (ej. "4 Daño Agua"). */
  biscuit: string;
  /** Tarta de toppings (obligatoria). Va aparte: no es uno de los 5 toppings. */
  tart: ToppingKey;
  /** Exactamente 5 toppings (sin contar la tarta). */
  toppings: IToppingPiece[];
  stats: IStatTarget[];
  notes?: string[];
}

export interface IBossCookie {
  cookieId: string;
  /** Etiqueta de la guía (ej. "Daño a Monstruos"). */
  focus?: string;
  builds: ICookieBuild[];
  notes?: string[];
}

export interface IGuideCredit {
  author: string;
  contacts?: { label: string; value: string }[];
  note?: string;
}

export interface IBoss {
  id: string;
  name: string;
  /** Nombre corto que usa la comunidad. */
  siglas: string;
  /** Modo de juego (por defecto "Batalla de Gremio"). */
  category?: string;
  url: string;
  img?: string;
  /** Silueta (.webp en enemies/silhouette/) que se muestra solo en la página /jefes. */
  listImg?: string;
  background: string;
  element?: string;
  treasures: TreasureKey[];
  treasureNote?: string;
  team: IBossCookie[];
  notes: string[];
  timing: string[];
  credit?: IGuideCredit;
}
