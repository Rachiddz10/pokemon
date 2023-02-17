import { Pokemon } from "../entities";
import { IPokemonRepository } from "../interfaces";

export class DeletePokemonUsecase {
  private pokemonRepository: IPokemonRepository;

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(id: number): Promise<Pokemon[]> {
    await this.pokemonRepository.delete(id);
    const trainers = await this.pokemonRepository.findAll();
    return trainers;
  }
}
