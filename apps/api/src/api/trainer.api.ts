
import { FastifyInstance } from "fastify";
import { TrainerContainer } from "../domain/trainer/trainer.container";

export const registerTrainerRoutes = (
server: FastifyInstance,
container: TrainerContainer
) => {
server.route({
method: "GET",
url: "/trainers",
handler: async (_request, reply) => {
reply.header('Access-Control-Allow-Origin', '*');
reply.header('Access-Control-Allow-Headers', '*');
reply.header('mode','no-cors')
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
reply.header('Access-Control-Allow-Origin', '*');
reply.header('Access-Control-Allow-Headers', '*');
reply.header('mode', 'no-cors');
const trainer = await container.createTrainerUsecase.execute({
name,
gender,
});

reply.status(200).send(trainer);
},
});
};

