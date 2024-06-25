import { Router } from "express";
import userController from '../controllers/userController.js'

export const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signUp);
userRouter.patch('/', userController.updatePassword)
userRouter.delete('/', userController.deleteUser);


