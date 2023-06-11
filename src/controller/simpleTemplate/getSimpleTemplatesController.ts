import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import {values} from "lodash";
import SimpleTemplate from "../../models/databaseModels/SimpleTemplate";
import {logger} from "../../utils/global/logger";


const getSimpleTemplatesController = async (request:any, reply:any, done:any) => {
    try{
        const items = await SimpleTemplate.find({}).where('isDeleted').equals(false).populate('type')
        if (items.length !== 0){
            reply.code(200).send({
                isSuccessful:true,
                data:items,
                message:'These are all items from collection'
            } as IResultOperation)
        } else {
            reply.code(404).send({
                isSuccessful:false,
                data:null,
                message:'There are no items in database'
            } as IResultOperation)
        }

    } catch (error:any) {
        logger("getSimpleTemplatesController",500,`there is an error : ${error.message}`,8);
        reply.code(500).send({
            isSuccessful:false,
            data:'something went wrong !!',
            message:error.message
        }as IResultOperation)
    }
}

export {getSimpleTemplatesController}