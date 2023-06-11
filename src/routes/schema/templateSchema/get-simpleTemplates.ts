import { FastifyReply, FastifyRequest } from "fastify";
import {getSimpleTemplatesController} from "../../../controller/simpleTemplate/getSimpleTemplatesController";


async function ControllerOnGetSimpleTemplates(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await getSimpleTemplatesController(request, response, done)
}
const preHandlerOnControllerOnGetSimpleTemplates = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
}
export {ControllerOnGetSimpleTemplates, preHandlerOnControllerOnGetSimpleTemplates}