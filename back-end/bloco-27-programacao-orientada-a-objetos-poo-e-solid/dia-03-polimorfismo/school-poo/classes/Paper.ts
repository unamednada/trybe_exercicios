import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Paper extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  public validateScore(value: number): void {
    if (value < 0) throw new Error('Score can\'t be negative');
    if (value > 50) throw new Error('Score can\'t be over 25');
  }
};
