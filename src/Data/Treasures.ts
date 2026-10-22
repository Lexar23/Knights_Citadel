import { TreasureKey } from "@/Interfaces/IBoss";

export interface ITreasure {
  key: TreasureKey;
  name: string;
  /**
   * Imagen del tesoro. Si falta se muestra un marcador con las iniciales.
   * Para agregarla: guarda public/Assets/treasures/<key>.webp y escribe aquí su ruta.
   */
  img?: string;
}

export const Treasures: Record<TreasureKey, ITreasure> = {
  red: { key: "red", name: "Silbato Carmesí", img: "/Assets/treasures/red.webp" },
  silbato: { key: "silbato", name: "Silbato de director", img: "/Assets/treasures/silbato.webp" },
  pergamino: { key: "pergamino", name: "Pergamino", img: "/Assets/treasures/pergamino.webp" },
  reloj: { key: "reloj", name: "El reloj de gelatina ", img: "/Assets/treasures/reloj.webp" },
  speed: { key: "speed", name: "Túnicas encantadas", img: "/Assets/treasures/speed.webp" },

  // --- Arena PvP (imágenes pendientes) ---
  jewelbox: { key: "jewelbox", name: "Mysterious Jewelry Box" },
  tickwatch: { key: "tickwatch", name: "Ticking Jelly Watch" },
  papercharm: { key: "papercharm", name: "Thunder God's Paper Charm" },
  swanfeather: { key: "swanfeather", name: "Sugar Swan's Shining Feather" },
  sagegem: { key: "sagegem", name: "Great Sage's Gem" },
  explorermonocle: { key: "explorermonocle", name: "Explorer's Monocle" },
  ragingdunes: { key: "ragingdunes", name: "Vial of Raging Dunes" },
  booksellermonocle: { key: "booksellermonocle", name: "Bookseller's Monocle" },
};

/** Iniciales para el marcador de un tesoro sin imagen (ej. "MJ"). */
export function treasureInitials(name: string): string {
  return name
    .replace(/['’]s\b/g, "")
    .split(/\s+/)
    .filter((w) => /^[A-ZÁÉÍÓÚ]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}
