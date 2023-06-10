import {FastifyReply, FastifyRequest} from "fastify";
import {getSingleItemController} from "../../../controller/simpleTemplate/getSingleItemController";



async function ControllerOnGetSingleItemSimpleTemplate(
    request: FastifyRequest,
    response: FastifyReply,
    done: (err?: Error) => {}
) {
    await getSingleItemController(request, response, done);
}
const preHandlerOnGetSingleItemController = {
    preHandler: async (request: FastifyRequest, response: FastifyReply) => {},
};
export { ControllerOnGetSingleItemSimpleTemplate, preHandlerOnGetSingleItemController };