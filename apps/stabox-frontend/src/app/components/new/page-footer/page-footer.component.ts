import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  instagramIconSrc: string = 'assets/images/new/icons/instagram.svg';
  facebookIconSrc: string = 'assets/images/new/icons/facebook.svg';
  twitterIconSrc: string = 'assets/images/new/icons/twitter.svg';

  constructor() {}

  ngOnInit(): void {}
}
