import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services';

@Component({
  selector: 'stabox-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  instagramIconSrc: string = 'assets/images/new/darkTheme/icons/instagram.svg';
  facebookIconSrc: string = 'assets/images/new/darkTheme/icons/facebook.svg';
  twitterIconSrc: string = 'assets/images/new/darkTheme/icons/twitter.svg';

  instagramIconLightSrc: string = 'assets/images/new/lightTheme/icons/instagram.svg';
  facebookIconLightSrc: string = 'assets/images/new/lightTheme/icons/facebook.svg';
  twitterIconLightSrc: string = 'assets/images/new/lightTheme/icons/twitter.svg';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
