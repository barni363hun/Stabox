import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SnackbarService, ThemeService, VehicleService } from '../../../../services';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.scss'],
})
export class ShipperDetailsComponent implements OnInit {
  @Output() viewDetailsEvent = new EventEmitter<Boolean>();
  viewDetails: boolean = false;

  constructor(
    public vehicleService: VehicleService,
    public themeService: ThemeService,
    private snackBarService:SnackbarService
  ) {
    themeService.getTheme();
  }

  ngOnInit(): void {
    this.vehicleService.getVehicles();
  }

  stopBeingShipper() {
    this.snackBarService.showErrorSnackbar('Not available now')
  }

  close() {
    this.viewDetailsEvent.emit(this.viewDetails);
  }
}
