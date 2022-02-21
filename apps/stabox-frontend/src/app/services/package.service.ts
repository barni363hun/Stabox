import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
 public packages=[]

  finishPackage(id: any) {
    return this.http.post(environment.apiURL + '/package/shipped', { id: id }).subscribe(
      {
        next:(res)=>console.log(res),
        error:(err)=>console.log(err),        
      }
    )
  }
  postPackage(id: any,vehicleId:number, postDate: any) {
    this.http.patch(environment.apiURL + '/package',
     { 
       id,
       vehicleId,
       postDate
       }).subscribe(
      {
        next:(res)=>console.log(res),
        error:(err)=>console.log(err),        
      }
    )
  }

  constructor(private http: HttpClient) {
     this.getMypackages().subscribe((res)=>this.packages=res)
   }


  getMypackages(): Observable<any> {
    return this.http.get(environment.apiURL + "/package/withaddress")
  }

  addPackage(_package: packageInterface) {
    this.http.put(environment.apiURL + '/package/add', _package).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }
  acceptPackage(id: number | string) {
    //todo accept package
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
