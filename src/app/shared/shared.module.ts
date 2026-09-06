import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { BooksComponent } from './components/books/books.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

const antDesignIcons = AllIcons as {
  [key: string]: any;
};
const icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  NzButtonModule,
  NzInputModule,
  NzModalModule,
  NzFormModule,
  NzSelectModule,
  NzDatePickerModule,
  NzCheckboxModule,
  NzToolTipModule,
  NzNotificationModule,
];

const components = [BooksComponent];

@NgModule({
  imports: [...modules, NzIconModule.forRoot(icons),],
  exports: [...modules, ...components, NzIconModule],
  declarations: [...components],
})
export class SharedModule {}
