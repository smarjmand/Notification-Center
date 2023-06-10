import { FastifyReply, FastifyRequest } from "fastify";
import {getAllItemsSimpleTemplateController} from "../../../controller/simpleTemplate/getAllItemsSimpleTemplateController";


async function ControllerOnGetAllItemsSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await getAllItemsSimpleTemplateController(request, response, done)
}
const preHandlerOnControllerGetAllItemsSimpleTemplate = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
}
export {ControllerOnGetAllItemsSimpleTemplate, preHandlerOnControllerGetAllItemsSimpleTemplate}