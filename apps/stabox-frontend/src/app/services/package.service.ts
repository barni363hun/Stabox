import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  public packages = []
  private route: '/package/withaddress' | '/package/acceptable' = '/package/withaddress';

  finishPackage(id: any) {
    return this.http.post(environment.apiURL + '/package/shipped', { id: id }).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.update()
        },
        error: (err) => console.log(err),
      }
    )
  }
  postPackage(id: any, vehicleId: number, postDate: any) {
    this.http.patch(environment.apiURL + '/package',
      {
        id,
        vehicleId,
        postDate
      }).subscribe(
        {
          next: (res) => {
            console.log(res);
            this.update()
          },
          error: (err) => console.log(err),
        }
      )
  }

  constructor(private http: HttpClient) {
    this.update()
  }


  getMypackages(): Observable<any> {
    return this.http.get(environment.apiURL + this.route)
  }


  addPackage(_package: packageInterface) {
    this.http.put(environment.apiURL + '/package/add', _package).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => console.log(err)
    })
  }
  acceptPackage(id: number | string) {
    //todo accept package
  }
  update(route: typeof this.route = this.route) {
    this.route = route
    this.getMypackages().subscribe((res) => {
      console.log(this.route)
      console.log(res)
      this.packages = res
    })
  }

}
interface packageInterface {
  name: string
  size: string,
  weight: string,
  fragile: boolean,
  recieverId: number,
  fromAddressId: number
}
