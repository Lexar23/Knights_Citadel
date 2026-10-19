/** Rutas de imagen encontradas para una galleta (ver cookieImages.ts). */
export interface ICookieImages {
  head?: string;
  illustration?: string;
  root?: string;
}

/** Selector de equipo (C1–C5): cabeza → raíz → ilustración. */
export const pickTileImage = (img?: ICookieImages) => img?.head ?? img?.root ?? img?.illustration;

/** Build: ilustración → raíz. */
export const pickBuildImage = (img?: ICookieImages) => img?.illustration ?? img?.root;
