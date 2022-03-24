import { Router } from 'express';
import PlantsController from './PlantsController';

const PlantsRouter = Router();

PlantsRouter.get('/', PlantsController.getPlants);

export default PlantsRouter;