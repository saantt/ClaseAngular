import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.models';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon?: Pokemon;

  constructor(private route:ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getByName(name).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    } 
  }

}
