import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './components/card-info/card-info.component';



@NgModule({
  declarations: [
    CardInfoComponent
  ],
  imports: [
    CommonModule
  ],exports: [ 
    CardInfoComponent
  ]
})
export class SharedModule { }
