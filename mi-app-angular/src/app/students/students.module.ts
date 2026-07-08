import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListStudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ], exports: [
    ListStudentsComponent
  ]
})
export class StudentsModule { }
