export interface SkillData {
  name: string;
  proficiency: number; // from 1-100 (100 = expert; 1 = novice)
}

export interface SkillChartData {
  skills: SkillData[];
}
