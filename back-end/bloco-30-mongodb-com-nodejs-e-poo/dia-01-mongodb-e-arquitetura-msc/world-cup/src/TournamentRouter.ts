import { Router } from 'express';
import TournamentController from './controllers/TournamentController';

export default class TournamentRouter {
  public router: Router;

  constructor(
    private tournamentController = new TournamentController()
  ) {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', this.tournamentController.getTournaments);
  }
}
