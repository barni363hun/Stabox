import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  homeIconSrc = 'assets/images/new/icons/homeWhite.svg';
  accountIconSrc = 'assets/images/new/icons/personWhite.svg';
  addressIconSrc = 'assets/images/new/icons/locationWhite.svg';
  dateIconSrc = 'assets/images/new/icons/dateWhite.svg';
  boxIconSrc = 'assets/images/new/icons/boxWhite.svg';

  constructor() {}

  ngOnInit(): void {}
}
