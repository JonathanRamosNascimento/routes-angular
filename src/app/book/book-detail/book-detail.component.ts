import { BookService } from './../../services/book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    console.log('Index: ', this.route.snapshot.paramMap.get('index'));
    this.route.paramMap
    .subscribe((params: ParamMap) => console.log("Index: ", params.get('index')));
  }

}
