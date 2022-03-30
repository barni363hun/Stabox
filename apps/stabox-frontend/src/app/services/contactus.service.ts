import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackbarService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private http: HttpClient;
  public feedback = {
    email: '',
    name: '',
    message: '',
  }

  constructor(private httpBackend: HttpBackend, private snackbarService: SnackbarService) {
    this.http = new HttpClient(httpBackend);
  }

  sendFeedback() {
    if (!this.snackbarService.checkAllValueOfAnObject(this.feedback)) {
      this.snackbarService.showErrorSnackbar('Please fill in all inputs!');
      return false;
    };

    if (!this.snackbarService.validateEmail(this.feedback.email)) {
      this.snackbarService.showErrorSnackbar('email field must contain an email');
      return false;
    }

    this.http.post(environment.apiURL + '/contact-us', this.feedback,).subscribe({
      next: res => this.snackbarService.showSuccessSnackbar('Feedback sent successFully!'),
      error: err => this.snackbarService.showErrorSnackbar(err)

    });

    this.emptyFeedback();
    return true;
  }
  
  private emptyFeedback() {
    this.feedback = {
      email: '',
      name: '',
      message: '',
    }
  }

}
