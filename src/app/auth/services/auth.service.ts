import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  public authState$: Observable<boolean>;

  private authState$$ = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
  ) {
    this.authState$ = this.authState$$.asObservable();
  }

  login = '';

  password = '';

  loginHandle(value: string) {
    this.login = value;
  }

  logoutHandle() {
    const tokenId = window.localStorage.getItem('youtube-login');
    if (tokenId) {
      window.localStorage.removeItem('youtube-login');
      this.authState$$.next(false);
      this.router.navigate(['/auth']);
    }
  }

  passwordHandle(value: string) {
    this.password = value;
  }

  comeIn() {
    if (this.login && this.password) {
      window.localStorage.setItem('youtube-login', 'tokenId');
      this.router.navigate(['']);
      this.authState$$.next(true);
    }
  }

  isLogged() {
    if (window.localStorage.getItem('youtube-login')) {
      this.authState$$.next(true);
      return true;
    }
    return false;
  }
}
