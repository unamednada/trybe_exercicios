import { IPlant } from '../interfaces';
import Connection from './Connection';

export default class PlantsModel {
  static async getPlants(): Promise<IPlant[]> {
    const connection = Connection.getInstance();
    await connection.connect('../../plants.json');
    const plants = await connection.getConnection();
    return plants as IPlant[];
  }
}
