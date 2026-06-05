import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Вы уверены, что хотите выполнить это действие?',
      nzContent: 'Это действие нельзя будет отменить.',
      nzOnOk: () => console.log('Действие подтверждено'),
    });
  }
}
