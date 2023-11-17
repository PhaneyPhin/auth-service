import express from 'express'
import authController from './controller/auth.controller'
import { auth } from './middleware/auth.middleware'
const authRouter = express.Router()

authRouter.post('/get-login-url', authController.getLoginUrl)
authRouter.post('/login', authController.login)
authRouter.post('/request-login', authController.requestLogin)
authRouter.post('/create-merchant', authController.createMerchant)
authRouter.post('/user', auth, authController.getMe)

export default authRouter