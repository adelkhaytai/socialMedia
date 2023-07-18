import express from 'express'
import { loginUser, registerUser } from '../controllers/AuthControllers.js'



const router = express.Router()

// router.get('/', async(req,res)=>{res.send('auth route')})
router.post('/register',registerUser)
router.post('/login', loginUser)

export default router




