import { Pokemon } from "../entities";
import { IPokemonRepository } from "../interfaces";

export class CreatePokemonUsecase {
  private pokemonRepository: IPokemonRepository;

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async excute(command: {
    name: string;
    hp: number;
    atk: number;
    def: number;
    atkspe: number;
    defspe: number;
    speed: number;
    type: string;
    image: string;
  }): Promise<Pokemon> {
    // create a new pokemon in db
    const newPokemon = await this.pokemonRepository.create({
      name: command.name,
      hp: command.hp,
      atk: command.atk,
      def: command.def,
      atkspe: command.atkspe,
      defspe: command.defspe,
      speed: command.speed,
      type: command.type,
      image: command.image,
    });
    return newPokemon;
  }
}
