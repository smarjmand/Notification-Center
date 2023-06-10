import mongoose from "mongoose";
import {IResultOperation} from "../../models/Interfaces/IResultOperations";
import {values} from "lodash";
import SimpleTemplate from "../../models/databaseModels/SimpleTemplate";
import {ILanguage, languageSchema} from "../../models/Interfaces/iLanguage";
import {object} from "yup";

const getByLanguageSimpleTemplateController = async (request:any, reply:any, done:any) => {
    const {language} = request.headers
    if ( language in languageSchema) {
        const items = await SimpleTemplate.find({}, `value.${language}`).where('isDeleted').equals(false)
        let outputs = []
        for (let item in items){
            const temp = items[item].value
            let vals = Object.values(temp)
            for (let index in vals){
                if (vals[index] !== undefined) {
                    outputs.push(vals[index])
                }
            }
        }
        if (outputs.length > 0) {
            reply.code(200).send({
                isSuccessful:true,
                data:outputs,
                message:'All items are Here'
            } as IResultOperation)
        } else {
            reply.code(404).send({
                isSuccessful:false,
                data:null,
                message:'there is no data in this language'
            } as IResultOperation)
        }
    } else {
       reply.code(404).send({
           isSuccessful:false,
           data:null,
           message:'This language does not exist in database.'
       }as IResultOperation)
    }
}
export {getByLanguageSimpleTemplateController}