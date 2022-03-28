import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  accountsCreated: number = 42;
  packagesDelivered: number = 69;
  userRating: number = 4.3;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
