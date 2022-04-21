import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService, LayoutService } from '../../../../services';

@Component({
  selector: 'stabox-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  homeIconSrc = 'assets/new/icons/homeWhite.svg';
  accountIconSrc = 'assets/new/icons/personWhite.svg';

  isChecked: boolean = true;

  constructor(
    public themeService: ThemeService,
    public layoutService: LayoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isChecked = !this.themeService.light;
    this.layoutService.getLayout();
  }

  toggleTheme() {
    if (!this.isChecked) {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  toggleChecked() {
    if (this.isChecked) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }

    if (this.isChecked) {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

  setLayout() {
    this.layoutService.setLayout('old')
    this.router.navigate(['/']);
  }
}
