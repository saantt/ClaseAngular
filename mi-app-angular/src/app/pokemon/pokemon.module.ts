import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ]
})
export class PokemonModule { }
