import { Component, OnInit } from '@angular/core';
import { TFormService } from '../t-form.service';
import { FormType } from '../models/form-type.model';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'new-form-create',
  templateUrl: './new-form-create.component.html',
  styleUrls: ['./new-form-create.component.css']
})
export class NewFormCreateComponent implements OnInit {
  formTypes: FormType[];
  activities: Activity[];
  constructor(private tformService: TFormService) { }

  ngOnInit() {
    this.formTypes=this.tformService.loadAllFormTypes();
  }
  //on form Type Selection
  onFormTypeChange(selectedFormTypeValue){
    console.log(selectedFormTypeValue);
    this.formTypes.filter(formType=>{
      if(formType.formTypeKey.includes(selectedFormTypeValue)){
        this.activities=formType.activities;
      }
    })
  }

}
