import { Router } from "express";
import exerciseController from '../controllers/exerciseController.js'

export const exerciseRouter = Router();

exerciseRouter.get('/', exerciseController.getAll);
