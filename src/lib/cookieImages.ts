import fs from "node:fs";
import path from "node:path";

/**
 * Resolución de imágenes de galletas por convención (solo servidor: usa fs).
 * Para una galleta con id "MC" se buscan, (solo WEBP):
 *   public/Assets/cookies/Heads/MC_Cookie.webp
 *   public/Assets/cookies/illustration/MC_Cookie.webp
 *   public/Assets/cookies/MC_Cookie.webp
 * Basta con agregar el archivo en la carpeta correcta; no hay que tocar código.
 */
import type { ICookieImages } from "./cookieImagePick";

export type { ICookieImages } from "./cookieImagePick";
export { pickTileImage, pickBuildImage } from "./cookieImagePick";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const BASE = "/Assets/cookies";
const EXTENSIONS = ["webp"];

function find(dir: string, id: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const url = `${BASE}${dir}/${id}_Cookie.${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, url))) return url;
  }
  return undefined;
}

export function getCookieImages(id: string): ICookieImages {
  return {
    head: find("/Heads", id),
    illustration: find("/illustration", id),
    root: find("", id),
  };
}

/** Imágenes de varias galletas, indexadas por id (para pasarlas a componentes cliente). */
export function getCookieImageMap(ids: string[]): Record<string, ICookieImages> {
  return Object.fromEntries([...new Set(ids)].map((id) => [id, getCookieImages(id)]));
}

