import express from 'express'
import cookieParser from 'cookie-parser';
import authroutes from './routes/auth.routes.js'
import recordroutes from './routes/record.routes.js'
import dashroutes from './routes/dashboard.routes.js'
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/auth",authroutes)
app.use("/api/v1/records",recordroutes)
app.use("/api/v1/dashboard",dashroutes)
export default app