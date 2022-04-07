import { model as createModel } from 'mongoose';
import { TournamentSchema, ITournament } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(
    private tournamentModel = createModel<ITournament>('tournaments', TournamentSchema)
  ) {}

  public async getTournaments(): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.find();
    return tournaments;
  }

  public async getTournamentByYear(year: number): Promise<ITournament | null> {
    const tournament = await this.tournamentModel.findOne({ year });
    return tournament;
  }

  public async createTournament(tournament: ITournament): Promise<ITournament> {
    const newTournament = await this.tournamentModel.create(tournament);
    return newTournament;
  }

  public async updateTournament(year: number, tournament: ITournament): Promise<ITournament | null> {
    const updatedTournament = await this.tournamentModel.findOneAndUpdate({ year }, tournament, { new: true });
    return updatedTournament;
  }

  public async deleteTournament(year: number): Promise<ITournament | null> {
    const deletedTournament = await this.tournamentModel.findOneAndDelete({ year });
    return deletedTournament;
  }
}