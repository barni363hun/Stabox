import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecieverService {

  constructor(private http:HttpClient) { }

   getRecievers():Observable<any>{
    return this.http.get(environment.apiURL+'/reciever')
  }
}
