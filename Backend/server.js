import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import reservationRoute from './routes/reservationsRoute.js'

const app=express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

app.use(cors())
app.use(express.json())

 app.use('/api/user',userRouter)
 app.use('/api/product',productRouter)
 app.use('/api/reservations',reservationRoute)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log('Server started on port' + port ))