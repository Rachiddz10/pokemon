import { PokemonRepository } from "../../infrastructure/pokemon.repository";
import { CreatePokemonUsecase } from "./create-pokemon.usecase";
import { GetAllPokemonUsecase } from "./get-all-pokemons.usecase";
import { UpdatePokemonUsecase } from "./update-pokemon.usecase";

export type PokemonContainer = {
  createPokemonUsecase: CreatePokemonUsecase;
  getAllPokemonUsecase: GetAllPokemonUsecase;
  updatePokemonUsecase: UpdatePokemonUsecase;
};

export const initPokemonContainer = (): PokemonContainer => {
  const pokemonRepository = new PokemonRepository();
  const createPokemonUsecase = new CreatePokemonUsecase(pokemonRepository);
  const getAllPokemonUsecase = new GetAllPokemonUsecase(pokemonRepository);
  const updatePokemonUsecase = new UpdatePokemonUsecase(pokemonRepository);

  return {
    createPokemonUsecase,
    getAllPokemonUsecase,
    updatePokemonUsecase,
  };
};
