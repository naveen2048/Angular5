import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service";
import { Book } from "../models/book.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
selectedBooks:Book[];
  constructor(public bookService:BookService) {
this.selectedBooks=bookService.selectedBooks;
   }
public RemoveFromCart(book:Book):void
{
this.bookService.RemoveBooksFromCart(book);

}
  ngOnInit() {
  }

}
