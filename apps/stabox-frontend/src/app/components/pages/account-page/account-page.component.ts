import { Component, OnInit } from '@angular/core';
import {
  AddressService,
  ExchangeDateService,
  UserService,
} from '../../../services';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  userDataChanged = false;
  viewDetails = false;
  lightMode = false;
  theme = 'dark';
  errorMessage = '';

  constructor(
    public userService: UserService,
    public exchangeDateService: ExchangeDateService,
    public addressService: AddressService
  ) {
    if (localStorage.getItem('theme') == 'light') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
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

  checkUserName() {
    if (this.userService.user.username.length < 6) {
      this.errorMessage = 'Username must be between 6 and 20 characters';
    }
    else {
      this.userDataChanged = true;
    }
  }

  getViewShipperDetails(data: any) {
    this.viewDetails = data;
  }

  getLightModeToggle(data: any) {
    if (data == 'light') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }
}
