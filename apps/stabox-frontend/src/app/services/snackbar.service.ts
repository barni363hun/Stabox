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

  showSnackbar(type: string, message: string) {
    if ((type = 'error')) {
      this.snackbar.errorMessage = message;
      this.snackbar.showError = true;
    } else if ((type = 'success')) {
      this.snackbar.successMessage = message;
      this.snackbar.showSuccess = true;
    }
  }

  clearSnackBar() {
    this.snackbar.errorMessage = '';
    this.snackbar.showError = false;
    this.snackbar.successMessage = '';
    this.snackbar.showSuccess = false;
  }

  getSnackBar() {
    return this.snackbar;
  }
}
