import { IPokemonRepository } from "../domain/interfaces";
import { Pokemon } from "../domain/entities";
import { prisma } from "../../db";

export class PokemonRepository implements IPokemonRepository {
  async create(pokemon: {
    name: string;
    ability: string;
    force: number;
    //     trainer: Trainer;
  }): Promise<Pokemon> {
    const newPokemon = await prisma.pokemon.create({
      data: {
        name: pokemon.name,
        ability: pokemon.ability,
        force: pokemon.force,
        // trainer: pokemon.trainer,
      },
    });

    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = await prisma.pokemon.findMany();
    return pokemons;
  }
}
