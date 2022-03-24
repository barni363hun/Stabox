import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  accountsCreated: number = 42;
  packagesDelivered: number = 69;
  userRating: number = 4.3;

  constructor() {}

  ngOnInit(): void {}
}
