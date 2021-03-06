import { IPlant } from '../interfaces';
import DBInstance from './DBInstance';

export default class PlantsModel {
  static async getPlants(): Promise<IPlant[]> {
    const plants: IPlant[] = await DBInstance.getDBData();
    return plants;
  }

  static async getPlant(id: string): Promise<IPlant> {
    const plants: IPlant[] = await DBInstance.getDBData();
    return plants.filter((plant) => plant.id === id)[0] as IPlant;
  }

  static async deletePlant(id: string): Promise<void> {
    const plants: IPlant[] = await DBInstance.getDBData();
    const newPlants = plants.filter((plant) => plant.id !== id);
    if (newPlants.length === plants.length) {
      throw new Error('Plant not found');
    }
    await DBInstance.writeDBData(newPlants);
  }

  static async editPlant(id: string, plant: IPlant): Promise<void> {
    const plants: IPlant[] = await DBInstance.getDBData();
    const newPlants = plants.map((p) => {
      if (p.id === id) {
        return plant;
      }
      return p;
    });
    await DBInstance.writeDBData(newPlants);
  }

  static async addPlant(plant: IPlant): Promise<void> {
    const plants: IPlant[] = await DBInstance.getDBData();
    const newPlants = [...plants, plant];
    await DBInstance.writeDBData(newPlants);
  }
}
