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
    this.router.get('/:year', this.tournamentController.getTournamentByYear);
    this.router.post('/', this.tournamentController.createTournament);
    this.router.put('/:year', this.tournamentController.updateTournament);
  }
}
