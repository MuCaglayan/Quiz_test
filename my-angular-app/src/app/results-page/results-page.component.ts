import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamDataService } from '../exam-data.service';
@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent {
  score: number | null = null;

  constructor(private examDataService: ExamDataService) {
    this.loadScore();
  }

  private loadScore(): void {
    // Skoru servisten alın ve score değişkenine atayın
    this.score = this.examDataService.getScore();
  }
}
