import { Trainer, Pokemon } from "./entities";

export interface ITrainerRepository {

  create(trainer: { name: string; gender: string }): Promise<Trainer>;
  findAll(): Promise<Trainer[]>;


  update(
    id: number,
    trainer: { name?: string; gender?: string }
  ): Promise<Trainer>;
  delete(id: number): Promise<Trainer[]>;
}

export interface IPokemonRepository {
  findByName(name: string): Pokemon[] | PromiseLike<Pokemon[]>;
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
  delete(id: number): Promise<Pokemon[]>;
  findByName(name: string): Promise<Pokemon[]>;
  findByType(type: string): Promise<Pokemon[]>;
  findBySpeed(speed: number): Promise<Pokemon[]>;
  findByDefense(defense: number): Promise<Pokemon[]>;
  findByhp(hp: number): Promise<Pokemon[]>;
  findByatkspe( atke: number): Promise<Pokemon[]>;
  findByatke( atke: number): Promise<Pokemon[]>;
  findBydefspe( atke: number): Promise<Pokemon[]>;
}
