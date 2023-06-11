import {FastifyReply, FastifyRequest} from "fastify";
import {getSimpleTemplatesByLanguageController} from "../../../controller/simpleTemplate/getSimpleTemplatesByLanguageController";


async function ControllerOnGetSimpleTemplateByLanguage(
    request:FastifyRequest,
    reply:FastifyReply,
    done:(err?:Error) => {}
) {
    await getSimpleTemplatesByLanguageController(request, reply, done)
}


const preHandlerOnControllerOnGetSimpleTemplateByLanguage = {
    preHandler:async (request:FastifyRequest, reply:FastifyReply)=> {}
}

export {ControllerOnGetSimpleTemplateByLanguage, preHandlerOnControllerOnGetSimpleTemplateByLanguage}