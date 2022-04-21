import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { cError } from '@stabox/stabox-lib';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  public packages: any[] = []
  public route: '/package/myPackages' | '/package/acceptable' | '/package/accepted' = '/package/myPackages';


  constructor(private http: HttpClient) {
    this.update()
  }

  finishPackage(id: any) {
    this.http.post(environment.apiURL + '/package/shipped', { id: id }).subscribe(
      {
        next: (res) => {
          this.packages = this.packages.filter(f => f.id != id)
        },
        error: (err) => cError(err),
      }
    )
  }

  postPackage(id: any, vehicleId: number, postDate: any) {
    this.http.patch(environment.apiURL + '/package',
      { id, vehicleId, postDate }).subscribe(
        {
          next: (res) => {
            this.packages = this.packages.filter(f => f.id != id)
          },
          error: (err) => cError(err),
        }
      )
  }

  async addPackage(_package: any) {
    let successful: Boolean = false;
    await firstValueFrom(this.http.put(environment.apiURL + '/package', _package)).then(
      () => {
        this.update();
        successful = true
      },
    )
    return successful;
  }

  update(route: typeof this.route = this.route) {
    this.route = route
    this.getMypackages().subscribe((res) => {
      this.packages = res
    })
  }

  getMypackages(): Observable<any> {
    return this.http.get(environment.apiURL + this.route)
  }

}