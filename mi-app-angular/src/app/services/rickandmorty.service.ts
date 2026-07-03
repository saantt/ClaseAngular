import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  /**
   * Obtener un personaje aleatorio
   */
  getRandomCharacter(): Observable<Character> {
    const randomId = Math.floor(Math.random() * 826) + 1; // La API tiene 826 personajes
    return this.http.get<Character>(`${this.apiUrl}/${randomId}`);
  }

  /**
   * Obtener un personaje por ID
   */
  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  /**
   * Obtener personajes por página
   */
  getCharactersByPage(page: number = 1): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}?page=${page}`);
  }

  /**
   * Buscar personajes por nombre
   */
  searchCharacterByName(name: string): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}?name=${name}`);
  }

  /**
   * Obtener múltiples personajes por IDs
   */
  getCharactersByIds(ids: number[]): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/${ids.join(',')}`);
  }
}
