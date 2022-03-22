import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number = Number();

  constructor(evaluation: Evaluation, score: number) {
    this.validateScore(score);
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }

  private validateScore(value: number) {
    if (value < 0) throw new Error('Score can\'t be negative')
    if (value > this._evaluation.score) throw new Error(`Score can\'t be over ${this._evaluation.score}`);
  }
}