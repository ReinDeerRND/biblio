import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './modules/users/user-page/user-page.component';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { AuthUserComponent } from './modules/main-page/auth-user/auth-user.component';
import { AuthAdminComponent } from './modules/main-page/auth-admin/auth-admin.component';
import { RegUserComponent } from './modules/main-page/reg-user/reg-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import ru from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    MainPageComponent,
    AuthUserComponent,
    AuthAdminComponent,
    RegUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, SharedModule, BrowserAnimationsModule ],
    providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },  // Angular локаль
    { provide: NZ_I18N, useValue: ru_RU }       // NG-ZORRO локализация
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
