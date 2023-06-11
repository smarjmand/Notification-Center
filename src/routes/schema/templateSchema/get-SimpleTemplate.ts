import {FastifyReply, FastifyRequest} from "fastify";
import {getSimpleTemplateController} from "../../../controller/simpleTemplate/getSimpleTemplateController";



async function ControllerOnGetSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await getSimpleTemplateController(request, response, done);
}
const preHandlerOnGetSimpleTemplateController = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnGetSimpleTemplate, preHandlerOnGetSimpleTemplateController };