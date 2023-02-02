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
      hp: 40,
      atk: 15,
      def: 50,
      atkspe: 45,
      defspe: 50,
      speed: 40,
      type: "Electricity",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    };
    pokemonRepositoryMock.create.mockImplementation(() => expectedPokemon);

    //WHEN
    const pokemon = await createPokemonUseCase.excute({
      name: expectedPokemon.name,
      hp: expectedPokemon.hp,
      atk: expectedPokemon.atk,
      def: expectedPokemon.def,
      atkspe: expectedPokemon.atkspe,
      defspe: expectedPokemon.defspe,
      speed: expectedPokemon.speed,
      type: expectedPokemon.type,
      image: expectedPokemon.image,
    });

    //THEN
    expect(pokemonRepositoryMock.create).toHaveBeenCalledOnce();
    expect(pokemonRepositoryMock.create).toBeCalledWith({
      name: expectedPokemon.name,
      hp: expectedPokemon.hp,
      atk: expectedPokemon.atk,
      def: expectedPokemon.def,
      atkspe: expectedPokemon.atkspe,
      defspe: expectedPokemon.defspe,
      speed: expectedPokemon.speed,
      type: expectedPokemon.type,
      image: expectedPokemon.image,
    });
    expect(expectedPokemon).toStrictEqual(pokemon);
  });
});
