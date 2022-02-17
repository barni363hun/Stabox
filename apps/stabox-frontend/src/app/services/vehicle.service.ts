import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cSuccess, vehicleInterface } from '@stabox/stabox-lib';
import { UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  vehicles: vehicleInterface[] = [];
  constructor(private userService: UserService, private http: HttpClient) {
    this.getVehicles();
  }

  localeAddVehicle() {
    const newVehicle: vehicleInterface = {
      id: 0,
      userId: this.userService.user.id,
      name: 'vehicle name',
    };
    this.vehicles.push(newVehicle);
    console.log(this.vehicles);
  }

  getVehicles() {
    console.log('getting vehicles');
    this.http
      .get<vehicleInterface[]>(environment.apiURL + '/vehicle')
      .subscribe({
        next: (res) => {
          cSuccess('vehicles refreshed');
          this.vehicles = res;
          console.log(this.vehicles);
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }
  save(vehicle: vehicleInterface) {
    if (vehicle.id === 0) {
      this.create(vehicle);
    } else {
      console.log('saving vehicle ' + vehicle.id);
      this.http
        .patch<vehicleInterface>(environment.apiURL + '/vehicle', {
          ...vehicle,
        })
        .subscribe({
          next: (res) => {
            cSuccess('vehicle saved');
            console.log(this.vehicles);
            this.getVehicles();
          },
          error: (err) => {
            cError(err.error.message);
          },
        });
    }
  }

  private create(vehicle: vehicleInterface) {
    console.log('creating vehicle ' + vehicle.id);
    this.http
      .put<vehicleInterface>(environment.apiURL + '/vehicle', {
        ...vehicle,
      })
      .subscribe({
        next: (res) => {
          cSuccess('vehicle' + vehicle.id + ' created');
          console.log(this.vehicles);
          this.getVehicles();
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }

  delete(id: number) {
    const deleteVehicle: vehicleInterface = this.vehicles[id];
    console.log('deleting vehicle ' + deleteVehicle.id);
    const headers = {};
    this.http
      .request('delete', environment.apiURL + '/vehicle', {
        headers,
        body: { id: deleteVehicle.id },
      })
      .subscribe({
        next: (res) => {
          cSuccess('vehicle ' + id + ' deleted');
          console.log(this.vehicles);
          this.getVehicles();
        },
        error: (err) => {
          cError(err.error.message);
        },
      });
  }
}
