import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './components/list-students/list-students.component';



@NgModule({
  declarations: [
    ListStudentsComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ListStudentsComponent
  ]
})
export class StudentsModule { }
