import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'settings',
        component: AdminSettingsComponent,
      },
      {
        path: 'users',
        component: UsersManagementComponent,
      },
      {
        path: 'books',
        component: BooksManagementComponent,
      },
      { path: '', redirectTo: 'books', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AdminPageComponent,
    UsersManagementComponent,
    BooksManagementComponent,
    AdminSettingsComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
