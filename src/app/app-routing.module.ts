import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultBlockComponent } from './youtube/result-block/result-block.component';

const routes: Routes = [
  { path: '', component: ResultBlockComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
