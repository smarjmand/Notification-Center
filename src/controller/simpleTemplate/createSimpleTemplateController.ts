import simpleTemplateModel from "../../models/databaseModels/SimpleTemplate";
import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
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
        reply.code(201).send({
            isSuccessful:true,
            data:simpleTemplate._id,
            message:'data saved successfully'
        } as IResultOperation)
    } catch (error:any) {
        reply.code(500).send({
            isSuccessful:false,
            message:'internal error occurred',
            data:error.message
        }as IResultOperation)
    }
}

export {createSimpleTemplateController}