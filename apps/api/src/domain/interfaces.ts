import { Trainer, Pokemon } from "./entities";

export interface ITrainerRepository {
  create(trainer: { name: string; gender: string }): Promise<Trainer>;

  findAll(): Promise<Trainer[]>;
}

export interface IPokemonRepository {
  create(pokemon: {
    name: string;
    ability: string;
    force: number;
    //trainer: Trainer;
  }): Promise<Pokemon>;

  findAll(): Promise<Pokemon[]>;
}
