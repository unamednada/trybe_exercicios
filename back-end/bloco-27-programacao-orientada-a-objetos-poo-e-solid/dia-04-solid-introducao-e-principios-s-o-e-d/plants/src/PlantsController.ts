import { Request, Response } from 'express';
import PlantsModel from './model/PlantsModel';

export default class PlantsController {
  static async getPlants(req: Request, res: Response) {
    const plants = await PlantsModel.getPlants();
    return res.status(200).json(plants);
  }
}
