import fs from 'fs/promises';

export default class Connection {
  private static instance: Connection;

  private connection: any;

  private constructor() {
    this.connection = {};
  }

  public static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }
    return Connection.instance;
  }

  public async connect(path: string): Promise<void> {
    const data = await fs.readFile(path, 'utf8');
    this.connection = JSON.parse(data);
  }

  public async write(path: string, data: any): Promise<void> {
    await fs.writeFile(path, JSON.stringify(data));
  }

  public getConnection(): any {
    return this.connection;
  }
}
