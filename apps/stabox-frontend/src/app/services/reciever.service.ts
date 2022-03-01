import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom, Observable } from 'rxjs';
import { recieverWithAddress } from '@stabox/stabox-lib';
@Injectable({
  providedIn: 'root',
})
export class RecieverService {
  constructor(private http: HttpClient) { }
  public userSRecievers: any[] = [];

  getRecievers(): Observable<any> {
    return this.http.get(environment.apiURL + '/reciever');
  }
  addReciever(reciever: recieverWithAddress) {
    return firstValueFrom(this.http.put(environment.apiURL + '/reciever', reciever));
  }
  refreshUserRecievers() {
    this.getRecievers().subscribe((res) => this.userSRecievers = res)
  }
}
