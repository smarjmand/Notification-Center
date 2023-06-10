import fastify from "fastify";
import { register, config } from "./configs";

config();
const server = fastify();

register(server);

server.listen(
	{ port: +process.env.PORT!, host: process.env.HOST! },
	(err: any, address: any) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(`[SERVER] Server listening at ${address}`);
	}
);
