export interface ILanguage{
    en:string,
    fa:string,
    ar:string,
    ru:string
}
export const languageSchema = {
    en:{type:String, required:false},
    fa:{type:String, required:false},
    ar:{type:String, required:false},
    ru:{type:String, required:false}
}