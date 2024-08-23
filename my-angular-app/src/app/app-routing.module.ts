import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  { path: 'start-quiz', component: StartQuizComponent },
  { path: 'exam-page', component: ExamPageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: '', redirectTo: '/start-quiz', pathMatch: 'full' } // Varsayılan rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
