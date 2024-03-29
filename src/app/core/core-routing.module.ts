import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
