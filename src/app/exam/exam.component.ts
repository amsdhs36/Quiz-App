import { Component, OnInit } from '@angular/core';
import { Answers } from '../answers';
import { ExamService } from '../exam.service';
import { Questions } from '../questions';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
questions:Array<Questions>=[];
answers:Array<Answers>=[];
myAns=new Map();
  constructor(public ex:ExamService) { }//DI for Exam Service
  ngOnInit(): void {
    this.ex.loadAllQuestions().subscribe({
      next:(data:any)=>this.questions=data.questions,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("Questions loaded..")
      });
      this.ex.loadAllAnswers().subscribe({
        next:(data:any)=>this.answers=data.answers,
        error:(error:any)=>console.log(error),
        complete:()=>console.log("Answers Loaded..")
        })
  }
  f1:boolean=true;
  f2:boolean=false;
  f3:boolean=false;
  msg:string=""
ans(qid:any,ans:any){
  this.myAns.set(qid,ans);
}
submitExam(){
  let count=0;
  
  this.answers.forEach((value:any,index:any)=>{
     console.log(value.qid+" "+this.myAns.get(index+1));
          this.myAns.forEach((v:any,k:any)=>{
    
            if(k==value.qid && v==value.ans){
                          
               count++;
           
             }
             
         });
  })
 // console.log(count);
  this.msg="You scored "+count+ " marks out of 10";
  this.f1=false;
  this.f2=true;
}
retakeexam(){
  this.f1=true;
  this.f2=false;
}

reviewExam(){
  this.f1=false;
  this.f2=false;
  this.f3=true;  
 
  }
  isCorrect(){
    this.f3=true;
    
  }
}