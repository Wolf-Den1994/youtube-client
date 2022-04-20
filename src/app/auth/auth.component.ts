import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { hideHeader } from '../core/reducers/header';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(
    public authService: AuthService,
    private store: Store,
  ) {
    this.form = new FormGroup({
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      ]),
    });
  }

  ngOnInit() {
    this.store.dispatch(hideHeader());
  }

  submit() {
    if (this.form.valid) this.authService.comeIn();
  }
}
