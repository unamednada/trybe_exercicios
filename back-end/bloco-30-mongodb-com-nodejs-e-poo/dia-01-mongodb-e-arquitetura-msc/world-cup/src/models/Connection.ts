import mongoose from 'mongoose';

export type IConnection = typeof mongoose;

export default class Connection {
  public static async connect(): Promise<IConnection> {
    const connection = await mongoose.connect('mongodb://localhost:27017/world_cups');
    return connection;
  }
}
