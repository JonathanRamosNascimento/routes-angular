import { Book } from './../models/book';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books$: Observable<Book[]>;

  ngOnInit() {
    this.books$ = this.bookService.books$;
  }

}
