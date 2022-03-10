import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }
  public feedback = {
    email: '',
    name: '',
    message: '',

  }

  sendFeedback() {
    const result =this.http.post(environment.apiURL + '/contact-us', this.feedback);
    this.emptyFeedback();
    return result;
  }
  private emptyFeedback() {
    this.feedback = {
      email: '',
      name: '',
      message: '',
    }
  }

}
