import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';

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

  openModalComponent(title: string, type: string, data: any): void {
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: ModalContentComponent,
      nzData: { type, data },
      nzOnOk: () => console.log('OK clicked'),
    });

    // Access the component instance
    // const instance = modal.getContentComponent();
    // if (instance) {
    //   instance.subtitle = 'Updated subtitle after 2 seconds';
    // }
  }
}
