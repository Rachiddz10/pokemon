import { Pokemon } from "../entities";
import { IPokemonRepository } from "../interfaces";

export class LinkPokemonToTrainerUseCase {
  private pokemonRepository: IPokemonRepository;

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute(
    id: number,
    command: {
      trainerId: number;
    }
  ): Promise<Pokemon> {
    const linkPokemonToTrainer =
      await this.pokemonRepository.linkPokemonToTrainer(id, {
        trainerId: command.trainerId,
      });
    return linkPokemonToTrainer;
  }
}
