import { Component, Input, OnInit } from '@angular/core';
import { cError, cLog } from '@stabox/stabox-lib';
import {
  ExchangeDateService,
  SnackbarService,
  UserService,
  VehicleService,
} from '../../../services';
import { PackageService } from '../../../services/package.service';
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
})
export class PackageCardComponent implements OnInit {
  @Input() package!: any;
  isAvailable: boolean = false;
  state: 'notShipper' | 'finished' | 'shippable' | 'finishable' = 'finished';
  status: 'waiting for shipper' | 'being shipped' | 'finished' =
    'waiting for shipper';

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
    private snackbarService: SnackbarService
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
        ? 'waiting for shipper'
        : this.package.shippingDate
        ? 'finished'
        : 'being shipped';
  }

  selectPostDate() {
    const date: Date = this.selectedExchangeDate;
    if (!this.selectedVehicle) {
      cError('NO vehicle selected!');
      this.snackbarService.showErrorSnackbar('NO vehicle selected!');
    } else if (!this.selectedExchangeDate) {
      cError('No exchangeDate selected!');
      this.snackbarService.showErrorSnackbar('NO exchangeDate selected!');
    } else if (!this.isInDateRanges(date)) {
      cError('exchangeDate Is Not In Range!');
      this.snackbarService.showErrorSnackbar('exchangeDate Is Not In Range!');
    } else {
      this.packageService.postPackage(
        this.package.id,
        Number(this.selectedVehicle),
        date
      );
      this.snackbarService.showSuccessSnackbar(
        'Package selected successfully!'
      );
    }
    this.updateState();
  }

  finishShipping() {
    this.packageService.finishPackage(this.package.id);
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
      [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') +
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
}
