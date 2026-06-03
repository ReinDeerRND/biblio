import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/main', 
    pathMatch: 'full' 
  },
  { 
    path: 'main', 
    component: AppComponent 
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
