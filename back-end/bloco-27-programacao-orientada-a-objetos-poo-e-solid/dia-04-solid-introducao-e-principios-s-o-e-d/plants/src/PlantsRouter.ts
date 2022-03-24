import { Router } from 'express';
import PlantsController from './PlantsController';

const PlantsRouter = Router();

PlantsRouter.get('/', PlantsController.getPlants);
PlantsRouter.get('/:id', PlantsController.getPlant);
PlantsRouter.delete('/:id', PlantsController.deletePlant);

export default PlantsRouter;