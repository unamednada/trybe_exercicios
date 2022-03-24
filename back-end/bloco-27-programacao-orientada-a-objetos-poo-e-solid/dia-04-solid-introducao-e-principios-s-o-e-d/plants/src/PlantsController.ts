import { Request, Response } from 'express';
import PlantsModel from './model/PlantsModel';

export default class PlantsController {
  static async getPlants(req: Request, res: Response) {
    const plants = await PlantsModel.getPlants();
    return res.status(200).json(plants);
  }

  static async getPlant(req: Request, res: Response) {
    const plant = await PlantsModel.getPlant(req.params.id);
    if (plant) {
      return res.status(200).json(plant);
    }
    return res.status(404).json({ error: 'Plant not found' });
  }
}
