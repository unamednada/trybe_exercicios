import mongoose from 'mongoose';

export type IConnection = typeof mongoose;

class Connection {
  protected mongoDBURI: string;

  constructor(
    mongoDBURI = 'mongodb:root:example@localhost:27017/TrybeStore',
  ) { 
    this.mongoDBURI = mongoDBURI;
  }

  public async connect(): Promise<IConnection> {
    const connection = await mongoose.connect(this.mongoDBURI);

    return connection;
  }
}

export default Connection;
