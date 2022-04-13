import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchFieldComponent } from './header/search-field/search-field.component';
import { SettingsComponent } from './header/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchFieldComponent,
    SettingsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [CoreComponent],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
