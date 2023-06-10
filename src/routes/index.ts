import { FastifyInstance } from "fastify";
import {templateRoute} from "./schema/templateSchema";
export default async function (app: FastifyInstance) {
	app.register(templateRoute);
}
