import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { RegUserComponent } from './modules/main-page/reg-user/reg-user.component';
import { AuthUserComponent } from './modules/main-page/auth-user/auth-user.component';

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
    path: 'login', 
    component: AuthUserComponent 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./modules/admin-block/admin.module').then(m => m.AdminModule)
  },
  { 
    path: 'user', 
    loadChildren: () => import('./modules/users/user.module').then(m => m.UserModule)
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
