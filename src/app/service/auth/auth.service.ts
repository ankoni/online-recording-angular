import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Permission } from 'src/app/models/auth/permission';
import {AuthDto, TUser, UserResponse} from 'src/app/models/auth/user';
import {HttpClient} from "@angular/common/http";

type TokenResponse = {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: TUser | null = null;
  user$ = new BehaviorSubject<TUser | null>(null);

  constructor(private router: Router, private http: HttpClient) {

  }

  getStatus(): void {
    if (localStorage.getItem('user_id')) {
      this.http.get<UserResponse>(`api/users/${localStorage.getItem('user_id')}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }).subscribe(it => {
        this.user = {
          name: it.username,
          permissions: []
        }
        this.user$.next(this.user);
      })
    }
  }

  /**
   * Авторизация
   * @param authData логин\пароль с формы
   * @returns вход успешен\неуспешен
   */
  login(authData: AuthDto): void {
    this.http.post<TokenResponse>('api/auth/login', authData).subscribe(it => {
      localStorage.setItem('user_id', it.userId);
      localStorage.setItem('access_token', it.accessToken);
      localStorage.setItem('refresh_token', it.refreshToken);

      this.user = {
        name: authData.username,
        permissions: [Permission.CREATE_ORG, Permission.CREATE_TIMETABLE, Permission.RECORDING_TO]
      }

      this.user$.next(this.user);
    })
  }

  /**
   * Выход из системы
   */
  logout(): void {
    localStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.user = null;
    this.user$.next(this.user);
    this.router.navigate(['/auth']);
  }
}
