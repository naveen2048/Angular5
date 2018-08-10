import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {Book} from  './models/book.model';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { MenubarComponent } from './menubar/menubar.component';
import {BookService} from './services/book.service';
 import { RouterModule,Routes } from "@angular/router";
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import {HttpModule} from '@angular/http';
 const approutes:Routes=[
   {path:'cart',component:CartComponent},
   {path:'checkout',component:CheckoutComponent},
   {path:'login',component:LoginComponent},
   {path:'books',component:BookComponent},
   {path:'',redirectTo:'/books',pathMatch:'full'}
 ];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,        
    MenubarComponent, CartComponent, CheckoutComponent, LoginComponent, AccountComponent
    ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
