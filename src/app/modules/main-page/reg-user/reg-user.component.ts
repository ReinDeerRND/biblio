import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/app/api/api-user.service';
import {
  RagistrationUserData,
  RegistrationFormData,
} from 'src/app/models/auth.model';
import { ModalNotificationType } from 'src/app/models/modal-view.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['../styles/auth.component.scss', './reg-user.component.scss'],
})
export class RegUserComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modal: ModalService,
    private router: Router,
    private api: ApiUserService,
  ) {
    this.registerForm = this.formBuilder.group(
      {
        family_name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
          ],
        ],
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
          ],
        ],
        middle_name: ['', [Validators.maxLength(50)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            ),
          ],
        ],
        birth_date: ['', [Validators.required]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9+\-()\s]+$/),
            Validators.minLength(10),
            Validators.maxLength(16),
          ],
        ],
        address: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        agreeTerms: [false, [Validators.requiredTrue]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
      // Останавливаем отправку, если форма не валидна
    if (this.registerForm.invalid) {
      this.modal.showNotification(
        ModalNotificationType.Warning,
        'Внимание',
        'Не все поля формы заполнены',
      );
      return;
    }

    // Здесь можно отправить данные на сервер
    const formData: RegistrationFormData = this.registerForm.value;

    console.log('Регистрация пользователя:', formData);

    // Имитация сохранения в localStorage
    const newUser: RagistrationUserData = {
      family_name: formData.family_name,
      name: formData.name,
      middle_name: formData.middle_name || undefined,
      reg_date: new Date(),
      email: formData.email,
      birth_date: formData.birth_date,
      phone: formData.phone,
      address: formData.address,
      password: formData.password,
    };
   
    let userId = this.api.registerUser(newUser);
    this.modal.showNotification(ModalNotificationType.Success, 'Регистрация', 'Вы успешно зарегистрированы с номером !'+ userId );
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  onReset() {
    this.registerForm.reset();
  }
}
