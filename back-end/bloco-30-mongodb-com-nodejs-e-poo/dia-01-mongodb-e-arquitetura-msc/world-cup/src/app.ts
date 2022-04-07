import express, { Router } from 'express';
import TournamentRouter from './TournamentRouter';
import Connection from './models/Connection';

class App {
  public express: express.Application;

  public connection: Promise<typeof import('mongoose')>;

  public router: Router;

  constructor() {
    this.express = express();
    this.middlewares();
    this.connection = Connection.connect();
    this.router = new TournamentRouter().router;
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(this.router);
  }
}

export default App;