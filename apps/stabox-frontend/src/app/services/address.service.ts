import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, addressInterface } from '@stabox/stabox-lib';
import { UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addresses: addressInterface[] = [];
  constructor(private userService: UserService, private http: HttpClient) {
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
      name: 'select',
      region: 0,
      zipCode: 0,
      cityName: 'city name',
      street: 'street name',
      houseNumber: 'house number',
    };
    return newADR;
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
            console.log(this.addresses);
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
          console.log(this.addresses);
          this.getAddresses();
        },
        error: (err) => {
          cError(err.error.message);
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
        },
      });
  }
}
