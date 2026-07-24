import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/model/book.mode';


@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input()
  book!: Book;

  @Output()
  deleteBook = new EventEmitter<number>();

  @Output()
  toggleBook = new EventEmitter<number>();

  delete(): void {
    this.deleteBook.emit(this.book.id);
  }
  toggleStatus(): void {

    this.toggleBook.emit(this.book.id);
  }
}