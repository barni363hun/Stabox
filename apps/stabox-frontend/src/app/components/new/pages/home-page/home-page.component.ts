import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../services';

@Component({
  selector: 'stabox-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
