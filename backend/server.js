import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// App Config
 const app = express()
 const port = process.env.port || 4000
 connectDB()
 connectCloudinary()

//Middlewares
app.use(express.json())
app.use(cors())

//Endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/', (req,res)=> {
    console.log(process.env.CLOUDINARY_API_KEY)
    console.log(process.env.CLOUDINARY_SECRET_KEY)
    console.log(process.env.CLOUDINARY_NAME)
    res.send("API working")
})

app.listen(port,()=>console.log('Server running in: '+ port));