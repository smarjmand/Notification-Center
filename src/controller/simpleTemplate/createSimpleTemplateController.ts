import simpleTemplateModel from "../../models/databaseModels/SimpleTemplate";
import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import {logger} from "../../utils/global/logger";
const createSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {name, value, type} = request.body
    if (!name||!value||!type||!value.fa||!value.en) {
        reply.code(400).send({
            isSuccessful: false,
            message: 'inputs are not recognized',
            data: 'ورودی ها غیر معتبرند'
        } as IResultOperation)
    }
    try{
        const simpleTemplate = new simpleTemplateModel({
            name,
            type,
            value
        })
        await simpleTemplate.save()
        logger("createSimpleTemplateController", 201, `message: Item created.`, 1)
        reply.code(201).send({
            isSuccessful:true,
            data:simpleTemplate._id,
            message:'data saved successfully'
        } as IResultOperation)
    } catch (error:any) {
        logger("createSimpleTemplateController", 500, `there is an error : ${error.message}`, 8)
        reply.code(500).send({
            isSuccessful:false,
            message:'internal error occurred',
            data:error.message
        }as IResultOperation)
    }
}

export {createSimpleTemplateController}