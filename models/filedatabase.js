import { Schema,model } from "mongoose";

const filed=new Schema({
    file:{
        type:String,
        required:false,
    },
},{timestamps:true})
export default model('file',filed);