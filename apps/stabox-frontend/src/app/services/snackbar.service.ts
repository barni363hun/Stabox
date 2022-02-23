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
  };

  constructor() {}

  setSnackbar(type: string, message: string, show: boolean) {
    if ((type = 'error')) {
      this.snackbar.errorMessage = message;
      this.snackbar.showError = show;
    } else if ((type = 'success')) {
      this.snackbar.successMessage = message;
      this.snackbar.showSuccess = show;
    }
  }

  getSnackBar() {
    return this.snackbar;
  }

  clearSnackBar() {
    this.snackbar.errorMessage = '';
    this.snackbar.showError = false;
    this.snackbar.successMessage = '';
    this.snackbar.showSuccess = false;
  }
}
