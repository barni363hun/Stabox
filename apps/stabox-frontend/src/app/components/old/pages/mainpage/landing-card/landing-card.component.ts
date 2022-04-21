import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss']
})
export class LandingCardComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
