import { Component, OnInit } from '@angular/core';
import { QuestionType } from '../models/question-type.model';
import { TFormService } from '../t-form.service';

@Component({
  selector: 'form-inputs-create',
  templateUrl: './form-inputs-create.component.html',
  styleUrls: ['./form-inputs-create.component.css']
})
export class FormInputsCreateComponent implements OnInit {

  questionTypes: QuestionType[];
  showQuestionTypes: boolean=false;
  questionModel=null;
  showQuestionInputForm: boolean=false;
  constructor(private tFormService: TFormService) { }

  ngOnInit() {
  }
  getQuestionTypes(){
    this.questionTypes=this.tFormService.loadAllQuestionTypes();    
    console.log(this.questionTypes);
    this.showQuestionTypes=true;
  }
  showQuestionInput(questionType){
    console.log(questionType);
    this.showQuestionInputForm=true;
  }
}
