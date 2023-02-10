import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {StudentManagementComponent} from './components/student-management/student-management.component';
import {StudentFormComponent} from './components/student-form/student-form.component';
import {FontSizeDirective} from './directives/font-size.directive';
import {CompleteNamePipe} from './pipes/complete-name.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentManagementComponent,
    StudentFormComponent,
    FontSizeDirective,
    CompleteNamePipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
