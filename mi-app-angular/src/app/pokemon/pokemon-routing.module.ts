import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  {path: ':name', component: PokemonDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
