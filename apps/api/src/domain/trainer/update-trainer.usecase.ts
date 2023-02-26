import { Trainer } from "../entities";
import { ITrainerRepository } from "../interfaces";

export class UpdateTrainerUsecase {
  private trainerRepository: ITrainerRepository;

  constructor(trainerRepository: ITrainerRepository) {
    this.trainerRepository = trainerRepository;
  }

  async execute(
    id: number,
    command: { name?: string; gender?: string }
  ): Promise<Trainer> {
    // update an existing trainer in db
    const updatedTrainer = await this.trainerRepository.update(id, {
      name: command.name,
      gender: command.gender,
    });
    return updatedTrainer;
  }
}
