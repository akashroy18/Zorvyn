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
export const login = async(req,res)=>{
    try {
        const {email,password}= req.body
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"USer not exsist,register first"
            })
        }
        const isPassword = await bcrypt.compare(password,user.password)
        if(!isPassword){
            return res.status(400).json({
                message:"Incorrect Password"
            })
        }
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        res.cookie("token",token)
        res.status(200).json({
            message:"User logged in Succsefully",
            success:true
        })
    } catch (error) {
        console.log("error in log in")
        res.status(500).json({ message: error.message })
    }
}
export const logout = async (req,res)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({
                message:"User alread logged out"
            })
        }
        res.clearCookie("token")
        res.status(200).json({
        success: true,
        message: "Logged out successfully"
        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}