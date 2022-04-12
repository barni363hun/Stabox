import { Component, OnInit } from '@angular/core';
import {
  ExchangeDateService,
  PackageService,
  VehicleService,
} from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.scss'],
})
export class PackageInputComponent implements OnInit {
  showMyPackages = true;
  showAcceptedPackages = false;
  showToDeliver = false;

  addPackageMode = false;
  addRecieverMode = false;

  constructor(
    public packageService: PackageService,
    public vehicleService: VehicleService,
    public exchangeDateService: ExchangeDateService
  ) {}

  ngOnInit(): void {}

  filterMyPackages() {
    this.showMyPackages = true;
    this.showAcceptedPackages = false;
    this.showToDeliver = false;

    this.packageService.update('/package/myPackages');
  }

  filterAcceptedPackages() {
    this.showMyPackages = false;
    this.showAcceptedPackages = true;
    this.showToDeliver = false;

    this.packageService.update('/package/accepted');
  }

  filterToDeliver() {
    this.showMyPackages = false;
    this.showAcceptedPackages = false;
    this.showToDeliver = true;

    this.vehicleService.getVehicles();
    this.exchangeDateService.getExchangeDates();
    this.packageService.update('/package/acceptable');
  }
}
