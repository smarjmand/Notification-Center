import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import SimpleTemplate from "../../models/databaseModels/SimpleTemplate";
import {logger} from "../../utils/global/logger";


const getSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {id} = request.params
    try {
        const item = await SimpleTemplate.findOne({_id:id,isDeleted:false})
        if(item) {
            reply.code(200).send({
                isSuccessful:true,
                data:item,
                message:"Item is found by ID"
            } as IResultOperation)
        } else {
            reply.code(404).send({
              isSuccessful:false,
              data:null,
              message:"This item does not exist"
            } as IResultOperation)
        }

    } catch (error:any) {
        logger("getSimpleTemplateController", 404, `there is an error : ${error.message}`, 8)
        console.log(error)
        reply.code(404).send({
            isSuccessful:false,
            data:error.message,
            message:"Item not found"
        } as IResultOperation)
    }
}

export {getSimpleTemplateController}