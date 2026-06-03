import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { RegUserComponent } from './modules/main-page/reg-user/reg-user.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/main', 
    pathMatch: 'full' 
  },
  { 
    path: 'main', 
    component: MainPageComponent 
  },
    { 
    path: 'register', 
    component: RegUserComponent 
  },
  { 
    path: 'user', 
    loadChildren: () => import('./modules/users/user.module').then(m => m.UserModule)
  },
  { 
    path: 'books', 
    loadChildren: () => import('./modules/books/book.module').then(m => m.BookModule)
  },
  { 
    path: '**', 
    redirectTo: '/main' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
