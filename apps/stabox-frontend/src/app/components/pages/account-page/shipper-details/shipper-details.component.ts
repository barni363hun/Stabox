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
    private snackbarService: SnackbarService
  ) {
    themeService.getTheme();
  }

  ngOnInit(): void {
    this.vehicleService.getVehicles();
  }

  stopBeingShipper() {
    // TODO
    this.snackbarService.showErrorSnackbar('Currently not available.');
  }

  close() {
    this.viewDetailsEvent.emit(this.viewDetails);
  }
}
