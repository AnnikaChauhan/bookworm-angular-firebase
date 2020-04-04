import { Component, OnInit, Input } from '@angular/core';
import { books, IBook } from "src/assets/data/books";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() books: IBook;
  numberOfBooks: string;

  constructor() { }

  ngOnInit() {
    // this.numberOfBooks = `There are ${this.books.length} books in this library`;
    console.log(this.books);
  }

}