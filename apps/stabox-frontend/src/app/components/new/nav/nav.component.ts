import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  homeIconSrc: string = '../../../../assets/images/new/icons/home.svg';
  personIconSrc: string = '../../../../assets/images/new/icons/person.svg';

  constructor() {}

  ngOnInit(): void {}
}
