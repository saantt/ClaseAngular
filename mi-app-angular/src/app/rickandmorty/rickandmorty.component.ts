import { Component, OnInit } from '@angular/core';
import { RickandmortyService, Character } from '../services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {
  character: Character | null = null;
  loading: boolean = false;
  error: string | null = null;
  searchQuery: string = '';

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.loadRandomCharacter();
  }

  /**
   * Cargar un personaje aleatorio
   */
  loadRandomCharacter(): void {
    this.loading = true;
    this.error = null;
    this.rickandmortyService.getRandomCharacter().subscribe(
      (data: Character) => {
        this.character = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error al cargar el personaje. Intenta de nuevo.';
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }

  /**
   * Buscar personaje por nombre
   */
  searchCharacter(): void {
    if (!this.searchQuery.trim()) {
      this.error = 'Por favor, ingresa un nombre.';
      return;
    }

    this.loading = true;
    this.error = null;
    this.rickandmortyService.searchCharacterByName(this.searchQuery).subscribe(
      (data) => {
        if (data.results.length > 0) {
          this.character = data.results[0];
          this.loading = false;
        } else {
          this.error = 'No se encontró el personaje.';
          this.character = null;
          this.loading = false;
        }
      },
      (error) => {
        this.error = 'Error en la búsqueda. Intenta de nuevo.';
        this.character = null;
        this.loading = false;
        console.error('Error:', error);
      }
    );
  }

  /**
   * Cargar personaje por ID
   */
  loadCharacterById(id: number): void {
    this.loading = true;
    this.error = null;
    this.rickandmortyService.getCharacterById(id).subscribe(
      (data: Character) => {
        this.character = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error al cargar el personaje.';
        this.loading = false;
      }
    );
  }
}
