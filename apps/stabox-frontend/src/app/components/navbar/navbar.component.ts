import { Component, OnInit } from '@angular/core';
import { ThemeService, UserService } from '../../services';

@Component({
  selector: 'stabox-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showSideBar = false;
  constructor(
    public userService: UserService,
    public themeService: ThemeService
  ) {
    this.themeService.getTheme();
  }

  ngOnInit(): void {}
}
