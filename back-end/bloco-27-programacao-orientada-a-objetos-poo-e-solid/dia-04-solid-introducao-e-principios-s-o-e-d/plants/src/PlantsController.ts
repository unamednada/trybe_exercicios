import { Request, Response } from 'express';

export default class PlantsController {
  static async getPlants(req: Request, res: Response) {
    res.send('getPlants');
  }
}
