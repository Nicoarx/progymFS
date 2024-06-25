import { Router } from "express";
import workoutController from '../controllers/userController.js'

export const workoutRouter = Router();

workoutRouter.get('', userController.login);