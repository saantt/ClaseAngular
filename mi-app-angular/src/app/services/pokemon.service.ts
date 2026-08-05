import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../pokemon/models/pokemon.models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'

})
export class PokemonService {
 private readonly API_BASE = 'https://pokeapi.co/api/v2';
 private favorites = new Set<string>(); 

  constructor(private http: HttpClient) { }

  getList (limit =20, offset =0):Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.API_BASE}/pokemon/${name}`);
  }

  toggleFavorite(pokemonName: string): void {
    if(this.favorites.has(pokemonName)) {
      this.favorites.delete(pokemonName);
    } else {
      this.favorites.add(pokemonName);
    }
  }

  isFavorite(pokemonName: string): boolean {
    return this.favorites.has(pokemonName);
  }

  getFavorites(): string[] {
    return Array.from(this.favorites);
  }
}