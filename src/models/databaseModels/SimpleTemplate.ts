import {Mongoose, Schema, SchemaTypes} from "mongoose";
import mongoose from "mongoose";
import {ISimpleTemplate, ISimpleTemplateDocument} from "../Interfaces/iSimpleTemplate";
import {string} from "yup";
import {languageSchema} from "../Interfaces/iLanguage";
import MessageType from "./MessageType";
import {IMessageTypeDocument} from "../Interfaces/IMessageType";

const simpleTemplateSchema = new Schema<ISimpleTemplateDocument>({
    name:{type:String, required:true},
    value:{
        type:languageSchema,
        required:true
    },
    // type:{type:String, required:true},
    type:{
        type:String,
        required:true
    },
    isDeleted:{type:Boolean, default:false},
})

const SimpleTemplate = mongoose.model<ISimpleTemplateDocument >('simpleTemplate', simpleTemplateSchema)
export default SimpleTemplate