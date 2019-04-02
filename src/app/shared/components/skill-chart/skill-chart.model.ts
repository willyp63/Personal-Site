import * as d3 from 'd3';

export interface SkillData extends d3.SimulationNodeDatum {
  name: string;
  proficiency: number; // from 0-1 (1 = expert; 0 = novice)
}
