import { Specie } from "./Specie.model";

export interface GeneticMaterial {
  id: number;
  name: string;
  description: string,
  specie: Specie
}
