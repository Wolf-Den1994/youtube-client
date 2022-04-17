import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { YoutubeService } from '../youtube/services/youtube.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(
    public authService: AuthService,
    private youtubeService: YoutubeService,
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
    this.youtubeService.isShowHeader = false;
  }

  submit() {
    if (this.form.valid) this.authService.comeIn();
  }
}
