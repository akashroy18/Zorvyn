import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Viewer","Analyst","Admin"],
        default:"Viewer"
    },
    isActive:{
        type:Boolean,
        default:true
    }

},{timestamps:true})
export default mongoose.model("User",userSchema)