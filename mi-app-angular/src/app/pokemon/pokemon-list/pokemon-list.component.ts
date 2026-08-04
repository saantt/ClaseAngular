import { Component, OnInit } from '@angular/core';
import { PokemonListItem, PokemonListResponse } from '../models/pokemon.models';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList$!: Observable<PokemonListResponse>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getList(20, 0);
  }
  trackByName(index:number,item:PokemonListItem):string{
    return item.name;
  }

}
  