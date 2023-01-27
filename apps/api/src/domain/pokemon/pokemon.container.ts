import { PokemonRepository } from "../../infrastructure/pokemon.repository";
import { CreatePokemonUsecase } from "./create-pokemon.usecase";
import { GetAllPokemonUsecase } from "./get-all-pokemons.usecase";

export type PokemonContainer = {
  createPokemonUsecase: CreatePokemonUsecase;
  getAllPokemonUsecase: GetAllPokemonUsecase;
};

export const initPokemonContainer = (): PokemonContainer => {
  const pokemonRepository = new PokemonRepository();
  const createPokemonUsecase = new CreatePokemonUsecase(pokemonRepository);
  const getAllPokemonUsecase = new GetAllPokemonUsecase(pokemonRepository);

  return {
    createPokemonUsecase,
    getAllPokemonUsecase,
  };
};
