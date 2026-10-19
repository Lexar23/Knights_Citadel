import React from "react";
import { IAllianceTeam } from "@/Interfaces/IAlliance";

interface AllianceTeamCardProps {
  team: IAllianceTeam;
}

export default function AllianceTeamCard({ team }: AllianceTeamCardProps) {
  return (
    <div className="panel flex flex-col gap-8 p-8 hover:border-circuit-border">
      {/* Header del Equipo */}
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="chip">Equipo #{team.teamNumber}</span>
          <span className="text-[12px] text-deep-fern">{team.role}</span>
        </div>
        <h3 className="text-heading-sm">{team.name}</h3>
        <p className="mt-3 text-body text-sage-60">{team.description}</p>
      </div>

      {/* 5 Galletas Sugeridas */}
      <div>
        <h4 className="eyebrow mb-3 font-sans">Galletas recomendadas · 5 slots</h4>
        <ol className="flex flex-col gap-2">
          {team.suggestedCookies?.map((cookie, idx) => (
            <li
              key={idx}
              className="grid grid-cols-[3ch_1fr] items-center gap-2 rounded-[14px] border border-pine-15 bg-carbon-veil/60 px-3 py-2.5"
            >
              <span className="font-mono text-[12px] text-sage-40">S{idx + 1}</span>
              <span className="text-[14px] text-moss-80">{cookie}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 3 Tesoros Sugeridos */}
      {team.suggestedTreasures && team.suggestedTreasures.length > 0 && (
        <div>
          <h4 className="eyebrow mb-3 font-sans">Tesoros · 3 slots</h4>
          <ul className="flex flex-wrap gap-2">
            {team.suggestedTreasures.map((treasure, idx) => (
              <li key={idx} className="chip">
                <span className="font-mono text-sage-40">{idx + 1}</span>
                {treasure}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notas / Recomendaciones */}
      {team.notes && team.notes.length > 0 && (
        <div className="mt-auto rounded-[14px] border border-phosphor-blue-black p-4">
          <span className="eyebrow mb-2 block">Consejos de desempeño</span>
          <ul className="flex flex-col gap-1.5 text-[14px] text-sage-60">
            {team.notes.map((note, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-moss-70" aria-hidden="true">›</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
