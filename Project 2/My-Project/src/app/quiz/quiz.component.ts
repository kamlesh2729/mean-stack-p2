import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  userName:string="";
  msg: string="";
  quizzes: Quiz[] =[];
  currentQuiz =0;
  Test =true;
  currentQuestion =true;
  result = false;
  passFail= false;
  answerSelected = false;
  correctAnswer =0;
  incorrectAnswer =0;
  

  constructor( public quizService:QuizService, public router:Router, public activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(data=>this.userName=data.user);
    this.quizzes = this.quizService.getQuizzes();
  }
  onAnswer(Option:boolean){
    this.answerSelected = true;
  
    if(Option){
      this.correctAnswer++;
    }else{
      this.incorrectAnswer++;
    }
  }
  nextQue(){
    this.currentQuiz++;
    this.answerSelected = false;
    if(this.currentQuiz+1 == this.quizzes.length){
      this.currentQuestion = false;
      this.result= true;
    }   
    }
  showResult(){
    this.Test = false;
    this.passFail = true;
    if(this.correctAnswer == 12){
      this.msg = "Fail";
    }else{
      this.msg = "Pass";
    }
    
  }

}
