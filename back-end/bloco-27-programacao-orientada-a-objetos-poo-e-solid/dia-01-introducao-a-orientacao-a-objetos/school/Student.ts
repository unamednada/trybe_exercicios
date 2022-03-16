class Student {
  id: number;
  name: string;
  examResults: number[];
  paperResults: number[];

  constructor(id: number, name: string, examResults: number[], paperResults: number[]) {
    this.id = id;
    this.name = name;
    this.examResults = examResults;
    this.paperResults = paperResults;
  }
}