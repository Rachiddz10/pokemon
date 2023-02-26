import { Trainer, Pokemon } from "./entities";

export interface ITrainerRepository {
  create(trainer: { name: string; gender: string }): Promise<Trainer>;
  findAll(): Promise<Trainer[]>;
  update(
    id: number,
    trainer: { name?: string; gender?: string }
  ): Promise<Trainer>;
  addPokemonToTrainer(
    id: number,
    trainer: {
      pokemonId: number;
    }
  ): Promise<Trainer>;
  delete(id: number): Promise<Trainer[]>;
}

export interface IPokemonRepository {
  create(pokemon: {
    name: string;
    hp: number;
    atk: number;
    def: number;
    atkspe: number;
    defspe: number;
    speed: number;
    type: string;
    image: string;
    //trainer: Trainer;
  }): Promise<Pokemon>;

  findAll(): Promise<Pokemon[]>;
  update(
    id: number,
    pokemon: {
      name: string;
      hp: number;
      atk: number;
      def: number;
      atkspe: number;
      defspe: number;
      speed: number;
      type: string;
      image: string;
    }
  ): Promise<Pokemon>;
  linkPokemonToTrainer(
    id: number,
    pokemon: {
      trainerId: number;
    }
  ): Promise<Pokemon>;
  delete(id: number): Promise<Pokemon[]>;
}
