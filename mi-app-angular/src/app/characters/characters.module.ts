import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersRoutingModule } from './characters.routing.module';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }