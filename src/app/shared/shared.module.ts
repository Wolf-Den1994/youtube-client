import { NgModule } from '@angular/core';
import { DefaultUserComponent } from './constants/icons/default-user/default-user.component';
import { IconCommentComponent } from './constants/icons/icon-comment/icon-comment.component';
import { IconDislikeComponent } from './constants/icons/icon-dislike/icon-dislike.component';
import { IconEyeComponent } from './constants/icons/icon-eye/icon-eye.component';
import { IconLikeComponent } from './constants/icons/icon-like/icon-like.component';
import { IconSettingsComponent } from './constants/icons/icon-settings/icon-settings.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    DefaultUserComponent,
    IconCommentComponent,
    IconDislikeComponent,
    IconEyeComponent,
    IconLikeComponent,
    IconSettingsComponent,
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    DefaultUserComponent,
    IconCommentComponent,
    IconDislikeComponent,
    IconEyeComponent,
    IconLikeComponent,
    IconSettingsComponent,
    MaterialModule,
  ],
})
export class SharedModule { }
