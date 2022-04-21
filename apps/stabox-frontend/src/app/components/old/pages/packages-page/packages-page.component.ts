import { Component, OnInit } from '@angular/core';
import {
  ExchangeDateService,
  PackageService,
  ThemeService,
  UserService,
  VehicleService,
} from '../../../../services';

@Component({
  selector: 'stabox-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.scss'],
})
export class PackagesPageComponent implements OnInit {
  showMyPackages = true;
  showAcceptedPackages = false;
  showToDeliver = false;

  addPackageMode = false;
  addRecieverMode = false;

  constructor(
    public themeService: ThemeService,
    public userService: UserService,
    public packageService: PackageService,
    public vehicleService: VehicleService,
    public exchangeDateService: ExchangeDateService
  ) {}

  ngOnInit(): void {
    this.filterMyPackages()
  }

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
