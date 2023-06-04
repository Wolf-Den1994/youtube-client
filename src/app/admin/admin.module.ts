import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
