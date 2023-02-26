import { IPokemonRepository } from "../domain/interfaces";
import { Pokemon } from "../domain/entities";
import { prisma } from "../../db";

export class PokemonRepository implements IPokemonRepository {
  async create(pokemon: {
    name: string;
    hp: number;
    atk: number;
    def: number;
    atkspe: number;
    defspe: number;
    speed: number;
    type: string;
    image: string;
    trainerId: number;
  }): Promise<Pokemon> {
    const newPokemon = await prisma.pokemon.create({
      data: {
        name: pokemon.name,
        hp: pokemon.hp,
        atk: pokemon.atk,
        def: pokemon.def,
        atkspe: pokemon.atkspe,
        defspe: pokemon.defspe,
        speed: pokemon.speed,
        type: pokemon.type,
        image: pokemon.image,
        trainerId: pokemon.trainerId,
      },
    });

    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = await prisma.pokemon.findMany();
    return pokemons;
  }

  async update(
    id: number,
    pokemon: {
      name: string;
      hp: number;
      atk: number;
      def: number;
      atkspe: number;
      defspe: number;
      speed: number;
      type: string;
      image: string;
    }
  ): Promise<Pokemon> {
    const updatedPokemon = await prisma.pokemon.update({
      where: { id },
      data: {
        name: pokemon.name,
        hp: pokemon.hp,
        atk: pokemon.atk,
        def: pokemon.def,
        atkspe: pokemon.atkspe,
        defspe: pokemon.defspe,
        speed: pokemon.speed,
        type: pokemon.type,
        image: pokemon.image,
      },
    });

    return updatedPokemon;
  }

  async linkPokemonToTrainer(
    id: number,
    pokemon: {
      trainerId: number;
    }
  ): Promise<Pokemon> {
    const linkPokemonTrainer = await prisma.pokemon.update({
      where: { id },
      data: {
        trainerId: pokemon.trainerId,
      },
    });
    return linkPokemonTrainer;
  }

  async delete(id: number): Promise<Pokemon[]> {
    await prisma.pokemon.delete({
      where: { id: id },
    });
    const pokemons: Pokemon[] = await prisma.pokemon.findMany();

    return pokemons;
  }
}
