import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import SimpleTemplate from "../../models/databaseModels/SimpleTemplate";
import simpleTemplate from "../../models/databaseModels/SimpleTemplate";
import {verify} from "crypto";

// "value.en":value.en, "value.fa":value.fa, "value.ru":value.ru, "value.ar":value.ar
const updateSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {id} = request.params
    const {name,value, type} = request.body
    try{
        const item = await simpleTemplate.findById(id);
        if(item){
            item.name= name ? name : item.name
            item.type=type ? type : item.type
            item.value=value ? value : item.value
            await item.save()
        }

        reply.code(202).send({
            isSuccessful:true,
            data:item,
            message:"Item Updated Successfully"
        } as IResultOperation)
    } catch (error:any) {
        console.log(error)
        reply.code(500).send({
            isSuccessful:false,
            data:error.message,
            message:"Something went wrong"
        } as IResultOperation)
    }






    // try{
    //     const item = await simpleTemplate.updateOne(
    //         {_id:pk},
    //         {name,type,isDeleted,"value.en":value.en, "value.fa":value.fa, "value.ar":value.ar, "value.ru":value.ru}
    //     )
    //     reply.code(201).send({
    //         isSuccessful:true,
    //         data:item,
    //         message:"Item Updated Successfully"
    //     } as IResultOperation)
    // } catch (error:any) {
    //     reply.code(500).send({
    //         isSuccessful:false,
    //         data:error.message,
    //         message:"Something went wrong !!"
    //     } as IResultOperation)
    // }






    //     const item = await SimpleTemplate.findById(pk).updateOne(
    //         {},
    //         {name, type, isDeleted},
    //         {runValidators:true}
    //     )
    //     reply.code(201).send({
    //         isSuccessful:true,
    //         data:item,
    //         // data:item,
    //         message:'item updated successfully'
    //     } as IResultOperation)
    // } catch (error:any) {
    //     reply.code(500).send({
    //         isSuccessful:false,
    //         message:'internal error occurred',
    //         data:error.message
    //     }as IResultOperation)
    // }
    // const{value} = request.body
    // const item = simpleTemplate.findById(pk)
    // console.log(value.en)
}

export {updateSimpleTemplateController}