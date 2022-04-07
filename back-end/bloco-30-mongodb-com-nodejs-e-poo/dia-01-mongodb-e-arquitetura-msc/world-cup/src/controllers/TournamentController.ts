import { Request, Response } from 'express';
import TournamentService from '../services/TournamentService';

class TournamentController {
  constructor(
    private tournamentService = new TournamentService()
  ) {
    this.getTournaments = this.getTournaments.bind(this);
    this.getTournamentByYear = this.getTournamentByYear.bind(this);
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

  public async getTournamentByYear(req: Request, res: Response): Promise<Response> {
    try {
      const tournament = await this.tournamentService.getTournamentByYear(+req.params.year);
      if (tournament !== null) return res.status(200).json(tournament);
      return res.status(404).json({ message: 'Tournament not found.' });
    } catch (err: unknown) {
      return res.status(500).json({
        message: 'Unexpected error.'
      });
    }
  }
}

export default TournamentController;
