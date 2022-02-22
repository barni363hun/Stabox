import { Component, OnInit } from '@angular/core';
import { ExchangeDateService, VehicleService } from '../../../services';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'stabox-my-packages-page',
  templateUrl: './my-packages-page.component.html',
  styleUrls: ['./my-packages-page.component.scss'],
})
export class MyPackagesPageComponent implements OnInit {
  // packages: packageInterface[] = []

  _filterMyPackages: boolean = false;
  _filterAllPackages: boolean = false;
  _filterToDeliver: boolean = false;

  constructor(
    public packageService: PackageService,
    private vehicleService:VehicleService,
    private exchangeDateService:ExchangeDateService
    ) { }

  ngOnInit(): void {
    //   this.packageService.getMypackages().subscribe({
    //     next: (res) => {
    //       this.packages = res;
    //       console.log(res);
    //     }
    //   });
    //   console.log(this.packages);

  }

  filterAllPackages() {
    this._filterAllPackages = true;
    this._filterMyPackages = false;
    this._filterToDeliver = false;
  }

  filterMyPackages() {
    this._filterAllPackages = false;
    this._filterMyPackages = true;
    this._filterToDeliver = false;
    this.packageService.update('/package/withaddress');
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

interface packageInterface {
  fromAddress: addressInterface;
  size: string;
  weight: string;
  fragile: boolean;
  price: number;
}
interface addressInterface {
  region: string;
  zipCode: number;
  city: string;
  street: string;
  houseNumber: number;
}
