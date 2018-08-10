import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { BookService } from '../services/book.service';
import { Subscription } from 'rxjs/Rx';
import { Book } from '../models/book.model'
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent  {
  public book: Book;
  public selectedBooksCount:number;
  selectedBooks: Book[];
  bookSubscription: Subscription;
 
  constructor(public bookService: BookService) {
    // this.cartCount=0;
    this.bookSubscription = this.bookService.booksAddedInCart.subscribe(
      (book) => { 
        this.book = book;
        this.selectedBooks=bookService.selectedBooks;
        this.selectedBooksCount=this.selectedBooks.length; }
    
    );
   
  }

 

}
