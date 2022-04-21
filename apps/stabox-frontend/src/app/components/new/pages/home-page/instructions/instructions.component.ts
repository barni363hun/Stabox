import { Component, OnInit } from '@angular/core';
import {
  ThemeService,
  UserService,
} from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  constructor(
    public themeService: ThemeService,
    public userService: UserService
  ) {}

  ngOnInit(): void {}
}
