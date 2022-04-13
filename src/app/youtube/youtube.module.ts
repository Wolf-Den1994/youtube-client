import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
// import { FilteringComponent } from './filtering/filtering.component';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilteringComponent } from './filtering/filtering.component';
import { ButtonsComponent } from './filtering/buttons/buttons.component';
import { InputComponent } from './filtering/input/input.component';
// import { HeaderComponent } from '../core/header/header.component';
// import { CoreModule } from '../core/core.module';
import { ResultBlockComponent } from './result-block/result-block.component';
import { ResultItemComponent } from './result-block/result-item/result-item.component';
import { VideoThumbnailComponent } from './result-block/result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './result-block/result-item/views-count/views-count.component';
import { CommentsCountComponent } from './result-block/result-item/comments-count/comments-count.component';
import { LikesCountComponent } from './result-block/result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './result-block/result-item/dislikes-count/dislikes-count.component';
import { VideoTitleComponent } from './result-block/result-item/video-title/video-title.component';
import { MoreButtonComponent } from './result-block/result-item/more-button/more-button.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    FilteringComponent,
    ButtonsComponent,
    InputComponent,
    ResultBlockComponent,
    ResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    CommentsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    // MatIconModule,
    // MatButtonModule,
    // MatInputModule,
    // HttpClientModule,
    // HeaderComponent,
    SharedModule,
    YoutubeRoutingModule,
    // CoreModule,
  ],
  exports: [
    // HeaderComponent,
    ResultBlockComponent,
    ResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    CommentsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
  ],
  // bootstrap: [
  //   YoutubeComponent,
  // ],
})
export class YoutubeModule { }
