import { Component, OnInit } from '@angular/core';
import { IBook, books } from "src/assets/data/books";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  books: IBook [] = books;

  constructor() { }

  ngOnInit(): void {
  }

}
