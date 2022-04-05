import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarBasicComponent } from '../../../..';
import { SnackbarService, UserService } from '../../../../../services';

@Component({
  selector: 'stabox-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openSnackBar() {
    this.snackbarService.show(3000, 'Success.', 'success');
  }
}
