import { Pokemon } from "../entities";
import { IPokemonRepository } from "../interfaces";

export class CreatePokemonUsecase {
  private pokemonRepository: IPokemonRepository;

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async excute(command: {
    name: string;
    ability: string;
    force: number;
  }): Promise<Pokemon> {
    // create a new pokemon in db
    const newPokemon = await this.pokemonRepository.create({
      name: command.name,
      ability: command.ability,
      force: command.force,
    });
    return newPokemon;
  }
}
