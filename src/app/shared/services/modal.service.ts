import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ModalNotificationType } from 'src/app/models/modal-view.model';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private modal: NzModalService,
    private notification: NzNotificationService,
  ) {}

  showNotification(
    type: ModalNotificationType,
    title: string,
    content: string,
  ): void {
    this.notification[type](
      title,
      content,
      { nzDuration: 4000 }, // Автоматическое закрытие через 3 секунды
    );
  }

  openModalComponent(title: string, type: string, data: any): void {
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: ModalContentComponent,
      nzData: { type, data },
      nzOnOk: () => console.log('OK clicked'),
    });
  }
}
