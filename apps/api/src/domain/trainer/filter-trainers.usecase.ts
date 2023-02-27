import { Trainer } from "../entities";
import { ITrainerRepository } from "../interfaces";

export class FilterTrainersUsecase {
  private trainerRepository: ITrainerRepository;

  constructor(trainerRepository: ITrainerRepository) {
    this.trainerRepository = trainerRepository;
  }

  async execute(name?: string, gender?: string): Promise<Trainer[]> {

    let filteredTrainers: Trainer[] = [];

    // filter trainers by name
    if (name) {

      filteredTrainers = await this.trainerRepository.findByName(name);

    }
    // filter trainerss by gender
    if (gender) {
      if (name) {
        filteredTrainers = filteredTrainers.filter(p => p.gender.toLowerCase() === gender.toLowerCase())
      }
      else {
        filteredTrainers = await this.trainerRepository.findByGender(gender);
      }

    }
    if (!name && !gender) {
      return this.trainerRepository.findAll();
    }


    return filteredTrainers;
  }


}


