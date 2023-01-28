import { afterEach, describe, expect, test, vi } from "vitest";
import { CreatePokemonUsecase } from "../src/domain/pokemon/create-pokemon.usecase";
import { Pokemon } from "../src/domain/entities";

describe("Create Pokemon Usecase - test", () => {
  const pokemonRepositoryMock = {
    create: vi.fn(),
    findAll: vi.fn(),
  };

  const createPokemonUseCase = new CreatePokemonUsecase(pokemonRepositoryMock);

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should create", async () => {
    //GIVEN
    const expectedPokemon: Pokemon = {
      id: 1,
      name: "Pikapika",
      ability: "Electricity",
      force: 1000,
    };
    pokemonRepositoryMock.create.mockImplementation(() => expectedPokemon);

    //WHEN
    const pokemon = await createPokemonUseCase.excute({
      name: expectedPokemon.name,
      ability: expectedPokemon.ability,
      force: expectedPokemon.force,
    });

    //THEN
    expect(pokemonRepositoryMock.create).toHaveBeenCalledOnce();
    expect(pokemonRepositoryMock.create).toBeCalledWith({
      name: expectedPokemon.name,
      ability: expectedPokemon.ability,
      force: expectedPokemon.force,
    });
    expect(expectedPokemon).toStrictEqual(pokemon);
  });
});
