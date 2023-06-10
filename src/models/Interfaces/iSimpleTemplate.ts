import {ILanguage} from "./iLanguage";
import {Document, Schema} from "mongoose";
import {extend} from "lodash";
export interface ISimpleTemplate {
    // type:string,
    type:"sms"|"email"|"push",
    name:string,
    value:ILanguage,
    isDeleted:Boolean
}
export interface ISimpleTemplateDocument extends ISimpleTemplate, Document {}