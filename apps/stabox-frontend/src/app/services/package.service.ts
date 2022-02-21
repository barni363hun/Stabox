import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }


  getMypackages():Observable<any> {
    return this.http.get(environment.apiURL + "/package/withaddress")
  }

  addPackage(_package:packageInterface){
    this.http.put(environment.apiURL+'/package/add',_package).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }


  
}
interface packageInterface {
  name:string
  size: string,
  weight: string,
  fragile: boolean,
  recieverId:number,
  fromAddressId:number
}
