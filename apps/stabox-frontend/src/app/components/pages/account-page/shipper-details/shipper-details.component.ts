import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VehicleService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html',
  styleUrls: ['./shipper-details.component.scss'],
})
export class ShipperDetailsComponent implements OnInit {
  @Output() viewDetailsEvent = new EventEmitter<Boolean>();
  viewDetails: boolean = false;

  @Input() lightMode = false;

  constructor(public vehicleService: VehicleService) {}

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
