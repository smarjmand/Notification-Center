import { FastifyReply, FastifyRequest } from "fastify";
import {editSimpleTemplateController} from "../../../controller/simpleTemplate/editSimpleTemplateController";


async function ControllerOnEditSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await editSimpleTemplateController(request, response, done);
}
const preHandlerOnUpdateSimpleTemplate = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnEditSimpleTemplate, preHandlerOnUpdateSimpleTemplate };