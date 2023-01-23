import { describe, expect, expectTypeOf, test } from "vitest";
import { PokemonRepository } from "../src/infrastructure/pokemon.repository";

describe("Pokemon Repository - test", () => {
  const pokemonRepository = new PokemonRepository();

  test("#create", async () => {
    //GIVEN
    const name = "Pikapika";
    const ability = "Electricity";
    const force = 1000;

    //WHEN
    const pokemon = await pokemonRepository.create({ name, ability, force });

    //THEN
    expectTypeOf(pokemon.id).toBeNumber();
    expect(pokemon.name).toEqual(name);
    expect(pokemon.ability).toEqual(ability);
    expect(pokemon.force).toEqual(force);
  });
});
