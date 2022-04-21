import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../../../services';

@Component({
  selector: 'app-home-icon',
  templateUrl: './home-icon.component.html',
  styleUrls: ['./home-icon.component.scss']
})
export class HomeIconComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
