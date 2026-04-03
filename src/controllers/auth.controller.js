import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
export const registerUser = async (req,res)=>{
    try {
        const {name,email,password}=req.body
        const isUseralready = await userModel.findOne({email})
        if(isUseralready){
            return res.status(400).json({
                message:"User already exsist"
            })
        }
        const hashpasswd = await bcrypt.hash(password,10)
        const user = await userModel.create({
            name,
            email,
            password:hashpasswd
        })
        return res.status(201).json({
            message:"User created Succesfully",
            user:{
                _id:user._id,
                email:user.email,
                name:user.name
            }

        })
    } catch (error) {
    console.log("Error while registration ", error)
    return res.status(500).json({
        message: "Internal server error"
    })
}
}