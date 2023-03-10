import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TUser } from 'src/app/models/auth/user';
import { AuthService } from 'src/app/service/auth/auth.service';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogViewComponent} from "../../auth/login-dialog-view/login-dialog-view.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$?: Observable<TUser | null>;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$.asObservable();
    this.authService.getStatus();
  }

  onLogoutBtnClick(): void {
    this.authService.logout();
  }

  onLoginBtnClick(): void {
    this.dialog.open(LoginDialogViewComponent)
      .afterClosed()
      .subscribe(it => {
        console.log(it)
      })
  }
}
