import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, exchangeDateInterface } from '@stabox/stabox-lib';
import { Observable } from 'rxjs';
import { UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeDateService {
  exchangeDates: exchangeDateInterface[] = [];
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
    this.exchangeDates.push(newEX);
    console.log(this.exchangeDates);
  }

  getExchangeDates() {
    console.log('getting exchangeDates');
    this.http
      .get<exchangeDateInterface[]>(environment.apiURL + '/EXdate')
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDates refreshed');
          this.exchangeDates = res;
          console.log(this.exchangeDates);
        },
        error: (err) => {
          cError(err.error.message); console.log(err)
        },
      });
  }
  save(exDate: exchangeDateInterface) {
    if (exDate.id === 0) {
      this.create(exDate);
    } else {
      console.log('saving exchangeDate ' + exDate.id);
      this.http
        .patch<exchangeDateInterface>(environment.apiURL + '/EXdate', {
          ...exDate,
        })
        .subscribe({
          next: (res) => {
            cSuccess('exchangeDates saved');
            console.log(this.exchangeDates);
            this.getExchangeDates();
          },
          error: (err) => {
            cError(err.error.message); console.log(err)
          },
        });
    }
  }

  private create(exDate: exchangeDateInterface) {
    // TODO only for users with USER role

    console.log('creating exchangeDate ' + exDate.id);
    this.http
      .put<exchangeDateInterface>(environment.apiURL + '/EXdate', {
        ...exDate,
      })
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDate' + exDate.id + ' created');
          console.log(this.exchangeDates);
          this.getExchangeDates();
        },
        error: (err) => {
          cError(err.error.message); console.log(err)
        },
      });
  }

  delete(id: number) {
    const deleteEX: exchangeDateInterface = this.exchangeDates[id];
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
          console.log(this.exchangeDates);
          this.getExchangeDates();
        },
        error: (err) => {
          cError(err.error.message); console.log(err)
        },
      });
  }
  getExchangeDateByPackageId(id: number): Observable<any> {
    return this.http.get(`${environment.apiURL}/EXdate/package/${id}`)
  }
}
