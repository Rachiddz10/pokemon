import { Trainer } from "../entities";
import { ITrainerRepository } from "../interfaces";

export class DeleteTrainerUsecase {
  private trainerRepository: ITrainerRepository;

  constructor(trainerRepository: ITrainerRepository) {
    this.trainerRepository = trainerRepository;
  }

  async execute(id: number): Promise<Trainer[]> {
    await this.trainerRepository.delete(id);
    const trainers = await this.trainerRepository.findAll();
    return trainers;
  }
}
