import { FastifyInstance } from "fastify";
import { PokemonContainer } from "../domain/pokemon/pokemon.container";

export const registerPokemonRoutes = (
  server: FastifyInstance,
  container: PokemonContainer
) => {
  server.route({
    method: "GET",
    url: "/pokemons",
    handler: async (_request, reply) => {
      const pokemons = await container.getAllPokemonUsecase.execute();
      reply.status(200).send(pokemons);
    },
  });

  server.route<{
    Body: { name: string; ability: string; force: number };
  }>({
    method: "POST",
    url: "/pokemons",
    schema: {
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          ability: { type: "string" },
          force: { type: "number" },
        },
        required: ["name", "ability", "force"],
      },
    },
    handler: async (request, reply) => {
      const { name, ability, force } = request.body;
      const pokemon = await container.createPokemonUsecase.excute({
        name,
        ability,
        force,
      });
      reply.status(200).send(pokemon);
    },
  });
};
