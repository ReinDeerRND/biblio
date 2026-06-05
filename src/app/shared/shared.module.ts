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
];

const components = [BooksComponent];

@NgModule({
  imports: [...modules],
  exports: [...modules, ...components],
  declarations: [...components],
})
export class SharedModule {}
