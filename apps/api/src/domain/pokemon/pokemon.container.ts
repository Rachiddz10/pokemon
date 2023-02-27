import { PokemonRepository } from "../../infrastructure/pokemon.repository";
import { CreatePokemonUsecase } from "./create-pokemon.usecase";
import { GetAllPokemonUsecase } from "./get-all-pokemons.usecase";
import { FindPokemonsUsecase } from "./find-pokemon.usecase";
import { UpdatePokemonUsecase } from "./update-pokemon.usecase";
import { DeletePokemonUsecase } from "./delete-pokemon.usecase";
import { FilterPokemonsUsecase } from "./filter-Pokemon.usecase";

export type PokemonContainer = {
  createPokemonUsecase: CreatePokemonUsecase;
  getAllPokemonUsecase: GetAllPokemonUsecase;
  findPokemonsUsecase: FindPokemonsUsecase;
  updatePokemonUsecase: UpdatePokemonUsecase;
  deletePokemonsUsecase: DeletePokemonUsecase;
  filterPokemonsUsecase: FilterPokemonsUsecase;
};

export const initPokemonContainer = (): PokemonContainer => {
  const pokemonRepository = new PokemonRepository();
  const createPokemonUsecase = new CreatePokemonUsecase(pokemonRepository);
  const getAllPokemonUsecase = new GetAllPokemonUsecase(pokemonRepository);
  const findPokemonsUsecase = new FindPokemonsUsecase(pokemonRepository);
  const updatePokemonUsecase = new UpdatePokemonUsecase(pokemonRepository);
  const deletePokemonsUsecase = new DeletePokemonUsecase(pokemonRepository);
  const filterPokemonsUsecase = new FilterPokemonsUsecase(pokemonRepository);
  return {
    createPokemonUsecase,
    getAllPokemonUsecase,
    findPokemonsUsecase,
    updatePokemonUsecase,
    deletePokemonsUsecase,
    filterPokemonsUsecase,
  };
};
