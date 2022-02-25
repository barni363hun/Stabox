import { Component, OnInit } from '@angular/core';
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
    this.themeService.getTheme();
  }

  ngOnInit(): void {
    this.userService.refreshUserData();
    this.exchangeDateService.getExchangeDates();
    this.addressService.getAddresses();
  }

  wantToBeShipper() {
    if (this.userService.isUser) {
      if (confirm('Do you want to be a shipper?')) {
        this.userService.beShipper();
      } else {
        alert('okaly');
      }
    } else {
      alert('Please fill all of your data!');
    }
  }

  getViewShipperDetails(data: any) {
    this.viewDetails = data;
  }
}
