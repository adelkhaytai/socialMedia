import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import AuthRoute from './routes/AuthRoutes.js'
import UserRoutes from './routes/UserRoutes.js'
import PostRotes from './routes/PostRoutes.js'
import UploadRoutes from './routes/UploadRoute.js'


const app = express()


// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));

//routes
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
dotenv.config()
//middleware


//usage of routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoutes)
app.use('/posts', PostRotes)
app.use('/upload', UploadRoutes)
// app.use('/posts', PostRoute)
// app.use('/chat', ChatRoute)
// app.use('/message', MessageRoute)
//create a connection

const connect = async()=>{
   try {
      await mongoose.connect(process.env.MONGO_URL,)
      console.log('database connected')
   } catch (error) {
      console.log(error)
   }
}
connect()


// mongoose.connect(process.env.MONGO_URL)
const PORT = process.env.PORT
app.listen(PORT,(error)=>{
   error ? console.log(error)
   : console.log(`server runnig on port ${PORT}`)
})




