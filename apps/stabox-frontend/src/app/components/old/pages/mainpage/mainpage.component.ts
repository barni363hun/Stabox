import { Component, OnInit } from '@angular/core';
import { SnackbarService, ThemeService } from '../../../../services';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  constructor(public themeService: ThemeService, public snackbarService: SnackbarService) {}

  ngOnInit(): void {}
}
