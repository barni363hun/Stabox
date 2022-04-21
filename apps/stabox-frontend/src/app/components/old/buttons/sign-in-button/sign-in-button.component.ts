import { Component, Input, OnInit } from '@angular/core';
import { ThemeService, UserService } from '../../../../services';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss'],
})
export class SignInButtonComponent implements OnInit {
  constructor(
    public userService: UserService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}
}
