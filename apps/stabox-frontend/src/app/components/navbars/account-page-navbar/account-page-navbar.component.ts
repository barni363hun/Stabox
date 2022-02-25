import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeService, UserService } from '../../../services';
@Component({
  selector: 'app-account-page-navbar',
  templateUrl: './account-page-navbar.component.html',
  styleUrls: ['./account-page-navbar.component.scss'],
})
export class AccountPageNavbarComponent implements OnInit {
  showSideBar = false;

  constructor(
    public userService: UserService,
    public themeService: ThemeService
  ) {
    this.themeService.getTheme();
  }

  ngOnInit(): void {}
}
