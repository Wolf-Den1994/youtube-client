import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilteringComponent } from './components/filtering/filtering.component';
import { ButtonSortComponent } from './components/filtering/components/button-sort/button-sort.component';
import { InputComponent } from './components/filtering/components/input/input.component';
import { ResultBlockComponent } from './components/result-block/result-block.component';
import { ResultItemComponent } from './components/result-block/components/result-item/result-item.component';
import { VideoThumbnailComponent } from './components/result-block/components/result-item/components/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './components/result-block/components/result-item/components/views-count/views-count.component';
import { CommentsCountComponent } from './components/result-block/components/result-item/components/comments-count/comments-count.component';
import { LikesCountComponent } from './components/result-block/components/result-item/components/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/result-block/components/result-item/components/dislikes-count/dislikes-count.component';
import { VideoTitleComponent } from './components/result-block/components/result-item/components/video-title/video-title.component';
import { MoreButtonComponent } from './components/result-block/components/result-item/components/more-button/more-button.component';
import { ColorLineDirective } from './directives/color-line.directive';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    FilteringComponent,
    ButtonSortComponent,
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
    ColorLineDirective,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
  exports: [
    ResultBlockComponent,
    ResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    CommentsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    ColorLineDirective,
    DetailComponent,
  ],
})
export class YoutubeModule { }
