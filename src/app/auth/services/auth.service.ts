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

  loginHandle = (value: string) => {
    this.login = value;
  };

  passwordHandle = (value: string) => {
    this.password = value;
  };

  comeIn = () => {
    if (this.login && this.password) {
      window.localStorage.setItem('youtube-login', 'tokenId');
      this.router.navigate(['']);
    }
  };

  isLogged = () => !!window.localStorage.getItem('youtube-login');
}
