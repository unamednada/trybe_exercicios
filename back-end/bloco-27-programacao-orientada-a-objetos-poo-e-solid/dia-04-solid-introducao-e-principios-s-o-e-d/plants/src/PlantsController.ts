import { Request, Response } from 'express';
import PlantsModel from './model/PlantsModel';

const plantNotFound = 'Plant not found';

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
    return res.status(404).json({ error: plantNotFound });
  }

  static async deletePlant(req: Request, res: Response) {
    try {
      await PlantsModel.deletePlant(req.params.id);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).json({ error: plantNotFound });
    }
  }

  static async editPlant(req: Request, res: Response) {
    try {
      await PlantsModel.editPlant(req.params.id, req.body);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).json({ error: plantNotFound });
    }
  }

  static async addPlant(req: Request, res: Response) {
    await PlantsModel.addPlant(req.body);
    return res.status(201).end();
  }
}
