import simpleTemplate from "../../models/databaseModels/SimpleTemplate";
import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";

const permanentDeleteSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {id} = request.params
    try {
        const item = await simpleTemplate.deleteOne({_id:id})
        reply.code(200).send({
            isSuccessful:true,
            data:id,
            message:`${id} deleted`
        } as IResultOperation)
    } catch (error:any) {
        reply.code(500).send({
            isSuccessful:false,
            message:'internal error occurred',
            data:error.message
        }as IResultOperation)
    }
}

export {permanentDeleteSimpleTemplateController}