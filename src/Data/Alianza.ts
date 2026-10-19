import { IAllianceTeam } from "@/Interfaces/IAlliance";

/**
 * ============================================================================
 * ARCHIVO DE DATOS DE LA ALIANZA (3 EQUIPOS)
 * ============================================================================
 * Puedes personalizar los nombres, roles, composiciones y estrategias de los
 * 3 equipos de la Alianza aquí.
 */
export const allianceTeams: IAllianceTeam[] = [
  {
    id: "equipo-1",
    name: "Equipo 1 - Avanzada y Oleadas",
    teamNumber: 1,
    role: "Limpieza Rápida de Oleadas (Fases 1 a 20)",
    description: "Equipo enfocado en daño masivo en área (AoE) para limpiar las primeras rondas de enemigos sin recibir daño significativo.",
    suggestedCookies: [
      "Galleta Frontal (Tanque / Rush)",
      "DPS de Área Principal",
      "Sub DPS Rápido",
      "Buffer de Velocidad / Ataque",
      "Sanador Continuo",
    ],
    suggestedTreasures: [
      "Pergamino del Anciano Peregrino",
      "Reloj de Vainilla Plateado",
      "Silbato del Conductor Fantasma",
    ],
    notes: [
      "Priorizar tiempo de reutilización rápido (Swift Chocolate).",
      "Asegurar que el sanador mantenga la salud al 100% para las siguientes oleadas.",
    ],
  },
  {
    id: "equipo-2",
    name: "Equipo 2 - Resistencia y Élite",
    teamNumber: 2,
    role: "Supervivencia y Mini-Jefes (Fases 21 a 40)",
    description: "Composición con alta defensa, escudos y reducción de daño para resistir oleadas de monstruos élite con alto daño.",
    suggestedCookies: [
      "Tanque Defensivo Pesado",
      "DPS con Reducción de Defensa",
      "Galleta de Control de Masas (Stun/Freeze)",
      "Soporte con Escudo",
      "Sanador de Ráfaga",
    ],
    suggestedTreasures: [
      "Pergamino de Ataque",
      "Pluma Resucitadora",
      "Monóculo Purificador",
    ],
    notes: [
      "Equipar Solid Almond en la línea frontal para mitigar picos de daño.",
      "Guardar las habilidades de escudo para los ataques cargados de los mini-jefes.",
    ],
  },
  {
    id: "equipo-3",
    name: "Equipo 3 - Asesino de Jefes Finales",
    teamNumber: 3,
    role: "DPS Puro de Objetivo Único (Fases 41 a 60)",
    description: "Equipo especializado en aniquilar a los jefes finales con ráfagas de daño crítico a un solo objetivo.",
    suggestedCookies: [
      "Líder / Tanque con Buff de Crítico",
      "Hiper-Carry de Objetivo Único",
      "DPS de Daño Porcentual de Salud",
      "Buffer de Daño Crítico",
      "Soporte con Invulnerabilidad",
    ],
    suggestedTreasures: [
      "Pergamino del Peregrino Anciano",
      "Guadaña Sombría",
      "Reloj Brillante",
    ],
    notes: [
      "Sincronizar todos los buffs antes de activar la habilidad del DPS principal.",
      "Maximizar daño crítico y perforación defensiva con Beascuits.",
    ],
  },
];
