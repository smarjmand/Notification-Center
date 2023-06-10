//#region import
import { ControllerOnPostCreateSimpleTemplate } from "./post-createSimpleTemplate";
import {ControllerOnGetAllItemsSimpleTemplate} from "./get-allItemsSimpleTemplate";
import {ControllerOnPermanentDeleteSimpleTemplate} from "./delete-permanentDeleteSimpleTemplate";
import {ControllerOnUpdateSimpleTemplate} from "./post-updateSimpleTemplate";
import {ControllerOnGetItemsByLanguageSimpleTemplate} from "./get-allItemsByTypeSimpleTemplate";
import {ControllerOnSoftDeleteSimpleTemplate} from "./delete-softDeleteSimpleTemplate";
import {ControllerOnGetSingleItemSimpleTemplate} from "./get-singleItemSimpleTemplate";

//#endregion

function templateRoutes(fastify: any, options: any, done: any) {
	// type : ['en', 'fa'] :
	fastify.post("/simple-template/create", {}, ControllerOnPostCreateSimpleTemplate);
	fastify.get("/simple-template/single-item/:id", {}, ControllerOnGetSingleItemSimpleTemplate)
	fastify.get('/simple-template/all-items', {}, ControllerOnGetAllItemsSimpleTemplate);
	fastify.get('/simple-template/by-type', {}, ControllerOnGetItemsByLanguageSimpleTemplate);
	fastify.delete('/permanent-delete/:id', {}, ControllerOnPermanentDeleteSimpleTemplate);
	fastify.delete('/simpleTemplate/:id', {}, ControllerOnSoftDeleteSimpleTemplate)
	fastify.put('/simple-template/update/:id', {}, ControllerOnUpdateSimpleTemplate)
	done();
}
export { templateRoutes as templateRoute };
