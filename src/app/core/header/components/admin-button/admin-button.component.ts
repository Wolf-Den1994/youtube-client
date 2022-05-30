import { Component } from '@angular/core';
import { AdminService } from '../../../../admin/services/admin.service';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.scss'],
})
export class AdminButtonComponent {
  constructor(
    public adminService: AdminService,
  ) {}
}
