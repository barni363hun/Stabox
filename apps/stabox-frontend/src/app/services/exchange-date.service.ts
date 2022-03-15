import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cLog, cSuccess, exchangeDateInterface } from '@stabox/stabox-lib';
import { Observable } from 'rxjs';
import { SnackbarService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeDateService {
  exchangeDates: exchangeDateInterface[] = [];
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
    this.getExchangeDates();
  }

  localeAddExchangeDate() {
    const newEX: exchangeDateInterface = {
      id: 0,
      startDate: '',
      endDate: '',
      addressId: 0,
    };
    this.exchangeDates.push(newEX);
    //console.log(this.exchangeDates);
  }
  selectChange(e: any, EXindex: number) {
    const myEX: exchangeDateInterface = this.exchangeDates[EXindex];
    if (myEX) {
      myEX.addressId = Number(e.target.value);
    }
    //console.log(myEX);
  }

  getExchangeDates() {
    cLog('getting exchangeDates');
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
              addressId: exDate.addressId,
            };
          }).sort(e=>e.id==0?-e.id:e.id);
          console.log(this.exchangeDates);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }

  toDateTimeLocal(d: Date): string {
    d.setHours(d.getHours() + 1);
    const dformat = d.toISOString().slice(0, 16);
    return dformat;
  }

  save(exDate: exchangeDateInterface) {
    if (
      new Date(exDate.startDate).getTime() > Date.now() &&
      new Date(exDate.startDate).getTime() > Date.now()
    ) {
      if (
        new Date(exDate.startDate).getTime() <
        new Date(exDate.endDate).getTime()
      ) {
        if (exDate.addressId !== 0) {
          
        
          if (exDate.id === 0) {
            this.create(exDate);
          } else {
            cLog('saving exchangeDate ' + exDate.id);
            this.http
              .patch<exchangeDateInterface>(environment.apiURL + '/EXdate', {
                ...exDate,
              })
              .subscribe({
                next: (res) => {
                  cSuccess('exchangeDates saved');
                  this.snackbarService.showSuccessSnackbar(
                    'Exchange date saved.'
                  );
                  this.getExchangeDates();
                },
                error: (err) => {
                  cError(err.error.message);
                  this.snackbarService.showErrorSnackbar(err.error.message
                  );
                },
              });
          }
        }
        else {
          cError('You need to select an address.');
        this.snackbarService.showErrorSnackbar(
          'You need to select an address.'
        );
        }
      } else {
        cError('endDate must be later than startDate');
        this.snackbarService.showErrorSnackbar(
          'End date must be later then start date.'
        );
      }
    } else {
      cError('both dates must be later than now');
      this.snackbarService.showErrorSnackbar(
        'Both dates must be later than now.'
      );
    }
  }

  // TODO show these options only for users with USER role
  private create(exDate: exchangeDateInterface) {
    // console.log(exDate);
    cLog('creating exchangeDate');
    this.http
      .put<exchangeDateInterface>(environment.apiURL + '/EXdate', {
        ...exDate,
      })
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDate created');
          this.snackbarService.showSuccessSnackbar(
            'Exchange date created.'
          );
          this.getExchangeDates();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.showErrorSnackbar(
            err.error.message
          );
        },
      });
  }

  delete(id: number) {
    const deleteEX: exchangeDateInterface = this.exchangeDates[id];
    cLog('deleting exchangeDate');
    const headers = {};
    this.http
      .request('delete', environment.apiURL + '/EXdate', {
        headers,
        body: { id: deleteEX.id },
      })
      .subscribe({
        next: (res) => {
          cSuccess('exchangeDate deleted');
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
