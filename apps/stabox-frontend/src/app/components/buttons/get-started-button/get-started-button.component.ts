import { Component, Input, OnInit } from '@angular/core';
import { ThemeService, UserService } from '../../../services';

@Component({
  selector: 'app-get-started-button',
  templateUrl: './get-started-button.component.html',
  styleUrls: ['./get-started-button.component.scss'],
})
export class GetStartedButtonComponent implements OnInit {
  constructor(
    public userService: UserService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}
}
