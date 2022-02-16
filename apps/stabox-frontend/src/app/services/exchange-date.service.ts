import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, exchangeDateInterface } from '@stabox/stabox-lib';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ExchangeDateService {
  localeExchangeDates: exchangeDateInterface[] = [];
  oldExchangeDates: exchangeDateInterface[] = [];
  constructor(private userService: UserService, private http: HttpClient) {
    this.getExchangeDates();
  }

  localeAddExchangeDate() {
    const newEX: exchangeDateInterface = {
      id: 0,
      userId: this.userService.user.id,
      startDate: new Date(Date.now()).toISOString(),
      endDate: new Date(Date.now()).toISOString(),
    };
    this.localeExchangeDates.push(newEX);
    console.log(this.localeExchangeDates);
  }

  getExchangeDates() {
    console.log('getting exchangeDates');
    this.http
      .get<exchangeDateInterface[]>(environment.apiURL + '/EXdate')
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDates refreshed');
          this.localeExchangeDates = res;
          console.log(this.localeExchangeDates);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }
  save(exDate: exchangeDateInterface) {
    if (exDate.id === 0) {
      this.create(exDate);
    }
    console.log('saving exchangeDate ' + exDate.id);
    this.http
      .patch<exchangeDateInterface>(environment.apiURL + '/EXdate', {
        ...exDate,
      })
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDates refreshed');
          console.log(this.localeExchangeDates);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }

  private create(exDate: exchangeDateInterface) {
    console.log('creating exchangeDate ' + exDate.id);
    this.http
      .put<exchangeDateInterface>(environment.apiURL + '/EXdate', {
        ...exDate,
      })
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDate' + exDate.id + ' created');
          console.log(this.localeExchangeDates);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }

  delete(id: number) {
    const deleteEX: exchangeDateInterface = this.localeExchangeDates[id];
    console.log('deleting exchangeDate ' + deleteEX.id);
    const headers = {};
    this.http
      .request('delete', environment.apiURL + '/EXdate', {
        headers,
        body: { id: deleteEX.id },
      })
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDate ' + id + ' deleted');
          console.log(this.localeExchangeDates);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }
}
