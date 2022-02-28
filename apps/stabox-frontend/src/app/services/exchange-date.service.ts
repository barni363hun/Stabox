import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, exchangeDateInterface } from '@stabox/stabox-lib';
import { Observable } from 'rxjs';
import { UserService } from '.';
import { environment } from '../../environments/environment';
import { SecondCardComponent } from '../components/pages/mainpage/second-card/second-card.component';

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
      startDate: '',
      endDate: '',
      addressId: 0,
    };
    this.exchangeDates.push(newEX);
    console.log(this.exchangeDates);
  }
  selectChange(e: any, EXindex: number) {
    const myEX: exchangeDateInterface = this.exchangeDates[EXindex];
    if (myEX) {
      myEX.addressId = Number(e.target.value);
    }
    console.log(myEX);
  }

  getExchangeDates() {
    console.log('getting exchangeDates');
    this.http
      .get<exchangeDateInterface[]>(environment.apiURL + '/EXdate')
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDates refreshed');
          this.exchangeDates = res.map((exDate) => {
            return {
              startDate: this.toDateTimeLocal(new Date(exDate.startDate)),
              endDate: this.toDateTimeLocal(new Date(exDate.endDate)),
              id: exDate.id,
              userId: exDate.userId,
              addressId: exDate.addressId,
            };
          });
          console.log(this.exchangeDates);
        },
        error: (err) => {
          cError(err.error.message);
          console.log(err);
        },
      });
  }

  toDateTimeLocal(d: Date): string {
    d.setHours(d.getHours() + 1);
    const dformat = d.toISOString().slice(0, 16);
    //   [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') +
    //   ' ' +
    //   [d.getHours(), d.getMinutes()].join(':');
    return dformat;
  }

  save(exDate: exchangeDateInterface) {
    console.log(exDate);
    if (
      new Date(exDate.startDate).getTime() > Date.now() &&
      new Date(exDate.startDate).getTime() > Date.now()
    ) {
      if (
        new Date(exDate.startDate).getTime() <
        new Date(exDate.endDate).getTime()
      ) {
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
                cError(err.error.message);
              },
            });
        }
      } else {
        cError('endDate must be later than startDate');
      }
    } else {
      cError('both dates must be later than now');
    }
  }

  private create(exDate: exchangeDateInterface) {
    // TODO only for users with USER role
    console.log(exDate);

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
          cError(err.error.message);
          console.log(err);
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
          this.getExchangeDates();
          cError(err.error.message);
        },
      });
  }
  getExchangeDateByPackageId(id: number): Observable<any> {
    return this.http.get(`${environment.apiURL}/EXdate/package/${id}`);
  }
}
