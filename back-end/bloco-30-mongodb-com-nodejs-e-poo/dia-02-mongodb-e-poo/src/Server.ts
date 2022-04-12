/* eslint-disable no-underscore-dangle */
import express, { Router } from 'express';
import Connection from './Models/Connection';

class App {
  private app: express.Application;
  
  protected _connection: Connection;

  constructor(
    connection = new Connection(),
  ) {
    this.app = express();
    this.app.use(express.json());
    this._connection = connection;
  }

  public startServer(port = 3001) {
    this._connection.connect();
    const actualPort = process.env.PORT || port;
    return this.app.listen(
      actualPort,
      () => console.log('Server online on port: ', actualPort),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App;