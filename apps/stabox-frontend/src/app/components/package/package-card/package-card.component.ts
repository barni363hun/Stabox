import { Component, Input, OnInit } from '@angular/core';
import {
  ExchangeDateService,
  SnackbarService,
  ThemeService,
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
  status: 'Inactive' | 'Active' | 'Delivered' = 'Inactive';

  isUserTheOwner: boolean = false;

  vehicles: any[] = [];
  selectedVehicle: number = 0;

  exchangeDates: any[] = [];
  selectedExchangeDate: number = 0;

  constructor(
    private userService: UserService,
    private packageService: PackageService,
    private vehicleService: VehicleService,
    private exchangeDateSercice: ExchangeDateService,
    public themeService: ThemeService,
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
        error: (err) => {
          console.log(err);
        },
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
    let date = new Date(Date.now()).toISOString();
    if (!this.selectedVehicle) {
      console.log('NO vehicle selected');
      this.snackbarService.showErrorSnackbar('Select a vehicle, please.');
    } else if (!this.selectedExchangeDate) {
      console.log('No exchangeDate selected');
      this.snackbarService.showErrorSnackbar(
        'Select an exchange date, please.'
      );
    } else {
      this.packageService.postPackage(
        this.package.id,
        Number(this.selectedVehicle),
        date
      );
      this.snackbarService.showSuccessSnackbar(
        `Package  '${this.package.name}' accepted successfully.`
      );
    }
    this.updateState();
  }

  finishShipping() {
    this.packageService.finishPackage(this.package.id);
    this.snackbarService.showSuccessSnackbar(
      `Package  '${this.package.name}' delivered successfully.`
    );
    this.updateState();
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
        color = '#ec2f4b';
        break;
      case 'Active':
        color = '#f2da00';
        break;
      case 'Delivered':
        color = '#00ff00';
        break;
      default:
        break;
    }

    return color;
  }
}
