import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from '@angular/router';
import { NewFormCreateComponent } from './new-form-create/new-form-create.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormInputsCreateComponent } from './form-inputs-create/form-inputs-create.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { WorkspaceLeftPaneComponent } from './workspace-left-pane/workspace-left-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    MainPageComponent,
    WorkspaceComponent,
    NewFormCreateComponent,
    AddQuestionComponent,
    FormInputsCreateComponent,
    ShowQuestionComponent,
    WorkspaceLeftPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: MainPageComponent},
      { path: "workspace", component: WorkspaceComponent},
      { path: "new-form-create", component: NewFormCreateComponent},
      { path: "create", component: FormInputsCreateComponent}              
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
