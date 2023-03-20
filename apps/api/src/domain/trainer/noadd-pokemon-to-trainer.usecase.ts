import { Trainer } from "../entities";
import { ITrainerRepository } from "../interfaces";

export class NoAddPokemonToTrainerUseCase {
  private trainerRepository: ITrainerRepository;

  constructor(trainerRepository: ITrainerRepository) {
    this.trainerRepository = trainerRepository;
  }

  async execute(id: number, command: { pokemonId: number }): Promise<Trainer> {
    const addedPokemon = await this.trainerRepository.noaddPokemonToTrainer(
      id,
      {
        pokemonId: command.pokemonId,
      }
    );
    return addedPokemon;
  }
}
