import { ITrainerRepository } from "../domain/interfaces";
import { Trainer } from "../domain/entities";
import { prisma } from "../../db";

export class TrainerRepository implements ITrainerRepository {
  async create(trainer: { name: string; gender: string }): Promise<Trainer> {
    const newTrainer = await prisma.trainer.create({
      data: {
        name: trainer.name,
        gender: trainer.gender,
      },
    });

    return newTrainer;
  }

  async findAll(): Promise<Trainer[]> {
    const trainers: Trainer[] = await prisma.trainer.findMany({
      include: {
        pokemons: true,
      },
    });

    return trainers;
  }

  async update(
    id: number,
    trainer: { name?: string; gender?: string }
  ): Promise<Trainer> {
    const updatedTrainer = await prisma.trainer.update({
      where: { id },
      data: {
        name: trainer.name,
        gender: trainer.gender,
      },
    });

    return updatedTrainer;
  }

  async addPokemonToTrainer(
    id: number,
    trainer: { pokemonId: number }
  ): Promise<Trainer> {
    const addPokemonTrainer = await prisma.trainer.update({
      where: { id },
      data: {
        pokemons: {
          connect: { id: trainer.pokemonId },
        },
      },
      include: { pokemons: true },
    });
    return addPokemonTrainer;
  }

  async delete(id: number): Promise<Trainer[]> {
    await prisma.trainer.delete({
      where: { id: id },
    });
    const trainers: Trainer[] = await prisma.trainer.findMany();

    return trainers;
  }

  async findByGender(gender: string): Promise<Trainer[]> {
    const trainers: Trainer[] = await prisma.trainer.findMany({
      where: {
        gender: {
          equals: gender,
          mode: "insensitive",
        },
      },
    });
    return trainers;
  }

  async findByName(name: string): Promise<Trainer[]> {
    const trainers: Trainer[] = await prisma.trainer.findMany({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
    return trainers;
  }
  async noaddPokemonToTrainer(
    id: number,
    trainer: { pokemonId: number }
  ): Promise<Trainer> {
    const addPokemonTrainer = await prisma.trainer.update({
      where: { id },
      data: {
        pokemons: {
          disconnect: { id: trainer.pokemonId },
        },
      },
      include: { pokemons: true },
    });
    return addPokemonTrainer;
  }
}
