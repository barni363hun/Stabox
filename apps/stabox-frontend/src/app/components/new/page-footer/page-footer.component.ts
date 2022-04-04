import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services';

@Component({
  selector: 'stabox-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  instagramIconSrcLight: string = 'assets/new/icons/instagramLight.svg';
  facebookIconSrcLight: string = 'assets/new/icons/facebookLight.svg';
  twitterIconSrcLight: string = 'assets/new/icons/twitterLight.svg';

  instagramIconSrcDark: string = 'assets/new/icons/instagramDark.svg';
  facebookIconSrcDark: string = 'assets/new/icons/facebookDark.svg';
  twitterIconSrcDark: string = 'assets/new/icons/twitterDark.svg';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
