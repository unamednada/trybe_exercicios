import { Request, Response } from 'express';
import TournamentService from '../services/TournamentService';

export default class TournamentController {
  constructor(
    private tournamentService = new TournamentService()
  ) {}

  public async getTournaments(req: Request, res: Response): Promise<Response> {
    const tournaments = await this.tournamentService.getTournaments();
    return res.status(200).json(tournaments);
  }
}