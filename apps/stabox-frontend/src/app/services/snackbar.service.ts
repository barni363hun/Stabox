import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  emptySnackbar = {
    errorMessage: '',
    showError: false,
    successMessage: '',
    showSuccess: false,
    confirmMessage: '',
    showConfirm: false,
    result: false,
  };

  snackbar = {
    errorMessage: '',
    showError: false,
    successMessage: '',
    showSuccess: false,
    confirmMessage: '',
    showConfirm: false,
    result: false,
  };

  snackbarTimer: any;

  constructor() {}

  showErrorSnackbar(message: string) {
    if (this.snackbarTimer != null) {
      clearTimeout(this.snackbarTimer);
      this.snackbarTimer = null;
      this.snackbar.showError = false;
    }
    this.snackbarTimer = setTimeout(
      () => (this.snackbar.showError = false),
      6000
    );
    this.snackbar.errorMessage = message;
    this.snackbar.showError = true;
    this.snackbar.showSuccess = false;
    this.snackbar.showConfirm = false;
  }

  showSuccessSnackbar(message: string) {
    if (this.snackbarTimer != null) {
      clearTimeout(this.snackbarTimer);
      this.snackbarTimer = null;
      this.snackbar.showError = false;
    }
    this.snackbarTimer = setTimeout(
      () => (this.snackbar.showSuccess = false),
      6000
    );
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
    this.snackbar = this.emptySnackbar;
  }

  getSnackBar() {
    return this.snackbar;
  }
}
