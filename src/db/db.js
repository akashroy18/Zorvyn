import mongoose from "mongoose"
async function connect_Db(){
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(()=>{
            console.log("DB connected")
        })
    } catch (error) {
        console.log("DB not Conneted")
        throw new Error("Db connection failed")
        
    }
}
export default connect_Db