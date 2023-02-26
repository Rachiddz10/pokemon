export type Trainer = {
  id: number;
  name: string;
  gender: string;
  pokemons?: Pokemon[];
};

export type Pokemon = {
  id: number;
  name: string;
  hp: number;
  atk: number;
  def: number;
  atkspe: number;
  defspe: number;
  speed: number;
  type: string;
  image: string;
  trainerId: number | null;
};
