import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] =[
    {
      question:'Q.1) Who is sometimes Called as Father of AngularJS?',
      answer:[
        {Option:' A)Misko Hevery',correct:true},
        {Option:' B)Igor minor',correct:false},
        {Option:' C)Brad Green ',correct:false},
        {Option:' D)Brain Ford ',correct:false},
      ]
    },
    {
      question:'Q.2) Which of the following is true about ng-init directive?',
      answer:[
        {Option:' A)ng-init directive initializes an AngularJs Application data.',correct:false},
        {Option:' B)Both of the Above',correct:true},
        {Option:' C)ng-init directive initializes an AngularJs Application data. ',correct:false},
        {Option:' D)None of the Above ',correct:false},
      ]
    },
    {
      question:'Q.3) Data Binding in AngularJs means ?',
      answer:[
        {Option:' A)Synchronization between controller part and view part',correct:false},
        {Option:' B)Synchronization between model part and controller part',correct:false},
        {Option:' C)Synchronization between model part and view part ',correct:true},
        {Option:' D)None of the above',correct:false},
      ]
    },
    {
      question:'Q.4)  Which directive is used to start an angularJS application?',
      answer:[
        {Option:' A)ng-begin ',correct:false},
        {Option:' B)ng-start',correct:false},
        {Option:' C)None of the above ',correct:false},
        {Option:' D)ng-app',correct:true},
      ]
    },
    {
      question:'Q.5) AngularJs is based on?',
      answer:[
        {Option:' A)MVC Architecture ',correct:false},
        {Option:' B)Decorator pattern ',correct:false},
        {Option:' C)Observer Pattern ',correct:false},
        {Option:' D)MVVM Architectural pattern ',correct:true},
      ]
    },
    {
      question:'Q.6) AngularJs is used in?',
      answer:[
        {Option:' A)Model ',correct:false},
        {Option:' B)Controller ',correct:false},
        {Option:' C)Method ',correct:false},
        {Option:' D)View ',correct:true},
      ]
    },
    {
      question:'Q.7)  Which directive links AngularJs with HTML?',
      answer:[
        {Option:' A)ng-begin ',correct:false},
        {Option:' B)ng-start ',correct:false},
        {Option:' C)all of the above ',correct:false},
        {Option:' D)ng-app ',correct:true},
      ]
    },
    {
      question:'Q.8) Which sign is used as prefix for the built-in objects in AngularJS?',
      answer:[
        {Option:' A)# ',correct:false},
        {Option:' B)@ ',correct:false},
        {Option:' C)* ',correct:false},
        {Option:' D)$ ',correct:true},
      ]
    },
    {
      question:'Q.9)  Mark the invalid AngularJs filter?',
      answer:[
        {Option:' A)curreny ',correct:false},
        {Option:' B)lowercase ',correct:false},
        {Option:' C)orderby  ',correct:false},
        {Option:' D)email ',correct:true},
      ]
    },
    {
      question:'Q.10) AngularJs expressions are written using?',
      answer:[
        {Option:' A)single braces like {expression} ',correct:false},
        {Option:' B)small braces like (expression) ',correct:false},
        {Option:' C)capital braces like [expression] ',correct:false},
        {Option:' D)double braces like {{expression}} ',correct:true},
      ]
    },
    {
      question:'Q.11) The controller take the single parameter?',
      answer:[
        {Option:' A)$control ',correct:false},
        {Option:' B)^scope ',correct:false},
        {Option:' C)None of the above ',correct:false},
        {Option:' D)$scope ',correct:true},
      ]
    },
    {
      question:'Q.12) Angular 1.x is written in?',
      answer:[
        {Option:' A)C++ ',correct:false},
        {Option:' B)Java ',correct:false},
        {Option:' C)Typescript ',correct:false},
        {Option:' D)Javascript ',correct:true},
      ]
    },
    {
      question:'Q.13) AngularJs is an ..... based framework?',
      answer:[
        {Option:' A)JAVA ',correct:false},
        {Option:' B)Android ',correct:false},
        {Option:' C)None of the above ',correct:false},
        {Option:' D)MVC ',correct:true},
      ]
    },
    {
      question:'Q.14) An Angular application can be initialized on _______?',
      answer:[
        {Option:' A)Only HTML element ',correct:false},
        {Option:' B)Java Script Function ',correct:false},
        {Option:' C)None of the above ',correct:false},
        {Option:' Any element ',correct:true},
      ]
    },
    {
      question:'Q.15) $routeprovider in AngularJs is?',
      answer:[
        {Option:' A)A component ',correct:false},
        {Option:' B)A methods ',correct:false},
        {Option:' C)A model  ',correct:false},
        {Option:' D)A service ',correct:true},
      ]
    },
    {
      question:'Q.16) AngularJs Works in?',
      answer:[
        {Option:' A)angular.module is primarily used to create application module. ',correct:false},
        {Option:' B)angular.module is used to create AngularJS modules along with its dependent modules ',correct:false},
        {Option:' C)None of the above ',correct:false},
        {Option:' D)Both A and B ',correct:true},
      ]
    },
    {
      question:'Q.17) No of $RootScope in angularJs ?',
      answer:[
        {Option:' A)2 ',correct:false},
        {Option:' B)4 ',correct:false},
        {Option:' C)3 ',correct:false},
        {Option:' D)1 ',correct:true},
      ]
    },
    {
      question:'Q.18) MVVM stands for ?',
      answer:[
        {Option:' A)Model view controller ',correct:false},
        {Option:' B)Model-view ',correct:false},
        {Option:' C)View-Model  ',correct:false},
        {Option:' D)Model–view–viewmodel ',correct:true},
      ]
    },
    {
      question:'Q.19) Which directive is used for form?',
      answer:[
        {Option:' A)ng-app ',correct:false},
        {Option:' B)ng-start ',correct:false},
        {Option:' C)ng-end  ',correct:false},
        {Option:' D)ng-form ',correct:true},
      ]
    },
    {
      question:'Q.20) How you an share data between controller and viewer?',
      answer:[
        {Option:' A)using components',correct:false},
        {Option:' B)using models ',correct:false},
        {Option:' C)using method ',correct:false},
        {Option:' D)using service',correct:true},
      ]
    },
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
