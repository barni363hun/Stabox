import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  viewDetails = false;
  lightMode = false;
  theme = "dark"

  constructor() {
    if (localStorage.getItem('theme') == "light") {
      this.lightMode = true;
    }
    else {
      this.lightMode = false;
    }
  }

  ngOnInit(): void {
  }

  getViewShipperDetails(data: any) {
    this.viewDetails = data;
  }

  getLightModeToggle(data: any) {
    if (data == "light") {
      this.lightMode = true;
    }
    else {
      this.lightMode = false;
    }
  }
  
}
