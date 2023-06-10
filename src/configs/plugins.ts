import { FastifyInstance } from "fastify";
import databasePlugin from "../database";
const metricsPlugin = require("fastify-metrics");
import routes from "../routes";
import { errorHandler } from "../middleware";
// registers plugins
export const register = (server: FastifyInstance) => {
	server.register(metricsPlugin, { endpoint: "/metrics" });
	server.register(databasePlugin);
	server.register(routes);

	errorHandler(server);
	return server;
};
