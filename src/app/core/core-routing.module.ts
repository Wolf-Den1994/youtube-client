import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ResultBlockComponent } from './youtube/result-block/result-block.component';
// import { YoutubeModule } from '../youtube/youtube.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('../youtube/youtube.module').then((m) => m.YoutubeModule), pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('../youtube/youtube.module').then((m) => m.YoutubeModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
