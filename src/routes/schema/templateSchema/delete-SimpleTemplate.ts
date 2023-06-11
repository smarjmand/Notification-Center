import { FastifyReply, FastifyRequest } from "fastify";
import {deleteSimpleTemplateController} from "../../../controller/simpleTemplate/deleteSimpleTemplateController";


async function ControllerOnDeleteSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await deleteSimpleTemplateController(request, response, done);
}
const preHandlerOnDeleteSimpleTemplate = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnDeleteSimpleTemplate, preHandlerOnDeleteSimpleTemplate };