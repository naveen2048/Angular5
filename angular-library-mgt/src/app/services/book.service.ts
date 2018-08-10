import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs/Rx";
import { Book, BookGenere } from '../models/book.model';
import { Http, Response, Request, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
@Injectable()
export class BookService {
  public booksAddedInCart = new Subject<Book>();
  public selectedBooks = new Array<Book>();
  public books: Book[] = new Array<Book>();
  public book: Book = new Book();
  index: Number;
  bookGenres: BookGenere[];
  bookapi: string = "https://www.googleapis.com/books/v1/volumes?q=";
  http: Http;
  constructor(http: Http) {
    this.http = http;
    this.books = new Array<Book>();
    this.book = new Book();
    this.LoadBookGeneres();
    //this.LoadBooks();
  }
  GetBooks(input: string):Observable<any> {
    
      return this.http.get(this.bookapi + input)
      .map(data => {
        debugger;
        let resJson = data.json();
       // this.books = new Array<Book>();
        for (let index = 0; index < resJson.items.length; index++) {
          let item = resJson.items[index].volumeInfo;
          this.book = new Book();
          this.book.Name = item.title;
          this.book.Thumbnail = item.imageLinks!=null?item.imageLinks.thumbnail:"https://placehold.it/150x80?text=IMAGE";
          this.book.Author = item.authors.join(",");
          this.book.Author = item.id;           
          this.books.push(this.book);
        }
        return this.books;
      });
      
      // .toPromise()
      //   .then(this.ShowBooks);
  }
  ShowBooks(res:Response)
  {
    let resJson = res.json();
    // books = new Array<Book>();
    // for (let index = 0; index < resJosn.items.length; index++) {
    //   let item = resJosn.items[index].volumeInfo;
    //   this.book = new Book();
    //   this.book.Name = item.title;
    //   this.book.Thumbnail = item.imageLinks.thumbnail;
    //   this.book.Author = item.authors.join(",");
    //   this.book.Author = item.id;           
    //   this.books.push(this.book);
    // }
    return resJson;
  }
  LoadBooks(): void {
    this.books = [
      {
        Code: '555',
        Author: 'Dan Brown',
        Name: 'Davinci Code',
        Thumbnail: 'url',
        Genere: 'Fiction'
      }
    ];
  }
  LoadBookGeneres(): BookGenere[] {
    return this.bookGenres = [{
      Name: 'Fiction',
      IsSelected: false
    },
    {
      Name: 'Sci-fi',
      IsSelected: false
    },
    {
      Name: 'Drama',
      IsSelected: false
    },
    {
      Name: 'Thriller',
      IsSelected: false
    },
    {
      Name: 'Software',
      IsSelected: false
    },
    ];
  }
  AddBookstoCart(book: Book): void {
    this.selectedBooks.push(book);
    this.booksAddedInCart.next(book);
  }
  RemoveBooksFromCart(book: Book): Book[] {
    let fIndex = this.selectedBooks.indexOf(book);
    this.selectedBooks.splice(fIndex, 1);
    this.booksAddedInCart.next(this.selectedBooks[fIndex]);
    return this.selectedBooks;
  }
  FilterBooksByGenere(generes: any[]): Book[] {
    return this.books.filter(function (book) {
      for (let index = 0; index < generes.length; index++) {
        if (generes[index].Name == book.Genere) {
          return book;
        }

      }

    });
  }
}
