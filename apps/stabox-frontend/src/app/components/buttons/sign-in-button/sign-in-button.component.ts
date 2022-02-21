import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss'],
})
export class SignInButtonComponent implements OnInit {

  @Input() lightMode = false;

  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
