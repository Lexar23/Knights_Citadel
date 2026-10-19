import { TreasureKey } from "@/Interfaces/IBoss";

export interface ITreasure {
  key: TreasureKey;
  name: string;
  img: string;
}

export const Treasures: Record<TreasureKey, ITreasure> = {
  red: { key: "red", name: "Silbato Carmesí", img: "/Assets/treasures/red.webp" },
  silbato: { key: "silbato", name: "Silbato de director", img: "/Assets/treasures/silbato.webp" },
  pergamino: { key: "pergamino", name: "Pergamino", img: "/Assets/treasures/pergamino.webp" },
  reloj: { key: "reloj", name: "El reloj de gelatina ", img: "/Assets/treasures/reloj.webp" },
  speed: { key: "speed", name: "Túnicas encantadas", img: "/Assets/treasures/speed.webp" },
};
