import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './modules/users/user-page/user-page.component';
import { BookListComponent } from './modules/books/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
