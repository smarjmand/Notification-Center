import { FastifyReply, FastifyRequest } from "fastify";
import {permanentDeleteSimpleTemplateController} from "../../../controller/simpleTemplate/permanentDeleteSimpleTemplateController";


async function ControllerOnPermanentDeleteSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await permanentDeleteSimpleTemplateController(request, response, done);
}
const preHandlerOnPermanentDeleteSimpleTemplate = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnPermanentDeleteSimpleTemplate, preHandlerOnPermanentDeleteSimpleTemplate };