import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/model/book.mode';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input()
  books: Book[] = [];

  @Output()
  deleteBook = new EventEmitter<number>();

  @Output()
  toggleBook = new EventEmitter<number>();


  delete(id:number){
    this.deleteBook.emit(id);
  }

  toggle(id:number){

    this.toggleBook.emit(id);
  }

}