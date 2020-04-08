import { Component, OnInit, Input } from '@angular/core';
import { books, IBook } from "src/assets/data/books";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() books: IBook;
  numberOfBooks: number;

  constructor() { }

  ngOnInit() {
    //this.numberOfBooks = this.books;
    console.log(this.books);
  }

}