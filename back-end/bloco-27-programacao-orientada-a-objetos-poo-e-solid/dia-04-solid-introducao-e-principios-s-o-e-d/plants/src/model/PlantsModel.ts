import { IPlant } from '../interfaces';
import Connection from './Connection';

export default class PlantsModel {
  static async getPlants(): Promise<IPlant[]> {
    const connection = Connection.getInstance();
    await connection.connect('./plants.json');
    const plants = await connection.getConnection();
    return plants as IPlant[];
  }

  static async getPlant(id: string): Promise<IPlant> {
    const connection = Connection.getInstance();
    await connection.connect('./plants.json');
    const plants = await connection.getConnection() as IPlant[];
    return plants.filter((plant) => plant.id === id)[0];
  }
}
