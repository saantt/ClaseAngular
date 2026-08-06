import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import { ErrorToastComponent } from './components/error-toast/error-toast.component';



@NgModule({
  declarations: [
    CapitalizePipe,
    PokemonTypePipe,
    ErrorToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    PokemonTypePipe,
    ErrorToastComponent
  ]
})
export class SharedModule { }
