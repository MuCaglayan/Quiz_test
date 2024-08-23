import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamDataService {
  private score: number | null = null;

  setScore(score: number): void {
    this.score = score;
  }

  getScore(): number | null {
    return this.score;
  }
}
