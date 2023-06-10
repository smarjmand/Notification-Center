import { FastifyReply, FastifyRequest } from "fastify";
import {softDeleteSimpleTemplateController} from "../../../controller/simpleTemplate/softDeleteItemSimpleTemplateController";


async function ControllerOnSoftDeleteSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await softDeleteSimpleTemplateController(request, response, done);
}
const preHandlerOnSoftDeleteSimpleTemplate = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnSoftDeleteSimpleTemplate, preHandlerOnSoftDeleteSimpleTemplate };