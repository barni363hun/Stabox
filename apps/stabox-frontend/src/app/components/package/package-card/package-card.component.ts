import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services';
import { PackageService } from '../../../services/package.service';
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})

export class PackageCardComponent implements OnInit {
  @Input() package!: any;
  // packageInterface
  //   = {
  //   address: {
  //     city: "city",
  //     region: "region",
  //     street: "street",
  //     zipCode: 1111,
  //     houseNumber: 1
  //   },
  //   size: "size",
  //   weight: "sok g",
  //   fragile: true
  // }
  isAvailable: boolean = false;
  state: 'notShipper' | 'finished' | 'shippable' | 'finishable' = 'finished';
  user: any;
  constructor(private userService: UserService, private packageService: PackageService) { }

  ngOnInit(): void {
    this.updateState()
  }
  selectPostDate() {
    let date = new Date(Date.now()).toISOString()
    this.packageService.postPackage(this.package.id, 1, date)
    this.updateState()
  }
  finishShipping() {
    this.packageService.finishPackage(this.package.id)
    this.updateState()
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

// interface packageInterface {
//   fromAddress: addressInterface,
//   size: string,
//   weight: string,
//   fragile: boolean,
//   price: number
// }
// interface addressInterface {
//   region: string
//   zipCode: number,
//   cityName: string,
//   street: string,
//   houseNumber: number
// }
