import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services';
@Component({
  selector: 'app-account-page-navbar',
  templateUrl: './account-page-navbar.component.html',
  styleUrls: ['./account-page-navbar.component.scss'],
})
export class AccountPageNavbarComponent implements OnInit {
  showSideBar = false;

  @Output() lightModeEvent = new EventEmitter<String>();
  lightMode = false;

  theme = 'dark';

  constructor(public userService: UserService) {
    if (localStorage.getItem('theme') == 'light') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

  ngOnInit(): void {}

  emitLightModeOn() {
    this.theme = 'light';
    localStorage.setItem('theme', this.theme);
    this.lightMode = true;
    this.lightModeEvent.emit(localStorage.getItem('theme')?.toString());
  }

  emitLightModeOff() {
    this.theme = 'dark';
    localStorage.setItem('theme', this.theme);
    this.lightMode = false;
    this.lightModeEvent.emit(localStorage.getItem('theme')?.toString());
  }
}
