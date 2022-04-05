import { Component, OnInit } from '@angular/core';
import { SnackbarService, UserService } from '../../../../../services';

@Component({
  selector: 'stabox-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.userService.refreshUserData();
  }
}
