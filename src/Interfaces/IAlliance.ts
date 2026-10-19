import { IBossCookie, IGuideCredit, TreasureKey } from "@/Interfaces/IBoss";

export interface IAllianceTeam {
  id: string;
  name: string;
  teamNumber: number;
  role: string;
  description: string;
  suggestedCookies?: string[];
  suggestedTreasures?: string[];
  notes?: string[];
}

export interface IAllianceSeasonTeam {
  name: string;
  treasures: TreasureKey[];
  team: IBossCookie[];
}

export interface IAllianceSeason {
  id: string;
  name: string;
  category: string;
  /** Marca la temporada que se muestra como actual. */
  current?: boolean;
  background: string;
  teams: IAllianceSeasonTeam[];
  notes: string[];
  timing: string[];
  credit?: IGuideCredit;
}
