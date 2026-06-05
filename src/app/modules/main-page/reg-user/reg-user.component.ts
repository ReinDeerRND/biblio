import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationFormData } from 'src/app/models/auth.model';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['../styles/auth.component.scss', './reg-user.component.scss'],
})
export class RegUserComponent {
  registerForm: FormGroup;
  submitted = false;
  registrationSuccess = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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
        //validators: this.passwordMatchValidator
      },
    );
  }

  // Валидатор для проверки совпадения паролей
  // passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');

  //   if (password && confirmPassword && password.value !== confirmPassword.value) {
  //     return { passwordMismatch: true };
  //   }
  //   return null;
  // }

  onSubmit() {
    this.submitted = true;

    // Останавливаем отправку, если форма не валидна
    if (this.registerForm.invalid) {
      return;
    }

    // Здесь можно отправить данные на сервер
    const formData: RegistrationFormData = this.registerForm.value;

    console.log('Регистрация пользователя:', formData);

    // Имитация сохранения в localStorage
    const newUser = {
      id: Date.now().toString(),
      family_name: formData.family_name,
      name: formData.name,
      middle_name: formData.middle_name || undefined,
      reg_date: new Date(),
      email: formData.email,
    };

    // Получаем существующих пользователей
    // let users = JSON.parse(localStorage.getItem('users') || '[]');
    // users.push(newUser);
    // localStorage.setItem('users', JSON.stringify(users));

    // // Показываем сообщение об успехе
    // this.registrationSuccess = true;

    // // Через 2 секунды перенаправляем на страницу входа
    // setTimeout(() => {
    //   this.router.navigate(['/login']);
    // }, 2000);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registrationSuccess = false;
  }
}
