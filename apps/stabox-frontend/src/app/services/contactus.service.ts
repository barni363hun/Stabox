import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackbarService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient, private snackbarService: SnackbarService) { }
  public feedback = {
    email: '',
    name: '',
    message: '',

  }

  sendFeedback() {
    if (!this.snackbarService.checkAllValueOfAnObject(this.feedback)) {
      this.snackbarService.showErrorSnackbar('Please fill in all inputs!')
      return false;
    };
    if (!this.validateEmail()){
      this.snackbarService.showErrorSnackbar('email field must contain an email')
      return false;
    }
      this.http.post(environment.apiURL + '/contact-us', this.feedback).subscribe({
        next: res => this.snackbarService.showSuccessSnackbar('Feedback sent successFully!'),
        error: err => this.snackbarService.showErrorSnackbar(err)
      });
    this.emptyFeedback();
    return true
  }
  private emptyFeedback() {
    this.feedback = {
      email: '',
      name: '',
      message: '',
    }
  }
  private validateEmail() {
    return String(this.feedback.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
}
