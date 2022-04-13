import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
// import { FilteringComponent } from './filtering/filtering.component';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilteringComponent } from './filtering/filtering.component';
import { ButtonsComponent } from './filtering/buttons/buttons.component';
import { InputComponent } from './filtering/input/input.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    FilteringComponent,
    ButtonsComponent,
    InputComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // MatIconModule,
    // MatButtonModule,
    // MatInputModule,
    // HttpClientModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
  // bootstrap: [
  //   YoutubeComponent,
  // ],
})
export class YoutubeModule { }
