import { Component, Input, OnInit } from '@angular/core';
import { cError } from '@stabox/stabox-lib';
import {
  ExchangeDateService,
  PackageService,
  SnackbarService,
  UserService,
  VehicleService,
} from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {
  @Input() package!: any;
  isAvailable: boolean = false;
  state: 'notShipper' | 'finished' | 'shippable' | 'finishable' = 'finished';
  status: 'Inactive' | 'Active' | 'Delivered' = 'Inactive';

  isUserTheOwner: boolean = false;

  vehicles: any[] = [];
  selectedVehicle: number = 0;

  exchangeDates: { startDate: Date; endDate: Date }[] = [];
  selectedExchangeDate: Date = new Date();

  constructor(
    private userService: UserService,
    private packageService: PackageService,
    private vehicleService: VehicleService,
    private exchangeDateSercice: ExchangeDateService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.vehicles = this.vehicleService.vehicles;
    this.exchangeDateSercice
      .getExchangeDateByPackageId(this.package.fromAddressId)
      .subscribe({
        next: (res) => {
          this.exchangeDates = res;
        },
        error: (err) => console.log(err),
      });

    this.updateState();
    this.isUserTheOwner = this.userService.user.id == this.package.userId;
    this.status =
      this.package.vehicleId == null
        ? 'Inactive'
        : this.package.shippingDate
        ? 'Delivered'
        : 'Active';
  }

  selectPostDate() {
    const date: Date = this.selectedExchangeDate;
    if (!this.selectedVehicle) {
      cError('NO vehicle selected!');
      this.snackbarService.show(3000, 'Select a vehicle, please.', 'error');
      this.snackbarService.showErrorSnackbar('Select a vehicle, please.');
    } else if (!this.selectedExchangeDate) {
      cError('No exchangeDate selected!');
      this.snackbarService.show(3000, 'Select an exchange date, please.', 'error');
      this.snackbarService.showErrorSnackbar('Select an exchange date, please.');
    } else if (!this.isInDateRanges(date)) {
      cError('exchangeDate Is Not In Range!');
      this.snackbarService.show(3000, 'Choose a date that is in one of the ranges, please.', 'error');
      this.snackbarService.showErrorSnackbar('Choose a date that is in one of the ranges, please.');
    } else {
      this.packageService.postPackage(this.package.id, Number(this.selectedVehicle), date);
      this.snackbarService.show(3000, `Package  '${this.package.name}' accepted.`, 'success');
      this.snackbarService.showSuccessSnackbar(`Package  '${this.package.name}' accepted.`);
    }
    this.updateState();
  }

  finishShipping() {
    this.packageService.finishPackage(this.package.id);
    this.snackbarService.show(3000, `Package '${this.package.name}' delivered.`, 'success');
    this.snackbarService.showSuccessSnackbar(`Package  '${this.package.name}' delivered. Earned ${this.package.price} Stabucks!`);
    this.updateState();
  }

  isInDateRanges(d: any): boolean {
    let back = false;
    const myDate = new Date(d);
    this.exchangeDates.forEach((range) => {
      if (
        myDate.getTime() > new Date(range.startDate).getTime() &&
        myDate.getTime() < new Date(range.endDate).getTime()
      ) {
        back = true;
      }
    });
    return back;
  }

  //TODO a d valamiért string-ként jön de mégse
  formatDate(sDate: any): string {
    const d = new Date(sDate);
    const dformat =
      [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('.') +
      ' ' +
      [d.getHours(), d.getMinutes()].join(':');
    return dformat;
  }

  updateState() {
    if (
      !this.userService.user['https://www.stabox.hu/roles'].includes('shipper')
    ) {
      this.state = 'notShipper';
    } else if (!this.package.vehicleId) {
      this.state = 'shippable';
    } else if (!this.package.shippingDate) {
      this.state = 'finishable';
    } else {
      this.state = 'finished';
    }
  }

  getStyles(status: string) {
    let color = '';

    switch (status) {
      case 'Inactive':
        color = '#ff5f60';
        break;
      case 'Active':
        color = '#f2da00';
        break;
      case 'Delivered':
        color = '#41ffc2';
        break;
      default:
        break;
    }

    return color;
  }
}
