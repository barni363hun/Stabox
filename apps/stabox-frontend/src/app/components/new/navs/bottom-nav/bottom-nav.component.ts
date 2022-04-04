import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent implements OnInit {
  homeIconSrc = 'assets/images/new/icons/homeWhite.svg';
  accountIconSrc = 'assets/images/new/icons/personWhite.svg';
  addressIconSrc = 'assets/images/new/icons/locationWhite.svg';
  dateIconSrc = 'assets/images/new/icons/dateWhite.svg';
  boxIconSrc = 'assets/images/new/icons/boxWhite.svg';

  constructor() {}

  ngOnInit(): void {}
}
