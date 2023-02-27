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

  async findByName(name: string): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    });
    return pokemons;
  }

  async findByType(type: string): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        type: {
          equals: type,
          mode: 'insensitive',
        },
      },
    });
    return pokemons;
  }

  async findByhp(hp: number): Promise<Pokemon[]> {
    const parsedhp = parseInt(hp.toString());
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        hp: {
          equals: parsedhp,
        },
      },
    });
    return pokemons;
  }

  async findByatke(atke: number): Promise<Pokemon[]> {
    const parsedatk = parseInt(atke.toString());
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        atk: {
          equals: parsedatk,
        },
      },
    });
    return pokemons;
  }



  async findByatkspe(atke: number): Promise<Pokemon[]> {
    const parsedatk = parseInt(atke.toString());
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        atkspe: {
          equals: parsedatk,
        },
      },
    });
    return pokemons;
  }

  async findBydefspe(atke: number): Promise<Pokemon[]> {
    const parsedatk = parseInt(atke.toString());
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        defspe: {
          equals: parsedatk,
        },
      },
    });
    return pokemons;
  }

  async findBySpeed(speed: number): Promise<Pokemon[]> {
    const parsedspeed = parseInt(speed.toString());
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        speed: {
          equals: parsedspeed,
        },
      },
    });
    return pokemons;
  }

  async findByDefense(defense: number): Promise<Pokemon[]> {
    const parsedDefense = parseInt(defense.toString());
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      where: {
        def: {
          equals: parsedDefense,
        },
      },
    });
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
  async delete(id: number): Promise<Pokemon[]> {
    await prisma.pokemon.delete({
      where: { id: id },
    });
    const pokemons: Pokemon[] = await prisma.pokemon.findMany();

    return pokemons;
  }
}
