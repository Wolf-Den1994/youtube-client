import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private router: Router,
  ) {}

  login = '';

  password = '';

  loginHandle(value: string) {
    this.login = value;
  }

  logoutHandle() {
    const tokenId = window.localStorage.getItem('youtube-login');
    if (tokenId) {
      window.localStorage.removeItem('youtube-login');
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
    }
  }

  isLogged() {
    return !!window.localStorage.getItem('youtube-login');
  }
}
