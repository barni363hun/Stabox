import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
