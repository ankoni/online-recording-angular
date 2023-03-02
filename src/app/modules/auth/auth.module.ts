import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { CommonImportsModule } from '../common-imports/common-imports.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {LoginDialogViewComponent} from "./login-dialog-view/login-dialog-view.component";

const routes: Routes = [
  {
    title: 'Авторизация',
    path: '',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginDialogViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonImportsModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LoginDialogViewComponent
  ]
})
export class AuthModule { }
