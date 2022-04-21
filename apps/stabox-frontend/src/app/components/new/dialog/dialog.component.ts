import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleService } from '../../../services';

@Component({
  selector: 'stabox-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles();
  }
}
