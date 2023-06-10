import simpleTemplate from "../../models/databaseModels/SimpleTemplate";
import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";

const softDeleteSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {id} = request.params
    try{
        const item = await simpleTemplate.findById(id).updateOne({isDeleted:true})
        reply.code(200).send({
            isSuccessful:true,
            data:item,
            message:'Item Deleted'
        } as IResultOperation)
    } catch (error:any) {
        reply.code(404).send({
            isSuccessful:false,
            data:error.message,
            message:'Not Found !!'
        } as IResultOperation)
    }
}

export {softDeleteSimpleTemplateController}