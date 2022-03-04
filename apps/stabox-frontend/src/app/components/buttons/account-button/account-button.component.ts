import { Component, OnInit } from '@angular/core';
import { ThemeService, UserService } from '../../../services';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.scss'],
})
export class AccountButtonComponent implements OnInit {
  showMenu = false;

  constructor(
    public userService: UserService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}

  toggleMenu(): any {
    if (this.showMenu == true) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }
}
