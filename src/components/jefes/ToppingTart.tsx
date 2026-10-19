import Image from "next/image";
import { IToppingPiece, ToppingKey } from "@/Interfaces/IBoss";
import { TOPPING_CATALOG } from "@/Data/Toppings";

interface ToppingTartProps {
  tart: ToppingKey;
  toppings: IToppingPiece[];
  /** Tamaño fijo en px; si se omite llena el contenedor (cuadrado). */
  size?: number;
}

// Ángulos de las 5 puntas de la tarta en estrella (empezando arriba, sentido horario).
const ARM_ANGLES = [-90, -18, 54, 126, 198];
// Medidas en % del lado, calibradas sobre las ranuras de /Assets/tarts/*.webp
const CENTER_X = 49.5;
const CENTER_Y = 51;
const RADIUS = 24;
const TOPPING_W = 26;
const TOPPING_H = 37;

/** Tarta de toppings en estrella, al estilo del menú del juego. */
export default function ToppingTart({ tart, toppings, size }: ToppingTartProps) {
  const slots = toppings.flatMap((piece) => Array.from({ length: piece.count }, () => piece.type)).slice(0, 5);

  return (
    <div
      className={`relative shrink-0 ${size ? "" : "aspect-square w-full"}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <Image
        src={TOPPING_CATALOG[tart].tart}
        alt={`Tarta de ${TOPPING_CATALOG[tart].shortName}`}
        fill
        sizes={size ? `${size}px` : "240px"}
        className="object-contain"
      />
      {slots.map((type, i) => {
        const angle = ARM_ANGLES[i];
        const rad = (angle * Math.PI) / 180;
        const left = CENTER_X + RADIUS * Math.cos(rad) - TOPPING_W / 2;
        const top = CENTER_Y + RADIUS * Math.sin(rad) - TOPPING_H / 2;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${TOPPING_W}%`,
              height: `${TOPPING_H}%`,
              transform: `rotate(${angle + 90}deg)`,
            }}
          >
            <Image src={TOPPING_CATALOG[type].icon} alt={TOPPING_CATALOG[type].shortName} fill sizes="56px" className="object-contain" />
          </div>
        );
      })}
    </div>
  );
}
