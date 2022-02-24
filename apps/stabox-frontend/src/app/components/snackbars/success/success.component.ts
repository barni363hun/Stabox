import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../../services';

@Component({
  selector: 'stabox-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  snackbar: any;

  constructor(public snackbarService: SnackbarService) {
    this.snackbar = this.snackbarService.getSnackBar();
  }

  ngOnInit(): void {}
}
