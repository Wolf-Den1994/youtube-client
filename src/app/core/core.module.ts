import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/components/login/login.component';
import { LogoComponent } from './header/components/logo/logo.component';
import { SearchFieldComponent } from './header/components/search-field/search-field.component';
import { SettingsComponent } from './header/components/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoutComponent } from './header/components/logout/logout.component';
import { AdminButtonComponent } from './header/components/admin-button/admin-button.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchFieldComponent,
    SettingsComponent,
    LoginComponent,
    PageNotFoundComponent,
    LogoutComponent,
    AdminButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [CoreComponent],
})
export class CoreModule { }
