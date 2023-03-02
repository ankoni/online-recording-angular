import { NgModule } from '@angular/core';
import { SettingFormComponent } from './setting-form/setting-form.component';
import { CommonImportsModule } from '../common-imports/common-imports.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    SettingFormComponent
  ],
  imports: [
    CommonImportsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserSettingModule { }
