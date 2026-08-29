import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserActiveBooksComponent } from './user-active-books/user-active-books.component';
import { UserShelfComponent } from './user-shelf/user-shelf.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   component: UserPageComponent 
  // },
  { 
    path: ':id', 
    component: UserPageComponent,
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), ],
  exports: [RouterModule],
  declarations: [
    UserActiveBooksComponent,
    UserPageComponent,
    UserShelfComponent,
  ]
})
export class UserModule { }