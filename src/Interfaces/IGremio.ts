export interface IGremio {
  id: string;
  name: string;
  slogan?: string;
  description: string;
  level: number;
  leader: string;
  membersCount: number;
  maxMembers: number;
  ranking: string;
  bannerImage?: string;
  requirements?: string[];
  focus?: string; // e.g. "Competitivo", "Casual", "En desarrollo"
}
