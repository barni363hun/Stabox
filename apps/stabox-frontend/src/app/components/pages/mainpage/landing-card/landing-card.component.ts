import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card.component.html',
  styleUrls: ['./landing-card.component.scss']
})
export class LandingCardComponent implements OnInit {

  @Input() lightMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
