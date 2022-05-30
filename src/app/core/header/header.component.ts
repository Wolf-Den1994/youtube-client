import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { isShowHeaderSelector } from '../../redux/selectors/header';
import { hideHeader, showHeader } from '../../redux/actions/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private subscription: Subscription;

  isShowHeader$ = this.store.select(isShowHeaderSelector);

  constructor(
    private authService: AuthService,
    private store: Store,
  ) {
    this.subscription = this.authService.authState$.subscribe((value) => {
      if (value) this.store.dispatch(showHeader());
      else this.store.dispatch(hideHeader());
    });
  }
}
