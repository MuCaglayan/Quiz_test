import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ExamDataService } from './exam-data.service'; // Servisi import edin

@NgModule({
  declarations: [
    AppComponent,
    StartQuizComponent,
    ExamPageComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExamDataService], // Servisi providers dizisine ekleyin
  bootstrap: [AppComponent]
})
export class AppModule { }