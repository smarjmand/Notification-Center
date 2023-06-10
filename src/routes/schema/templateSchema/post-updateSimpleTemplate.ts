import { FastifyReply, FastifyRequest } from "fastify";
import {updateSimpleTemplateController} from "../../../controller/simpleTemplate/updateSimpleTemplateController";


async function ControllerOnUpdateSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await updateSimpleTemplateController(request, response, done);
}
const preHandlerOnUpdateSimpleTemplate = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnUpdateSimpleTemplate, preHandlerOnUpdateSimpleTemplate };