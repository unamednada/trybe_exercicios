import Teacher from "./Teacher";

export default class Evaluation {
  private _score: number = Number();
  private _teacher: Teacher;
  private _type: string = String();

  constructor(score: number, teacher: Teacher, type: string) {
    this.validateScore(score);
    this.validateType(type);
    this._score = score;
    this._teacher = teacher;
    this._type = type;
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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this.validateType(value);
    this._type = value;
  }

  private validateType(value: string): void {
    if (!['exam', 'paper'].includes(value)) throw new Error('Type can assume one of 2 values: \'exam\' or \'paper\'')
  }

  private validateScore(value: number): void {
    if (value < 0) throw new Error('Score can\'t be negative')
    if (this._type === 'exam' && value > 25) throw new Error('Exam score can\'t be over 25')
    if (this._type === 'paper' && value > 50) throw new Error('Paper score can\'t be over 50')
  }
}