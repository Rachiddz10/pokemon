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
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Headers", "*");
      reply.header("mode", "no-cors");
      const pokemons = await container.getAllPokemonUsecase.execute();
      reply.status(200).send(pokemons);
    },
  });

  server.route<{
    Body: {
      name: string;
      hp: number;
      atk: number;
      def: number;
      atkspe: number;
      defspe: number;
      speed: number;
      type: string;
      image: string;
    };
  }>({
    method: "POST",
    url: "/pokemons",
    schema: {
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          hp: { type: "number" },
          atk: { type: "number" },
          def: { type: "number" },
          atkspe: { type: "number" },
          defspe: { type: "number" },
          speed: { type: "number" },
          type: { type: "string" },
          image: { type: "string" },
        },
        required: [
          "name",
          "hp",
          "atk",
          "def",
          "atkspe",
          "defspe",
          "speed",
          "type",
          "image",
        ],
      },
    },
    handler: async (request, reply) => {
      const { name, hp, atk, def, atkspe, defspe, speed, type, image } =
        request.body;
      const pokemon = await container.createPokemonUsecase.excute({
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
      reply.status(200).send(pokemon);
    },
  });



  server.route<{
  }>({
    method: "GET",
    url: "/pokemons/:name",

    handler: async (request, reply) => {
      const { name } = request.params as {name : string};
      const pokemon = await container.findPokemonsUsecase.execute(name);
      reply.status(200).send(pokemon);
    },
  });
};
