import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  showError = false;
  showSuccess = false;
  showConfirm = false;

  message = '';

  constructor() {}

  showErrorSnackbar(message: string) {
    this.showSuccess = false;
    this.showConfirm = false;

    let context = this;
    context.showError = false;
    setTimeout(function () {
      context.showError = true;
    }, 100);

    this.message = message;
  }

  showSuccessSnackbar(message: string) {
    this.showError = false;
    this.showConfirm = false;

    let context = this;
    context.showSuccess = false;
    setTimeout(function () {
      context.showSuccess = true;
    }, 100);

    this.message = message;
  }

  showConfirmSnackbar(message: string) {
    this.showError = false;
    this.showSuccess = false;

    this.showConfirm = true;
    
    this.message = message;
  }

  clearSnackBars() {
    this.showError = false;
    this.showSuccess = false;
    this.showConfirm = false;
    this.message = '';
  }
}
