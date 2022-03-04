import { Component, Input, OnInit } from '@angular/core';
import { ThemeService, UserService } from '../../services';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor(
    public userService: UserService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}
}
