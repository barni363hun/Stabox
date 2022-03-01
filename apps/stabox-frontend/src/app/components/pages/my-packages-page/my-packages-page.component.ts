import { Component, OnInit } from '@angular/core';
import { ExchangeDateService, VehicleService } from '../../../services';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'stabox-my-packages-page',
  templateUrl: './my-packages-page.component.html',
  styleUrls: ['./my-packages-page.component.scss'],
})
export class MyPackagesPageComponent implements OnInit {
  _filterMyPackages = true;
  _filterAllPackages = false;
  _filterToDeliver = false;

  addPackageMode = false;
  addRecieverMode = false;

  constructor(
    public packageService: PackageService,
    private vehicleService: VehicleService,
    private exchangeDateService: ExchangeDateService
  ) {}

  ngOnInit(): void {}

  filterAcceptedPackages() {
    this._filterAllPackages = true;
    this._filterMyPackages = false;
    this._filterToDeliver = false;
    this.packageService.update('/package/accepted');
  }

  filterMyPackages() {
    this._filterAllPackages = false;
    this._filterMyPackages = true;
    this._filterToDeliver = false;
    this.packageService.update('/package/myPackages');
  }

  filterToDeliver() {
    this._filterAllPackages = false;
    this._filterMyPackages = false;
    this._filterToDeliver = true;
    this.vehicleService.getVehicles();
    this.exchangeDateService.getExchangeDates();
    this.packageService.update('/package/acceptable');
  }
}
