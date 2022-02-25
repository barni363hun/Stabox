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
  }

  showConfirmSnackbar(message: string) {
    if (this.snackbarTimer != null) {
      clearTimeout(this.snackbarTimer);
      this.snackbarTimer = null;
      this.snackbar.showConfirm = false;
    }
    this.snackbarTimer = setTimeout(
      () => (this.snackbar.showConfirm = false),
      6000
    );
    this.snackbar.confirmMessage = message;
    this.snackbar.showConfirm = true;
  }

  clearSnackBars() {
    this.snackbar = this.emptySnackbar;
  }

  getSnackBar() {
    return this.snackbar;
  }
}
