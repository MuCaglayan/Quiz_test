import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Router'ı import edin
import { CommonModule } from '@angular/common'; // CommonModule'ü import edin
import { Answers } from './answers';
import { AnswerStateManager } from './click';
import { Score } from './score';
import { ExamDataService } from '../exam-data.service';

@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [CommonModule], // CommonModule'ü imports içinde tanımlayın
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent {
  title = 'my-angular-app';
  answers: Answers = new Answers();
  feedback: string = '';
  answerStateManager: AnswerStateManager;
  score: Score;
  finalScore: number = 0;
  examCompleted: boolean = false;

  constructor(private router: Router, private examDataService: ExamDataService) {
    this.answerStateManager = new AnswerStateManager(this.answers.options.length);
    this.score = new Score(this.answerStateManager, this.answers);
  }

  get currentQuestion(): string {
    return this.answers.getQuestion();
  }

  get currentChoices(): string[] {
    return this.answers.options[this.answers.rowController.currentRow].choices;
  }

  get currentQuestionNumber(): number {
    return this.answers.rowController.currentRow + 1;
  }

  get totalQuestions(): number {
    return this.answers.options.length;
  }

  selectAnswer(selectedChoice: string) {
    this.answerStateManager.setCurrentRow(this.answers.rowController.currentRow);
    this.answerStateManager.selectAnswer(selectedChoice);
  }

  isButtonSelected(choice: string): boolean {
    return this.answerStateManager.isSelectedAnswer(choice);
  }

  nextQuestion() {
    this.answers.rowController.nextRow();
    this.answerStateManager.setCurrentRow(this.answers.rowController.currentRow);
  }

  previousQuestion() {
    this.answers.rowController.previousRow();
    this.answerStateManager.setCurrentRow(this.answers.rowController.currentRow);
  }

  completeExam() {
    this.finalScore = this.score.calculateScore();
    this.examCompleted = true;

    // Skoru servise kaydedin
    this.examDataService.setScore(this.finalScore);

    // Sonuç sayfasına yönlendir
    this.router.navigate(['/results']);
  }
}
