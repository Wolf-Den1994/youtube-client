import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchFieldComponent } from './header/search-field/search-field.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LoginComponent } from './header/login/login.component';
import { FilteringComponent } from './filtering/filtering.component';
import { ButtonsComponent } from './filtering/buttons/buttons.component';
import { InputComponent } from './filtering/input/input.component';
import { ResultBlockComponent } from './result-block/result-block.component';
import { ResultItemComponent } from './result-block/result-item/result-item.component';
import { VideoThumbnailComponent } from './result-block/result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './result-block/result-item/views-count/views-count.component';
import { LikesCountComponent } from './result-block/result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './result-block/result-item/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './result-block/result-item/comments-count/comments-count.component';
import { VideoTitleComponent } from './result-block/result-item/video-title/video-title.component';
import { MoreButtonComponent } from './result-block/result-item/more-button/more-button.component';
import { DefaultUserComponent } from './constants/icons/default-user/default-user.component';
import { IconSettingsComponent } from './constants/icons/icon-settings/icon-settings.component';
import { IconEyeComponent } from './constants/icons/icon-eye/icon-eye.component';
import { IconLikeComponent } from './constants/icons/icon-like/icon-like.component';
import { IconDislikeComponent } from './constants/icons/icon-dislike/icon-dislike.component';
import { IconCommentComponent } from './constants/icons/icon-comment/icon-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchFieldComponent,
    SettingsComponent,
    LoginComponent,
    FilteringComponent,
    ButtonsComponent,
    InputComponent,
    ResultBlockComponent,
    ResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    DefaultUserComponent,
    IconSettingsComponent,
    IconEyeComponent,
    IconLikeComponent,
    IconDislikeComponent,
    IconCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
