import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services';

@Component({
  selector: 'stabox-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  homeIconSrc: string = '../../../../assets/images/new/icons/home.svg';
  personIconSrc: string = '../../../../assets/images/new/icons/person.svg';

  isChecked: boolean = true;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.isChecked = !this.themeService.light;
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
    }
    else {
      this.isChecked = true;
    }

    if (this.isChecked) {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
