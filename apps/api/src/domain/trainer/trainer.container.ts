import { TrainerRepository } from "../../infrastructure/trainer.repository";
import { CreateTrainerUsecase } from "./create-trainer.usecase";
import { GetAllTrainersUsecase } from "./get-all-trainers.usecase";
import { UpdateTrainerUsecase } from "./update-trainer.usecase";
import { DeleteTrainerUsecase } from "./delete-trainer.usecase";
import { AddPokemonToTrainerUseCase } from "./add-pokemon-to-trainer.usecase";
import { FilterTrainersUsecase } from "./filter-trainers.usecase";

export type TrainerContainer = {
  createTrainerUsecase: CreateTrainerUsecase;
  getAllTrainersUsecase: GetAllTrainersUsecase;
  updateTrainerUsecase: UpdateTrainerUsecase;
  deleteTrainersUsecase: DeleteTrainerUsecase;
  addPokemonToTrainerUseCase: AddPokemonToTrainerUseCase;
  filterTrainersUsecase: FilterTrainersUsecase;
};

export const initTrainerContainer = (): TrainerContainer => {
  const trainerRepository = new TrainerRepository();
  const createTrainerUsecase = new CreateTrainerUsecase(trainerRepository);
  const getAllTrainersUsecase = new GetAllTrainersUsecase(trainerRepository);
  const updateTrainerUsecase = new UpdateTrainerUsecase(trainerRepository);
  const deleteTrainersUsecase = new DeleteTrainerUsecase(trainerRepository);
  const addPokemonToTrainerUseCase = new AddPokemonToTrainerUseCase(
    trainerRepository
  );
  const filterTrainersUsecase = new FilterTrainersUsecase(trainerRepository);

  return {
    createTrainerUsecase,
    getAllTrainersUsecase,
    updateTrainerUsecase,
    deleteTrainersUsecase,
    addPokemonToTrainerUseCase,
    filterTrainersUsecase,
  };
};
