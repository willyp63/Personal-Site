import * as d3 from 'd3';

export interface SkillData extends d3.SimulationNodeDatum {
  name: string;
  proficiency: number; // from 1-100 (100 = expert; 1 = novice)
  radius: number;
}
