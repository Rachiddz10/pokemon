import { FastifyInstance, FastifyRequest } from "fastify";
import { TrainerContainer } from "../domain/trainer/trainer.container";
import {
  initPokemonContainer,
  PokemonContainer,
} from "../domain/pokemon/pokemon.container";

export const registerTrainerRoutes = (
  server: FastifyInstance,
  container: TrainerContainer
) => {
  server.route({
    method: "GET",
    url: "/trainers",
    handler: async (_request, reply) => {
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Headers", "*");
      reply.header("mode", "no-cors");
      const trainers = await container.getAllTrainersUsecase.execute();
      reply.status(200).send(trainers);
    },
  });

  server.route<{
    Body: { name: string; gender: string };
  }>({
    method: "POST",
    url: "/trainers",
    schema: {
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          gender: { type: "string" },
        },
        required: ["name", "gender"],
      },
    },
    handler: async (request, reply) => {
      const { name, gender } = request.body;
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Headers", "*");
      reply.header("mode", "no-cors");
      const trainer = await container.createTrainerUsecase.execute({
        name,
        gender,
      });

      reply.status(200).send(trainer);
    },
  });

  server.route<{
    Body: { id: number; name: string; gender: string };
  }>({
    method: "PUT",
    url: "/trainers/:id",
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
        required: ["id"],
      },
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          gender: { type: "string" },
        },
        required: ["name", "gender"],
      },
    },
    handler: async (request, reply) => {
      const { id } = request.params as { id: number };
      const { name, gender } = request.body;
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Headers", "*");
      reply.header("mode", "no-cors");
      const trainer = await container.updateTrainerUsecase.execute(id, {
        name,
        gender,
      });
      reply.status(200).send(trainer);
    },
  });
  server.route({
    method: "DELETE",
    url: "/trainers/:id",

    handler: async (request: FastifyRequest, reply) => {
      const r = request.params as { id: string };
      const id = parseInt(r.id);

      const trainers = await container.deleteTrainersUsecase.execute(id);
      reply.status(200).send(trainers);
    },
  });

  server.route<{}>({
    method: "GET",
    url: "/trainers/",

    handler: async (request, reply) => {
      const { name, gender } = request.query as {
        name?: string;
        gender?: string;
      };

      const filterTrainers = await container.filterTrainersUsecase.execute(
        name,
        gender
      );

      reply.status(200).send(filterTrainers);
    },
  });
  server.route<{
    Body: {
      pokemonIds: number[];
    };
  }>({
    method: "POST",
    url: "/trainer/:id/pokemons",
    schema: {
      body: {
        type: "object",
        properties: {
          pokemonIds: { type: "array", items: { type: "number" } },
        },
        required: ["pokemonIds"],
      },
    },
    handler: async (request, reply) => {
      const { pokemonIds } = request.body;
      const params = request.params as { id: string };
      const trainerId = parseInt(params.id);
      console.log(trainerId);
      if (!Array.isArray(pokemonIds) || pokemonIds.length === 0) {
        reply.status(400).send({ error: "Invalid pokemonIds" });
        return;
      }
      if (!trainerId || isNaN(trainerId)) {
        reply.status(400).send({ error: "Invalid trainerId" });
        return;
      }
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Headers", "*");
      reply.header("mode", "no-cors");
      const pokemonContainer: PokemonContainer = initPokemonContainer();
      const pokemon = await Promise.all(
        pokemonIds.map((pokemonId) =>
          pokemonContainer.linkPokemonToTrainerUseCase.execute(pokemonId, {
            trainerId,
          })
        )
      );

      await Promise.all(
        pokemonIds.map((pokemonId) =>
          container.addPokemonToTrainerUseCase.execute(trainerId, {
            pokemonId,
          })
        )
      );
      reply.status(200).send(pokemon);
    },
  });
};
