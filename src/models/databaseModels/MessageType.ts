import {Schema} from "mongoose";
import mongoose from "mongoose";
import {IMessageTypeDocument} from "../Interfaces/IMessageType";

const messageTypeSchema = new Schema<IMessageTypeDocument>({
    messageType:{type:String, required:true}
})

const MessageType = mongoose.model<IMessageTypeDocument>('messageType', messageTypeSchema)

export default MessageType