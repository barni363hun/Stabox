import { Component, OnInit } from '@angular/core';
import {
  AddressService,
  ExchangeDateService,
  UserService,
  SnackbarService,
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
  successMessage = '';

  constructor(
    public userService: UserService,
    public exchangeDateService: ExchangeDateService,
    public addressService: AddressService,
    public snackbarService: SnackbarService
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

  checkData() {
    if (
      this.userService.user.username == '' ||
      this.userService.user.firstName == '' ||
      this.userService.user.lastName == '' ||
      this.userService.user.email == '' ||
      this.userService.user.phoneNumber == ''
    ) {
      this.errorMessage = 'Fill in all your data, please.';
      this.userDataChanged = false;
      this.snackbarService.showSnackbar('error', this.errorMessage);
    } else {
      this.snackbarService.clearSnackBar();
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
