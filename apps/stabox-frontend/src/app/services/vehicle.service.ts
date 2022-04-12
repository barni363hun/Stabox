import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cError, cLog, cSuccess, vehicleInterface } from '@stabox/stabox-lib';
import { SnackbarService, UserService } from '.';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  vehicles: vehicleInterface[] = [];
  constructor(
    private userService: UserService,
    private snackbarService: SnackbarService,
    private http: HttpClient
  ) {
    this.getVehicles();
  }

  localeAddVehicle() {
    const newVehicle: vehicleInterface = {
      id: 0,
      userId: this.userService.user.id,
      name: '',
    };
    this.vehicles.push(newVehicle);
  }

  getVehicles() {
    cLog('getting vehicles');
    this.http
      .get<vehicleInterface[]>(environment.apiURL + '/vehicle')
      .subscribe({
        next: (res) => {
          this.vehicles = res;
          cSuccess('vehicles refreshed');
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
      cLog('saving vehicle ' + vehicle.id);
      this.http
        .patch<vehicleInterface>(environment.apiURL + '/vehicle', {
          ...vehicle,
        })
        .subscribe({
          next: (res) => {
            cSuccess('vehicle saved');
            this.snackbarService.show(3000,`Vehicle "${vehicle.name}" saved.`,'success');
            this.snackbarService.showSuccessSnackbar(`Vehicle '${vehicle.name}' saved.`);
            this.getVehicles();
          },
          error: (err) => {
            cError(err.error.message);
            this.snackbarService.show(3000, err.error.message, 'error');
            this.snackbarService.showErrorSnackbar(err.error.message);
          },
        });
    }
  }

  private create(vehicle: vehicleInterface) {
    cLog('creating vehicle ' + vehicle.name);
    this.http
      .put<vehicleInterface>(environment.apiURL + '/vehicle', {
        ...vehicle,
      })
      .subscribe({
        next: (res) => {
          cSuccess('vehicle' + vehicle.name + ' created');
          this.snackbarService.show(3000,`Vehicle "${vehicle.name}" added.`, 'success');
          this.snackbarService.showSuccessSnackbar( `Vehicle '${vehicle.name}' added.`);
          this.getVehicles();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.show(3000, err.error.message, 'error');
          this.snackbarService.showErrorSnackbar(err.error.message);
        },
      });
  }

  delete(id: number) {
    const deleteVehicle: vehicleInterface = this.vehicles[id];
    cLog('deleting vehicle ' + deleteVehicle.name);
    const headers = {};
    this.http
      .request('delete', environment.apiURL + '/vehicle', {
        headers,
        body: { id: deleteVehicle.id },
      })
      .subscribe({
        next: (res) => {
          cSuccess('vehicle ' + deleteVehicle.name + ' deleted');
          this.getVehicles();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.show(3000, err.error.message, 'error');
          this.snackbarService.showErrorSnackbar(err.error.message);
        },
      });
  }
}
