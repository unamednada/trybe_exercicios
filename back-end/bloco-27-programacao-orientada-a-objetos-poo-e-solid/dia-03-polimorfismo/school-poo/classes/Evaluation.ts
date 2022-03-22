import Teacher from "./Teacher";

export default abstract class Evaluation {
  private _score: number = Number();
  private _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this.validateScore(score);
    this._score = score;
    this._teacher = teacher;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  abstract validateScore(value: number): void;
}