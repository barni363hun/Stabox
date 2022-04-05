import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  homeIconSrc = 'assets/new/icons/homeWhite.svg';
  accountIconSrc = 'assets/new/icons/personWhite.svg';
  addressIconSrc = 'assets/new/icons/locationWhite.svg';
  dateIconSrc = 'assets/new/icons/dateWhite.svg';
  boxIconSrc = 'assets/new/icons/boxWhite.svg';

  constructor() {}

  ngOnInit(): void {}
}