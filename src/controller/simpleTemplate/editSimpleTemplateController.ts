import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import SimpleTemplate from "../../models/databaseModels/SimpleTemplate";
import simpleTemplate from "../../models/databaseModels/SimpleTemplate";
import {verify} from "crypto";
import {logger} from "../../utils/global/logger";

// "value.en":value.en, "value.fa":value.fa, "value.ru":value.ru, "value.ar":value.ar
const editSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {id} = request.params
    const {name,value, type} = request.body
    try{
        const item = await simpleTemplate.findById(id);
        if(item){
            item.name= name ? name : item.name
            item.type=type ? type : item.type
            item.value=value ? value : item.value
            await item.save()
        } else {
            reply.code(404).send({
                isSuccessful:false,
                data:null,
                message:"No input found"
            } as IResultOperation)
        }
        reply.code(202).send({
            isSuccessful:true,
            data:item,
            message:"Item Updated Successfully"
        } as IResultOperation)
    } catch (error:any) {
        logger("editSimpleTemplateController", 500, `there is an error : ${error.message}`, 8)
        reply.code(500).send({
            isSuccessful:false,
            data:error.message,
            message:"Something went wrong"
        } as IResultOperation)
    }

}

export {editSimpleTemplateController}