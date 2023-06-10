import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import SimpleTemplate from "../../models/databaseModels/SimpleTemplate";


const getSingleItemController = async (request:any, reply:any, done:any) => {
    const {id} = request.params
    try {
        const item = await SimpleTemplate.findOne({_id:id,isDeleted:false})
        reply.code(200).send({
            isSuccessful:true,
            data:item,
            message:"Item is found by ID"
        } as IResultOperation)
    } catch (error:any) {
        console.log(error)
        reply.code(404).send({
            isSuccessful:false,
            data:error.message,
            message:"Item not found"
        } as IResultOperation)
    }
}

export {getSingleItemController}