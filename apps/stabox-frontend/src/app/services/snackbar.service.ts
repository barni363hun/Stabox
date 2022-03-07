/* eslint-disable @typescript-eslint/no-this-alias */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  showError = false;
  showSuccess = false;
  showConfirm = false;
  message = '';

  
  private formatMessage(message: string):string {
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
        if ((typeof data === 'number' || typeof data === 'string')) {
          if (!context.checkInput(data,"Please fill the data about the " + key + " of the reciever")) {            
            return false;
          }
        }
      }
    }
    return true
  }
  
  checkInput(data: string | number, errorMessage: string):boolean {
    if ((typeof data === 'number' && data > 0)||(typeof data === 'string' && data.trim() != "")) {
      return true;
    }
    else {
      this.showErrorSnackbar(errorMessage);
      return false;
    }
  }

  showErrorSnackbar(message: string) {
    this.message = this.formatMessage(message)
    this.showSuccess = false;
    this.showConfirm = false;

    const context = this;
    context.showError = false;
    setTimeout(function () {
      context.showError = true;
    }, 100);

    this.message = message;
  }

  showSuccessSnackbar(message: string) {
    this.showError = false;
    this.showConfirm = false;

    const context = this;
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
