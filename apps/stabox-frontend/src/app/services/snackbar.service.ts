/* eslint-disable @typescript-eslint/no-this-alias */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarBasicComponent } from '../components';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  showError = false;
  showSuccess = false;
  showConfirm = false;
  message = '';

  new = true;

  constructor(private snackBar: MatSnackBar) {}

  show(duration: number, text: string, mode: string) {
    if (this.new) {
      this.snackBar.openFromComponent(SnackbarBasicComponent, {
        duration: duration,
        data: text,
        panelClass: [mode],
      });
    }
  }

  public validateEmail(email: any) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  public validatePhoneNumber(phone: any) {
    return String(phone)
      .toLowerCase()
      .match(/^((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})$/);
  }

  private formatMessage(message: string): string {
    const messages: string[] = message.toString().split(',');
    let errorMessage = '';
    for (let index = 0; index < messages.length; index++) {
      let message = messages[index];
      const i = message.search(/[A-Z]/);
      if (i != -1) {
        message = message.replace(/[A-Z]/, ` ${message[i].toLowerCase()}`);
      }
      message = message.replace(message[0], message[0].toUpperCase());
      errorMessage += message + '. ';
    }
    return errorMessage;
  }

  // TODO remove any
  checkAllValueOfAnObject(obj: any): boolean {
    const context = this;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const data = obj[key];
        if (typeof data === 'number' || typeof data === 'string') {
          if (
            !context.checkInput(
              data,
              'Please fill the data about the ' + key + ' of the reciever'
            )
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }

  checkInput(data: string | number, errorMessage: string): boolean {
    if (
      (typeof data === 'number' && data > 0) ||
      (typeof data === 'string' && data.trim() != '')
    ) {
      return true;
    } else {
      if (!this.new) {
        this.showErrorSnackbar(errorMessage);
      }
      this.show(3000, errorMessage, 'error');
      return false;
    }
  }

  showErrorSnackbar(message: string) {
    if (!this.new) {
      this.message = this.formatMessage(message);
      this.showSuccess = false;
      this.showConfirm = false;

      const context = this;
      context.showError = false;
      setTimeout(function () {
        context.showError = true;
      }, 100);

      this.message = message;
    }
  }

  showSuccessSnackbar(message: string) {
    if (!this.new) {
      this.showError = false;
      this.showConfirm = false;

      const context = this;
      context.showSuccess = false;
      setTimeout(function () {
        context.showSuccess = true;
      }, 100);

      this.message = message;
    }
  }

  showConfirmSnackbar(message: string) {
    if (!this.new) {
      this.showError = false;
      this.showSuccess = false;

      this.showConfirm = true;

      this.message = message;
    }
  }

  clearSnackBars() {
    this.showError = false;
    this.showSuccess = false;
    this.showConfirm = false;
    this.message = '';
  }
}
