import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  public packages: any[] = []
  private route: '/package/myPackages' | '/package/acceptable' | '/package/accepted' = '/package/myPackages';

  
  constructor(private http: HttpClient) {
    this.update()
  }

  finishPackage(id: any) {
    this.http.post(environment.apiURL + '/package/shipped', { id: id }).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.packages = this.packages.filter(f => f.id != id)
        },
        error: (err) => console.log(err),
      }
    )
  }
  
  postPackage(id: any, vehicleId: number, postDate: any) {
    this.http.patch(environment.apiURL + '/package',
      { id, vehicleId, postDate }).subscribe(
        {
          next: (res) => {
            console.log(res);
            this.packages = this.packages.filter(f => f.id != id)
          },
          error: (err) => console.log(err),
        }
      )
  }

  async addPackage(_package: any) {
    await firstValueFrom(this.http.put(environment.apiURL + '/package', _package)).catch(err => console.log(err))
    this.update()
  }
  
  update(route: typeof this.route = this.route) {
    this.route = route
    this.getMypackages().subscribe((res) => {
      console.log(this.route)
      this.packages = res
      console.log(this.packages)
    })
  }
  
  getMypackages(): Observable<any> {
    return this.http.get(environment.apiURL + this.route)
  }

}