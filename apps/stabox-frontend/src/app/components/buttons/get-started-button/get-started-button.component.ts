import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';

@Component({
  selector: 'app-get-started-button',
  templateUrl: './get-started-button.component.html',
  styleUrls: ['./get-started-button.component.scss'],
})
export class GetStartedButtonComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
