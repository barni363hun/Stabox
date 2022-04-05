import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent implements OnInit {
  homeIconSrc = 'assets/new/icons/homeWhite.svg';
  accountIconSrc = 'assets/new/icons/personWhite.svg';
  addressIconSrc = 'assets/new/icons/locationWhite.svg';
  dateIconSrc = 'assets/new/icons/dateWhite.svg';
  boxIconSrc = 'assets/new/icons/boxWhite.svg';

  constructor() {}

  ngOnInit(): void {}
}
