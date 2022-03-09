import { Component, Input, OnInit } from '@angular/core';
import { ExchangeDateService, ThemeService, UserService, VehicleService } from '../../../services';
import { PackageService } from '../../../services/package.service';
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})

export class PackageCardComponent implements OnInit {
  @Input() package!: any;
  isAvailable: boolean = false;
  state: 'notShipper' | 'finished' | 'shippable' | 'finishable' = 'finished';
  status: 'Inactive' | 'Active' | 'Finished' = 'Inactive';

  isUserTheOwner: boolean = false;

  vehicles: any[] = []
  selectedVehicle: number = 0;

  exchangeDates: any[] = [];
  selectedExchangeDate: number = 0;

  constructor(
    private userService: UserService,
    private packageService: PackageService,
    private vehicleService: VehicleService,
    private exchangeDateSercice: ExchangeDateService,
    public themeService: ThemeService
  ) { }

  ngOnInit(): void {

    this.vehicles = this.vehicleService.vehicles
    this.exchangeDateSercice.getExchangeDateByPackageId(this.package.fromAddressId).subscribe({
      next: (res) => {
        this.exchangeDates = res
      },
      error: (err) => console.log(err),
    })

    this.updateState()
    this.isUserTheOwner = this.userService.user.id == this.package.userId;
    this.status = this.package.vehicleId == null ? 'Inactive' : this.package.shippingDate ? 'Finished' : 'Active'
  }

  selectPostDate() {
    let date = new Date(Date.now()).toISOString();
    if (!this.selectedVehicle) {
      console.log('NO vehicle selected')
    }
    else if (!this.selectedExchangeDate) {
      console.log('No exchangeDate selected')
    }
    else {
      this.packageService.postPackage(this.package.id, Number(this.selectedVehicle), date);
    }
    this.updateState();
  }

  finishShipping() {
    this.packageService.finishPackage(this.package.id);
    this.updateState();

  }

  updateState() {
    if (!this.userService.user['https://www.stabox.hu/roles'].includes('shipper')) {
      this.state = 'notShipper';
    }
    else if (!this.package.vehicleId) {
      this.state = 'shippable';
    }
    else if (!this.package.shippingDate) {
      this.state = 'finishable';
    }
    else {
      this.state = 'finished';
    }
  }
}
