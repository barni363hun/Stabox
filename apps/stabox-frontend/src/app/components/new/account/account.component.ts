import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';

@Component({
  selector: 'stabox-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.refreshUserData();
  }
}
