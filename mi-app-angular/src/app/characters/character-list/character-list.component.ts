import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/characters.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  loading = false;
  error = false;
  searchTerm = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(): void {
    this.loading = true;
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
        this.loading = false;
        this.error = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  searchByName(): void {
    const term = this.searchTerm.trim();

    if (!term) {
      this.loadCharacters();
      return;
    }

    this.loading = true;
    this.characterService.searchByName(1, term).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.loading = false;
        this.error = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

}
