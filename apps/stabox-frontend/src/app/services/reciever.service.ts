import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { recieverWithAddress } from '@stabox/stabox-lib';
import { SnackbarService } from './snackbar.service';
@Injectable({
  providedIn: 'root',
})
export class RecieverService {
  constructor(private http: HttpClient,private snackbarService:SnackbarService) { }
  public userSRecievers: any[] = [];

  getRecievers(): Observable<any> {
    return this.http.get(environment.apiURL + '/reciever');
  }
  addReciever(reciever: recieverWithAddress) {
    this.http.put(environment.apiURL + '/reciever', reciever).subscribe({
      next: (res) => {
        this.snackbarService.show(3000, 'Receiver added.', 'success');
        this.snackbarService.showSuccessSnackbar("Reciever added.");
      },
      error: (err) => {
        this.snackbarService.show(3000, err.error.message, 'error');
        this.snackbarService.showErrorSnackbar(err.error.message);
      },
    });;
  }
  refreshUserRecievers() {
    this.getRecievers().subscribe((res) => this.userSRecievers = res);
  }
}
