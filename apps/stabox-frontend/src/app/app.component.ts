import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services';

@Component({
  selector: 'stabox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme();
  }
}
