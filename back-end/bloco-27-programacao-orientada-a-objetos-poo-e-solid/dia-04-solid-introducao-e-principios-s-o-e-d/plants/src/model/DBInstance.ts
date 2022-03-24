import { IPlant } from '../interfaces';
import Connection from './Connection';

export default class DBInstance {
  static path: string = './plants.json';

  static async getDBData(): Promise<IPlant[]> {
    const connection = Connection.getInstance();
    await connection.connect(this.path);
    const plants = await connection.getConnection();
    return plants as IPlant[];
  }

  static async writeDBData(data: IPlant[]): Promise<void> {
    const connection = Connection.getInstance();
    await connection.connect(this.path);
    await connection.write(this.path, data);
  }
}
