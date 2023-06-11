//#region import
import { ControllerOnPostCreateSimpleTemplate } from "./post-createSimpleTemplate";
import {ControllerOnGetSimpleTemplates} from "./get-simpleTemplates";
import {ControllerOnEditSimpleTemplate} from "./put-editSimpleTemplate";
import {ControllerOnGetSimpleTemplateByLanguage} from "./get-simpleTemplateByLanguage";
import {ControllerOnDeleteSimpleTemplate} from "./delete-SimpleTemplate";
import {ControllerOnGetSimpleTemplate} from "./get-SimpleTemplate";

//#endregion

function templateRoutes(fastify: any, options: any, done: any) {
	// types : ['en', 'fa'] :
	fastify.post("/simpleTemplate/:?", {}, ControllerOnPostCreateSimpleTemplate);
	fastify.get("/simpleTemplate/:id", {}, ControllerOnGetSimpleTemplate)
	fastify.get('/simpleTemplates/', {}, ControllerOnGetSimpleTemplates);
	fastify.get('/simpleTemplate/searchByType/:?', {}, ControllerOnGetSimpleTemplateByLanguage);
	fastify.delete('/simpleTemplate/:id/:?', {}, ControllerOnDeleteSimpleTemplate)
	fastify.put('/simpleTemplate/:id/:?', {}, ControllerOnEditSimpleTemplate)
	done();
}
export { templateRoutes as templateRoute };
