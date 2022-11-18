import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';
import { Answers } from './answers';
@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(public http:HttpClient) { }
  loadAllQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>("./assets/questions.json");
  }
  loadAllAnswers():Observable<Answers[]>{
    return this.http.get<Answers[]>("./assets/answers.json");
  }
}
