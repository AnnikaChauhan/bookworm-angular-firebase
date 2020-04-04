import { Component, OnInit, Input } from '@angular/core';
import { IBook } from 'src/assets/data/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  altText: string;

  constructor() { }

  ngOnInit() {
    this.altText = this.book.title + "'s front cover"; 
  }

}
