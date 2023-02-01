import { describe, expect, expectTypeOf, test } from "vitest";
import { PokemonRepository } from "../src/infrastructure/pokemon.repository";

describe("Pokemon Repository - test", () => {
  const pokemonRepository = new PokemonRepository();

  test("#create", async () => {
    //GIVEN
    const name = "Pikapika";
    const hp = 40;
    const atk = 15;
    const def = 50;
    const atkspe = 45;
    const defspe = 50;
    const speed = 30;
    const type = "Electricity";
    const image =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

    //WHEN
    const pokemon = await pokemonRepository.create({
      name,
      hp,
      atk,
      def,
      atkspe,
      defspe,
      speed,
      type,
      image,
    });

    //THEN
    expectTypeOf(pokemon.id).toBeNumber();
    expect(pokemon.name).toEqual(name);
    expect(pokemon.hp).toEqual(hp);
    expect(pokemon.atk).toEqual(atk);
    expect(pokemon.def).toEqual(def);
    expect(pokemon.atkspe).toEqual(atkspe);
    expect(pokemon.defspe).toEqual(defspe);
    expect(pokemon.speed).toEqual(speed);
    expect(pokemon.type).toEqual(type);
    expect(pokemon.image).toEqual(image);
  });
});
