import TournamentModel from '../models/TournamentModel';
import { ITournament } from '../schemas/TournamentSchema';

export default class TournamentService {
  constructor(
    private tournamentModel = new TournamentModel()
  ) {}
  
  public async getTournaments(): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.getTournaments();
    return tournaments;
  }

  public async getTournamentByYear(year: number): Promise<ITournament | null> {
    const tournament = await this.tournamentModel.getTournamentByYear(year);
    return tournament;
  }

  public async createTournament(tournament: ITournament): Promise<ITournament> {
    const newTournament = await this.tournamentModel.createTournament(tournament);
    return newTournament;
  }
}
