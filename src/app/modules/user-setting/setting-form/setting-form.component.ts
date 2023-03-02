import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss']
})
export class SettingFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
  });

  constructor() {}

  ngOnInit(): void {

  }
}
