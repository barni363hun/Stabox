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

  addPackage(_package:any){
    this.http.put(environment.apiURL+'/package',{..._package,recieverId:1}).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
      
    })
  }
}
