import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, addressInterface } from '@stabox/stabox-lib';
import { Observable } from 'rxjs';
import { SnackbarService, UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addresses: addressInterface[] = [];
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
    this.getAddresses();
  }

  getAddressById(num: number): addressInterface {
    const add = this.addresses.find((a) => a.id === num);
    if (add) {
      return add;
    }
    //TODO error
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
    console.log(this.addresses);
  }

  getAddresses() {
    console.log('getting addresses');
    this.http
      .get<addressInterface[]>(environment.apiURL + '/address')
      .subscribe({
        next: (res) => {
          cSuccess('addresses refreshed');
          this.addresses = res;
          console.log(this.addresses);
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.showErrorSnackbar(this.formatMessage(err.error.message));
        },
      });
  }

  save(address: addressInterface) {
    console.log(address);
    address.zipCode = Number(address.zipCode);

    if (address.id === 0) {
      this.create(address);
    } else {
      console.log('saving address ' + address.id);
      this.http
        .patch<addressInterface>(environment.apiURL + '/address', {
          ...address,
        })
        .subscribe({
          next: (res) => {
            cSuccess('address saved');
            this.snackbarService.showSuccessSnackbar('Address saved successfully.')
            console.log(this.addresses);
            this.getAddresses();
          },
          error: (err) => {
            cError(err.error.message);
            this.snackbarService.showErrorSnackbar(this.formatMessage(err.error.message));
          },
        });
    }
  }

  private create(exDate: addressInterface) {
    console.log('creating address ' + exDate.id);
    this.http
      .put<addressInterface>(environment.apiURL + '/address', {
        ...exDate,
      })
      .subscribe({
        next: (res) => {
          cSuccess('address' + exDate.id + ' created');
          console.log(this.addresses);
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.showErrorSnackbar(this.formatMessage(err.error.message));
          this.getAddresses();
        },
      });
  }

  delete(id: number) {
    const deleteEX: addressInterface = this.addresses[id];
    console.log('deleting address ' + deleteEX.id);
    const headers = {};
    this.http
      .request('delete', environment.apiURL + '/address', {
        headers,
        body: { id: deleteEX.id },
      })
      .subscribe({
        next: (res) => {
          cSuccess('address ' + id + ' deleted');
          console.log(this.addresses);
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.showErrorSnackbar(this.formatMessage(err.error.message));
          this.getAddresses();
        },
      });
  }

  private formatMessage(message: string) {
    let messages: string[] = message.toString().split(',');
    let errorMessage: string = '';
    for (let index = 0; index < messages.length; index++) {
      let message = messages[index];
      const i = message.search(/[A-Z]/);
      if (i != -1) {
        message = message.replace(/[A-Z]/, ` ${message[i].toLowerCase()}`);
      }
      message = message.replace(message[0], message[0].toUpperCase());
      errorMessage += message + '. ';
    }
    return errorMessage;
  }
}
