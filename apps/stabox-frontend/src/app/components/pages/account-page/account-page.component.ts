import { Component, OnInit } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';
import {
  AddressService,
  ExchangeDateService,
  UserService,
  SnackbarService,
  ThemeService,
} from '../../../services';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  viewDetails = false;

  constructor(
    public userService: UserService,
    public exchangeDateService: ExchangeDateService,
    public addressService: AddressService,
    public snackbarService: SnackbarService,
    public themeService: ThemeService
  ) {
  }

  saveAddress(address: addressInterface) {
    console.log(address);
  }

  ngOnInit(): void {
    this.userService.refreshUserData();
    this.exchangeDateService.getExchangeDates();
    this.addressService.getAddresses();
  }

  wantToBeShipper() {
    if (this.userService.isUser) {
      this.snackbarService.showConfirmSnackbar('Do you want to be a shipper?');
    } else {
      this.snackbarService.showErrorSnackbar('Fill in all your data, please.');
    }
  }

  getViewShipperDetails(data: any) {
    this.viewDetails = data;
  }
}
