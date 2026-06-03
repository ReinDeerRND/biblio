import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './modules/users/user-page/user-page.component';
import { BookListComponent } from './modules/books/book-list/book-list.component';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { AuthUserComponent } from './modules/main-page/auth-user/auth-user.component';
import { AuthAdminComponent } from './modules/main-page/auth-admin/auth-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    BookListComponent,
    MainPageComponent,
    AuthUserComponent,
    AuthAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
