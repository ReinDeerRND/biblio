import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/app/api/api-user.service';
import { AuthPassService } from 'src/app/shared/services/auth-pass.service';

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
    private pass: AuthPassService,
    private users: ApiUserService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: [null],
      id: [null],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let result = this.form?.value;
    let id = result.id;
    if (result.email && !id) {
      id = this.users.getUser(result.email, 'email');
    }
    if (id) {
      let auth = this.pass.checkUserAuth(id, result.password);
      if (auth) {
        let token = this.users.getAuth(id);
        if (token) {
          localStorage.setItem(id, token);
          this.router.navigate(['/user', id]);
        }
      } else {
         console.error('error while auth');
      }
    } else {
      console.error('no user');
    }
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.registrationSuccess = false;
  }
}
