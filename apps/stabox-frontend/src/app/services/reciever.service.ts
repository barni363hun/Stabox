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
  addReciever(reciever:recieverWithAddress){
    this.http.put(environment.apiURL + '/reciever', reciever).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }
}
interface recieverWithAddress {

  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  region: number,
  zipCode: number,
  cityName: string,
  street: string,
  houseNumber: number
}
