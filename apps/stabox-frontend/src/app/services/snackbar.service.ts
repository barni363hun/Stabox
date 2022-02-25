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
  };

  snackbarTimer: any;

  constructor() {}

  showErrorSnackbar(message: string) {
    if (this.snackbarTimer != null) {
      clearTimeout(this.snackbarTimer);
      this.snackbarTimer = null;
      this.snackbar.showError = false
    }
    this.snackbarTimer = setTimeout(
      () => (this.snackbar.showError = false),
      6000
    );
    this.snackbar.errorMessage = message;
    this.snackbar.showError = true;
  }

  showSuccessSnackbar(message: string) {
    if (this.snackbarTimer != null) {
      clearTimeout(this.snackbarTimer);
      this.snackbarTimer = null;
      this.snackbar.showError = false
    }
    this.snackbarTimer = setTimeout(
      () => (this.snackbar.showSuccess = false),
      6000
    );
    this.snackbar.successMessage = message;
    this.snackbar.showSuccess = true;
  }

  clearSnackBars() {
    this.snackbar.errorMessage = '';
    this.snackbar.showError = false;
    this.snackbar.successMessage = '';
    this.snackbar.showSuccess = false;
  }

  getSnackBar() {
    return this.snackbar;
  }
}
