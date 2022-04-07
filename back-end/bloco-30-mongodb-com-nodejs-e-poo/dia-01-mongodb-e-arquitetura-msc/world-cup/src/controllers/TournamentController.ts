import { Request, Response } from 'express';
import TournamentService from '../services/TournamentService';

class TournamentController {
  constructor(
    private tournamentService = new TournamentService()
  ) {
    this.getTournaments = this.getTournaments.bind(this);
  }

  public async getTournaments(req: Request, res: Response): Promise<Response> {
    try {
      const tournaments = await this.tournamentService.getTournaments();
      return res.status(200).json(tournaments);
    } catch (err: unknown) {
      return res.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }
}

export default TournamentController;
