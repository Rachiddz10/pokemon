import { afterEach, describe, expect, test, vi } from "vitest";
import { FindPokemonsUsecase} from "../src/domain/pokemon/find-pokemon.usecase";
import { Pokemon } from "../src/domain/entities";

describe("Find Pokemon Usecase - test", () => {
  const pokemonRepositoryMock = {
    create: vi.fn(),
    findAll: vi.fn(),
    findByName: vi.fn(),
  };

  const findPokemonUseCase = new FindPokemonsUsecase(pokemonRepositoryMock);

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should find pokemon by name", async () => {
    //GIVEN
    const expectedPokemon: Pokemon = {
      id: 1,
      name: "Pikapikaamal",
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
    pokemonRepositoryMock.findByName.mockImplementation(() => expectedPokemon);

    //WHEN
    const pokemon = await findPokemonUseCase.execute("Pikapikaamal");
  

    //THEN
    pokemonRepositoryMock.findByName.mockImplementation(() => expectedPokemon);


    expect(pokemonRepositoryMock.findByName).toHaveBeenCalledOnce();

 

    expect(pokemonRepositoryMock.findByName).toBeCalledWith({
      name: expectedPokemon.name,});

    expect(expectedPokemon).toStrictEqual(pokemon);
  });

  test("should return undefined when pokemon not found", async () => {
    //GIVEN
    pokemonRepositoryMock.findByName.mockImplementation(() => undefined);

    //WHEN
    const pokemon = await findPokemonUseCase.execute( "non-existent-pokemon");

    //THEN
    expect(pokemonRepositoryMock.findByName).toHaveBeenCalledOnce();
    expect(pokemonRepositoryMock.findByName).toBeCalledWith({
      name: "non-existent-pokemon",
    });
    expect(undefined).toStrictEqual(pokemon);
  });
});


