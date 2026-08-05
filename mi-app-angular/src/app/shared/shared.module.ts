import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    PokemonTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    PokemonTypePipe
  ]
})
export class SharedModule { }
