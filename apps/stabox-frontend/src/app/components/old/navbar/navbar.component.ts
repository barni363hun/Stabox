import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService, SnackbarService, ThemeService, UserService } from '../../../services';

@Component({
  selector: 'stabox-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showSideBar = false;

  constructor(
    public userService: UserService,
    public themeService: ThemeService,
    public snackbarService: SnackbarService,
    public layoutService: LayoutService,
    private router: Router
  ) {
    this.themeService.getTheme();
  }

  ngOnInit(): void {
    this.layoutService.getLayout();
  }

  setLayout() {
    this.layoutService.setLayout('new');
    this.router.navigate(['/']);
  }
}
