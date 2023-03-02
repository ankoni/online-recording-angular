import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @Output() onLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup = new FormGroup({
    login: new FormControl(null, Validators.required),
    password: new FormControl(),
  });

  passwordFieldProps = {
    passwordVisible: false,
    passwordVisibleIcon: 'visibility',
    passwordVisibleIconTooltip: 'Показать',
    passwordFieldType: 'password'
  };

  constructor(private authService: AuthService, private router: Router) {}

  onChangePasswordVisibility(): void {
    this.passwordFieldProps.passwordVisible =
      !this.passwordFieldProps.passwordVisible;
    const visible: boolean = this.passwordFieldProps.passwordVisible;

    this.passwordFieldProps = {
      ...this.passwordFieldProps,
      passwordVisibleIcon: visible ? 'visibility_off' : 'visibility',
      passwordVisibleIconTooltip: visible ? 'Скрыть' : 'Показать',
      passwordFieldType: visible ? 'text' : 'password',
    };
  }

  handleLoginBtn(): void {
    const formData = this.form.getRawValue();
    this.authService.login(formData.login).subscribe((result) => {
      if (result) {
        this.onLogin.next(true);
        this.router.navigate(['/']);
      }
    });
  }
}
