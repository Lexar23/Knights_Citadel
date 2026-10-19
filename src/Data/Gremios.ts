import { IGremio } from "@/Interfaces/IGremio";

/**
 * ============================================================================
 * ARCHIVO DE DATOS DE GREMIOS
 * ============================================================================
 * Puedes editar fácilmente el nombre ('name'), descripción, requisitos o cualquier
 * otro campo de cada uno de los 3 gremios aquí.
 */
export const gremios: IGremio[] = [
  {
    id: "cinder-knights",
    name: "Cinder Knights", // <-- Cambia el nombre del Gremio 1 aquí
    slogan: "Honor, gloria y lealtad hasta el final",
    description: "El gremio principal y más antiguo de la alianza, enfocado en el top de batallas de gremio y cooperación máxima.",
    level: 70,
    leader: "Camera04_",
    membersCount: 30,
    maxMembers: 30,
    ranking: "Challenger 2",
    focus: "Competitivo",
    bannerImage: "/Assets/backgrounds/pageBackgrounds/Guild.webp",
    requirements: [
      "18/18 ataques semanales en Batalla de Gremio",
      "Daño Jefe LLA 40B",
      "Daño Jefe MGEV 29B",
      "Daño Jefe AOD 25B",
      "Discord recomendado",
      "Alianza Maestro",
      "Donación activa en el Museo de Reliquias",
    ],
  },
  {
    id: "apple-knights",
    name: "Apple Knights", // <-- Cambia el nombre del Gremio 2 aquí
    slogan: "Fuerza y elegancia en cada batalla",
    description: "Gremio secundario de alto rendimiento, ideal para jugadores avanzados en ascenso continuo hacia el competitivo.",
    level: 70,
    leader: "OATH♖RemBoCRK",
    membersCount: 30,
    maxMembers: 30,
    ranking: "Gran Maestro I",
    focus: "Semi-Competitivo",
    bannerImage: "/Assets/backgrounds/pageBackgrounds/GuildBase.webp",
    requirements: [
      "18/18 ataques semanales en Batalla de Gremio",
      "Daño Jefe LLA 20B",
      "Daño Jefe MGEV 19B",
      "Daño Jefe AOD 17B",
      "Discord recomendado",
      "Donación activa en el Museo de Reliquias",
    ],
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    slogan: "Donde nacen las futuras leyendas",
    description: "Academia formativa de la alianza para nuevos caballeros que desean aprender mecánicas, builds de jefes y progresar.",
    level: 70,
    leader: "Yukine01",
    membersCount: 26,
    maxMembers: 30,
    ranking: "Gran Maestro I",
    focus: "Desarrollo y Formación",
    bannerImage: "/Assets/backgrounds/pageBackgrounds/Guild.webp",
    requirements: [
       "18/18 ataques semanales en Batalla de Gremio",
      "Sin requisito de Da@o",
      "Discord recomendado",
      "Donación activa en el Museo de Reliquias",
    ],
  },
];

export function getGremioById(id: string): IGremio | undefined {
  return gremios.find((gremio) => gremio.id === id);
}
