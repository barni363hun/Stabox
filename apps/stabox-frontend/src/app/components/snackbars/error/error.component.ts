import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from '../../../services';

@Component({
  selector: 'stabox-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  snackbar: any;

  constructor(public snackbarService: SnackbarService) {
    this.snackbar = this.snackbarService.getSnackBar();
  }

  ngOnInit(): void {}

  dismiss() {
    this.snackbarService.clearSnackBars();
  }
}
