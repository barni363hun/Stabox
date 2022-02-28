import { Component, OnInit } from '@angular/core';
import { SnackbarService, ThemeService, UserService } from '../../services';

@Component({
  selector: 'stabox-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
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
