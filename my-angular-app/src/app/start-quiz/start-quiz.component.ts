import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-quiz',
  standalone: true,
  imports: [CommonModule], // CommonModule'ü imports içinde tanımlayın
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent {
  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/exam-page']);
  }
}

