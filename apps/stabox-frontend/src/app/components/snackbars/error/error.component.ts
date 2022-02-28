import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService, ThemeService, UserService } from '../../../services';

@Component({
  selector: 'stabox-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(
    public snackbarService: SnackbarService,
    public themeService: ThemeService,
    public userService: UserService
  ) {
    this.snackbarService.getSnackBar();
    this.themeService.getTheme();
  }

  ngOnInit(): void {}

  dismiss() {
    this.snackbarService.clearSnackBars();
  }

  getResult(result: boolean) {
    if (result) {
      this.userService.beShipper();
      location.reload();
    }
    this.snackbarService.snackbar.showConfirm = false;
  }
}
