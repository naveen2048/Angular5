import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book, BookGenere } from '../models/book.model';
import { BookService } from "../services/book.service";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  book: Book;
  index: Number;
  bookGenres: BookGenere[];
  filters = new Array<string>();
  isSelected: boolean = false;
  constructor(public bookService: BookService) {
    this.books = this.bookService.books;
    this.bookGenres = this.bookService.LoadBookGeneres();
    console.log(this.bookGenres);
    this.bookService.GetBooks("C sharp").subscribe(res=>{
      debugger;
      console.log(res);  
      this.books=res;
    });

  }

  ngOnInit() {

  }
  AddToCart(book: Book): void {
    this.bookService.AddBookstoCart(book);
  }
  FilterBooksByGenere(genere: any) {
    debugger;
    if (genere.IsSelected) {
      this.filters.push(genere);
    }
    else
      this.filters.splice(this.filters.indexOf(genere), 1);

    if (this.filters.length > 0)
      this.books = this.bookService.FilterBooksByGenere(this.filters);
    else
      this.books = this.bookService.books;

  }
}
