import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Permission } from 'src/app/models/auth/permission';
import { TUser } from 'src/app/models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: TUser | null = null;
  user$ = new BehaviorSubject<TUser | null>(null);

  constructor(private router: Router) {

  }

  /**
   * Авториция
   * @param userName имя пользователя
   * @returns вход успешен\неуспешен
   */
  login(userName: string): Observable<boolean> {
    this.user = {
      name: userName,
      permissions: [Permission.CREATE_ORG, Permission.CREATE_TIMETABLE, Permission.RECORDING_TO]
    }

    this.user$.next(this.user);
    return of(true);
  }

  /**
   * Выход из системы
   */
  logout(): Observable<void> {
    this.user = null;
    this.user$.next(this.user);
    this.router.navigate(['/auth']);
    return of();
  }
}
