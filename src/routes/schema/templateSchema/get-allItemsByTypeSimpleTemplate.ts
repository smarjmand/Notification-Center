import {FastifyReply, FastifyRequest} from "fastify";
import {getByLanguageSimpleTemplateController} from "../../../controller/simpleTemplate/getByLanguageSimpleTemplateController";


async function ControllerOnGetItemsByLanguageSimpleTemplate(
    request:FastifyRequest,
    reply:FastifyReply,
    done:(err?:Error) => {}
) {
    await getByLanguageSimpleTemplateController(request, reply, done)
}


const preHandlerOnControllerOnGetItemsByLanguageSimpleTemplate = {
    preHandler:async (request:FastifyRequest, reply:FastifyReply)=> {}
}

export {ControllerOnGetItemsByLanguageSimpleTemplate, preHandlerOnControllerOnGetItemsByLanguageSimpleTemplate}