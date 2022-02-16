import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, addressInterface } from '@stabox/stabox-lib';
import { UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  localeAddresses: addressInterface[] = [];
  constructor(private userService: UserService, private http: HttpClient) {
    this.getAddresses();
  }

  localeAddAddress() {
    const newADR: addressInterface = {
      id: 0,
      userId: this.userService.user.id,
      name: 'address nickname',
      region: 0,
      zipCode: 0,
      cityName: 'city name',
      street: 'street name',
      houseNumber: 'house number',
    };
    this.localeAddresses.push(newADR);
    console.log(this.localeAddresses);
  }

  getAddresses() {
    console.log('getting addresses');
    this.http
      .get<addressInterface[]>(environment.apiURL + '/address')
      .subscribe({
        next: (res) => {
          cSuccess('addresses refreshed');
          this.localeAddresses = res;
          console.log(this.localeAddresses);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }
  save(address: addressInterface) {
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
            console.log(this.localeAddresses);
            this.getAddresses();
          },
          error: (err) => {
            cError(err.error.message);
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
          console.log(this.localeAddresses);
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }

  delete(id: number) {
    const deleteEX: addressInterface = this.localeAddresses[id];
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
          console.log(this.localeAddresses);
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }
}
