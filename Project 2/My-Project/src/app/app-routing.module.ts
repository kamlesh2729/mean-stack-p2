import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpComponent } from './loginp/loginp.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component:LoginpComponent},
  {path:'quiz/:user', component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
