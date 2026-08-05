import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: string[] = [];

  constructor(public authService: AuthService, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.favorites = this.pokemonService.getFavorites();
  }

}
