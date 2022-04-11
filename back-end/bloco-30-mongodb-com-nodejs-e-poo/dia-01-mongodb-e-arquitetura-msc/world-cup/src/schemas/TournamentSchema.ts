import { Schema, Document, Types } from 'mongoose';

export interface ITournament extends Document {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer?: string,
  bestGoalKeeper?: string,
  bestYoungPlayer?: string,
}

export const TournamentSchema = new Schema<ITournament>({
  id: { type: Types.ObjectId },
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: [{ type: String }], required: true },
  bestPlayer: { type: String, required: false },
  bestGoalKeeper: { type: String, required: false },
  bestYoungPlayer: { type: String, required: false }, 
}, {
  versionKey: false,
});
