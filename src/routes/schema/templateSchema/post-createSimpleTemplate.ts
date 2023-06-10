import { FastifyReply, FastifyRequest } from "fastify";
import {createSimpleTemplateController} from "../../../controller/simpleTemplate/createSimpleTemplateController";


async function ControllerOnPostCreateSimpleTemplate(
	request: FastifyRequest,
	response: FastifyReply,
	done: (err?: Error) => {}
) {
	await createSimpleTemplateController(request, response, done);
}
const preHandlerOnPostCreateSimpleTemplate = {
	preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnPostCreateSimpleTemplate, preHandlerOnPostCreateSimpleTemplate };
