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
    //     trainer: Trainer;
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
        // trainer: pokemon.trainer,
      },
    });

    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = await prisma.pokemon.findMany();
    return pokemons;
  }
  
  async update(id: number, pokemon: {
    name: string
    hp: number,
    atk: number,
    def: number,
    atkspe: number,
    defspe: number,
    speed: number,
    type: string,
    image : string }): Promise<Pokemon> {
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
        image : pokemon.image 
       
      },
    });

    return updatedPokemon;
}
}
