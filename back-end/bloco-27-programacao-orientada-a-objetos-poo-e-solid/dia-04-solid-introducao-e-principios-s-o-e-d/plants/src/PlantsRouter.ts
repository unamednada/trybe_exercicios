import { Router } from 'express';
import PlantsController from './PlantsController';

const PlantsRouter = Router();

PlantsRouter
  .get('/', PlantsController.getPlants)
  .get('/:id', PlantsController.getPlant)
  .delete('/:id', PlantsController.deletePlant)
  .put('/:id', PlantsController.editPlant)
  .post('/', PlantsController.addPlant);

export default PlantsRouter;