import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { hideHeader } from '../redux/actions/actions';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private adminService: AdminService,
    private store: Store,
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', Validators.maxLength(255)),
      img: new FormControl('', [
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
      ]),
      video: new FormControl('', [
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  directDate = false;

  changeDirect() {
    this.directDate = true;
  }

  submit() {
    if (this.form.valid) {
      this.adminService.create(this.form.value);
      this.directDate = false;
    }
  }

  ngOnInit() {
    this.store.dispatch(hideHeader());
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
