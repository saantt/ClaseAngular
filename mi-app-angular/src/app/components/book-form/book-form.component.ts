import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book.mode';


@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output()

  bookCreated = new EventEmitter<Book>();

  bookForm!: FormGroup;

  private counterId = 1;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  saveData(): void {

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const book: Book = {
      id: this.counterId++,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      category: this.bookForm.value.category,
      available: true

    };
    this.bookCreated.emit(book);
    this.bookForm.reset();
  }

  get f() {
    return this.bookForm.controls;
  }

}