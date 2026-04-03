import dotenv from 'dotenv'
import app from "./src/app.js"
import connect_Db from './src/db/db.js'
dotenv.config()
connect_Db().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server Started")
    })
})
.catch((e)=>{
    console.log(e)
    process.exit(1)
})
