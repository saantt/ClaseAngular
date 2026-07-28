import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponentComponent } from './components/register-form-component/register-form-component.component';


@NgModule({
  declarations: [AppComponent, RegisterFormComponentComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
