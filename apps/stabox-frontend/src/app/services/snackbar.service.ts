import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  snackbar = {
    errorMessage: '',
    showError: false,
    successMessage: '',
    showSuccess: false,
    confirmMessage: '',
    showConfirm: false,
    result: false,
  };

  interval: any;

  constructor() {}

  // https://stackoverflow.com/questions/51637302/angular-restarting-a-css-animation

  showErrorSnackbar(message: string) {
    this.clearSnackBars();

    this.interval = setInterval(() => {
      this.clearSnackBars();
    }, 6000);

    this.snackbar.errorMessage = message;
    this.snackbar.showError = true;
    this.snackbar.showSuccess = false;
    this.snackbar.showConfirm = false;
  }

  showSuccessSnackbar(message: string) {
    this.clearSnackBars();

    this.interval = setInterval(() => {
      this.clearSnackBars();
    }, 6000);

    this.snackbar.successMessage = message;
    this.snackbar.showSuccess = true;
    this.snackbar.showError = false;
    this.snackbar.showConfirm = false;
  }

  showConfirmSnackbar(message: string) {
    this.snackbar.confirmMessage = message;
    this.snackbar.showConfirm = true;
    this.snackbar.showSuccess = false;
    this.snackbar.showError = false;
  }

  clearSnackBars() {
    this.snackbar.errorMessage = '';
    this.snackbar.showError = false;
    this.snackbar.successMessage = '';
    this.snackbar.showSuccess = false;
    this.snackbar.confirmMessage = '';
    this.snackbar.showConfirm = false;

    console.log('Snackbar cleared.');
    clearInterval(this.interval);
    this.interval = null;
  }

  getSnackBar() {
    return this.snackbar;
  }
}
