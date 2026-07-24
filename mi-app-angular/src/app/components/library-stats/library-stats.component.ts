import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book.mode';


@Component({
  selector: 'library-stats',
  templateUrl: './library-stats.component.html',
  styleUrls: ['./library-stats.component.css']
})
export class LibraryStatsComponent {

  @Input()
  books: Book[] = [];
  get totalBooks() {
    return this.books.length;
  }
  get availableBooks() {
    return this.books.filter(book => book.available).length;
  }
  get borrowedBooks() {
    return this.books.filter(book => !book.available).length;
  }

}