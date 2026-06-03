import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserPageComponent 
  },
//   { 
//     path: ':id', 
//     component: UserDetailComponent 
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModule { }