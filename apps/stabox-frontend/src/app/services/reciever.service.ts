import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { recieverWithAddress } from '@stabox/stabox-lib';
@Injectable({
  providedIn: 'root',
})
export class RecieverService {
  constructor(private http: HttpClient) {}

  getRecievers(): Observable<any> {
    return this.http.get(environment.apiURL + '/reciever');
  }
  addReciever(reciever: recieverWithAddress) {
    this.http.put(environment.apiURL + '/reciever', reciever).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
