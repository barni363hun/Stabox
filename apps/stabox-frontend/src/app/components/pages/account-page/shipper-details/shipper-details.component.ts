import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemeService, VehicleService } from '../../../../services';

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
    public themeService: ThemeService
  ) {
    themeService.getTheme();
  }

  ngOnInit(): void {
    this.vehicleService.getVehicles();
  }

  stopBeingShipper() {
    // TODO
    alert('This is not avaible at now');
  }

  close() {
    this.viewDetailsEvent.emit(this.viewDetails);
  }
}
