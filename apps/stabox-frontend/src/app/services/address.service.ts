import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, addressInterface, cLog } from '@stabox/stabox-lib';
import { Observable } from 'rxjs';
import { ExchangeDateService, SnackbarService, UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addresses: addressInterface[] = [];
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private exchangeDateService: ExchangeDateService,
    private snackbarService: SnackbarService
  ) {
    this.getAddresses();
  }

  getAddressById(num: number): addressInterface {
    const add = this.addresses.find((a) => a.id === num);
    if (add) {
      return add;
    }
    const newADR: addressInterface = {
      id: 0,
      userId: this.userService.user.id,
      name: '',
      country: '',
      zipCode: 0,
      cityName: '',
      street: '',
      houseNumber: '',
    };
    return newADR;
  }

  getMyAddresses(): Observable<any> {
    return this.http.get(environment.apiURL + '/address');
  }

  localeAddAddress() {
    const newADR: addressInterface = {
      id: 0,
      userId: this.userService.user.id,
      name: '',
      country: '',
      zipCode: 0,
      cityName: '',
      street: '',
      houseNumber: '',
    };
    this.addresses.push(newADR);
  }

  getAddresses() {
    cLog('getting addresses');
    this.http
      .get<addressInterface[]>(environment.apiURL + '/address')
      .subscribe({
        next: (res) => {
          this.addresses = res;
          cSuccess('addresses refreshed');
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }

  save(address: addressInterface) {
    address.zipCode = Number(address.zipCode);
    if (address.id === 0) {
      this.create(address);
    } else {
      cLog('saving address ' + address.id);
      this.http
        .patch<addressInterface>(environment.apiURL + '/address', {
          ...address,
        })
        .subscribe({
          next: (res) => {
            cSuccess('address saved');
            this.snackbarService.show(3000,'Address saved.', 'success');
            this.snackbarService.showSuccessSnackbar('Address saved.');
            this.getAddresses();
          },
          error: (err) => {
            cError(err.error.message);
            this.snackbarService.show(3000, err.error.message, 'error');
            this.snackbarService.showErrorSnackbar(err.error.message);
          },
        });
    }
  }

  private create(exDate: addressInterface) {
    cLog('creating address ' + exDate.name);
    this.http
      .put<addressInterface>(environment.apiURL + '/address', {
        ...exDate,
      })
      .subscribe({
        next: (res) => {
          cSuccess('address ' + exDate.id + ' created');
          this.snackbarService.show(3000, 'Address created.', 'success');
          this.snackbarService.showSuccessSnackbar('Address created.');
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.show(3000, err.error.message, 'error');
          this.snackbarService.showErrorSnackbar(err.error.message);
        },
      });
  }

  delete(id: number) {
    const deleteEX: addressInterface = this.addresses[id];
    cLog('deleting address ' + deleteEX.id);
    const headers = {};
    this.http
      .request('delete', environment.apiURL + '/address', {
        headers,
        body: { id: deleteEX.id },
      })
      .subscribe({
        next: (res) => {
          cSuccess('address ' + id + ' deleted');
          this.exchangeDateService.getExchangeDates();
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
          this.exchangeDateService.getExchangeDates();
          this.getAddresses();
        },
      });
  }
}
