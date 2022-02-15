import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  viewDetails = false;
  lightMode = false;
  theme = 'dark';

  constructor(public userService: UserService) {
    if (localStorage.getItem('theme') == 'light') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

  ngOnInit(): void {
    this.userService.refreshUserData();
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
