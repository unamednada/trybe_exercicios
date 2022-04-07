import express, { Router } from 'express';
import TournamentRouter from './routes';
import Connection from './models/Connection';

class App {
  public express: express.Application;

  public connection: Promise<typeof import('mongoose')>;

  public router: Router;

  constructor() {
    this.express = express();
    this.middlewares();
    this.router = new TournamentRouter().router;
    this.routes();
    this.connection = new Connection().connect();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use('/tournaments', this.router);
  }
}

export default App;