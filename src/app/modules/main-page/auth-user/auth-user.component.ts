import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/app/api/api-user.service';
import { ModalNotificationType } from 'src/app/models/modal-view.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['../styles/auth.component.scss', './auth-user.component.scss'],
})
export class AuthUserComponent {
  form: FormGroup;
  submitted = false;
  registrationSuccess = false;

  constructor(
    private formBuilder: FormBuilder,
    private users: ApiUserService,
    private router: Router,
    private modal: ModalService,
  ) {
    this.form = this.formBuilder.group(
      {
        email: [null],
        id: [null],
        password: [null, [Validators.required]],
      },
      {
        validators: this.atLeastOneValidator(),
      },
    );
  }

  atLeastOneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const group = control as FormGroup;
      if (!group) return null;

      const email = group.get('email')?.value || '';
      const id = group.get('id')?.value || '';

      return email.trim() || id.trim() ? null : { atLeastOne: true };
    };
  }

  onSubmit() {
    if (this.form.invalid) {
      this.modal.showNotification(
        ModalNotificationType.Warning,
        'Внимание',
        'Не все поля формы заполнены',
      );
      return;
    }
    let result = this.form?.value;
    let id = result.id;
    if (result.email && !id) {
      id = this.users.getUser(result.email, 'email')?.id;
    }
    if (id) {
      let auth = this.users.checkUserAuth(id, result.password);
      if (auth) {
        let token = this.users.getAuth(id);
        if (token) {
          localStorage.setItem(id, token);
          this.router.navigate(['/user', id]);
        }
      } else {
        this.authErrorMessage();
      }
    } else {
      this.authErrorMessage();
    }
  }

  authErrorMessage(){
      this.modal.showNotification(
        ModalNotificationType.Error,
        'Ошибка авторизации',
        'Неверно указаны авторизационные данные',
      );
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.registrationSuccess = false;
  }

  register(){

  }
}
