import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('../youtube/youtube.module').then((m) => m.YoutubeModule), pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('../youtube/youtube.module').then((m) => m.YoutubeModule),
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
