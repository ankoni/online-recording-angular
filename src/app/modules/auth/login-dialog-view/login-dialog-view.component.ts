import {Component, HostListener} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-dialog-view',
  templateUrl: './login-dialog-view.component.html',
  styleUrls: ['./login-dialog-view.component.scss']
})
export class LoginDialogViewComponent {
  constructor(private dialogRef: MatDialogRef<LoginDialogViewComponent>) {
  }

  onLogin(entered: boolean): void {
    this.dialogRef.close(entered);
  }

  @HostListener('keyup.esc')
  close(): void {
    this.dialogRef.close();
  }
}
