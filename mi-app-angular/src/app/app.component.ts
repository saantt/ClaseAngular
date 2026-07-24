import { Component } from '@angular/core';
import { Book } from './model/book.mode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books:Book[]=[];

  addBook(book:Book){
    this.books.push(book);
  }
  deleteBook(id:number){
    this.books=this.books.filter(book=>book.id!==id);
  }
  toggleBook(id:number){
    const book=this.books.find(book=>book.id===id);
    if(book){
      book.available=!book.available;
    }
  }
}