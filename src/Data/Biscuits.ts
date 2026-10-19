/**
 * Imágenes de biscuit (beascuit) por clase de galleta.
 * Archivos en public/Assets/biscuit/<clase>.webp
 */
export type CookieClass = "ambush" | "bomber" | "charge" | "defense" | "healing" | "magic" | "ranged" | "support";

export interface IBiscuitArt {
  cookieClass: CookieClass;
  label: string;
  img: string;
}

export const BISCUITS: Record<CookieClass, IBiscuitArt> = {
  ambush: { cookieClass: "ambush", label: "Emboscada", img: "/Assets/biscuit/ambush.webp" },
  bomber: { cookieClass: "bomber", label: "Bombardero", img: "/Assets/biscuit/bomber.webp" },
  charge: { cookieClass: "charge", label: "Carga", img: "/Assets/biscuit/charge.webp" },
  defense: { cookieClass: "defense", label: "Defensa", img: "/Assets/biscuit/defense.webp" },
  healing: { cookieClass: "healing", label: "Curación", img: "/Assets/biscuit/healing.webp" },
  magic: { cookieClass: "magic", label: "Mágico", img: "/Assets/biscuit/magic.webp" },
  ranged: { cookieClass: "ranged", label: "A distancia", img: "/Assets/biscuit/ranged.webp" },
  support: { cookieClass: "support", label: "Apoyo", img: "/Assets/biscuit/support.webp" },
};
