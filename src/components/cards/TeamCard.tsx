import React from "react";
import AllianceTeamCard from "@/components/alianza/AllianceTeamCard";
import { IAllianceTeam } from "@/Interfaces/IAlliance";

interface TeamCardProps {
  team?: IAllianceTeam;
}

export default function TeamCard({ team }: TeamCardProps) {
  if (!team) {
    return <div className="panel p-8 text-center text-deep-fern">Equipo no seleccionado</div>;
  }
  return <AllianceTeamCard team={team} />;
}
