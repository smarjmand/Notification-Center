import {Document} from "mongoose";

export interface IMessageType{
    messageType:string
}

export interface IMessageTypeDocument extends IMessageType, Document {}