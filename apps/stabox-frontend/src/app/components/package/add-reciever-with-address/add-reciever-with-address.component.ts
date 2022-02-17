import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'apps/stabox-frontend/src/environments/environment';

@Component({
  selector: 'stabox-add-reciever-with-address',
  templateUrl: './add-reciever-with-address.component.html',
  styleUrls: ['./add-reciever-with-address.component.scss']
})
export class AddRecieverWithAddressComponent implements OnInit {

  reciever: recieverWithAddress = {
    firstName: 'string',
    lastName: 'string',
    email: 'string@gmail.com',
    phoneNumber: '+36302886298',
    region: 1,
    zipCode: 1,
    cityName: 'string',
    street: 'string',
    houseNumber: 1
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addToDB() {
    if (this.checkInputs()) {
      this.http.put(environment.apiURL + '/reciever', this.reciever).subscribe({
        next:(res)=>console.log(res),
        error:(err)=>console.log(err)
      })
    }
  }

  checkInputs(): boolean {
    if (!this.reciever.cityName.trim()) return false;
    if (!this.reciever.houseNumber && typeof this.reciever.houseNumber == 'number') return false;
    if (!this.reciever.region&& typeof this.reciever.region == 'number') return false;
    if (!this.reciever.street.trim()) return false;
    if (!this.reciever.zipCode && typeof this.reciever.zipCode == 'number') return false;
    if (!this.reciever.firstName.trim()) return false;
    if (!this.reciever.lastName.trim()) return false;
    if (!this.reciever.phoneNumber.trim()) return false;
    if (!this.reciever.email.trim()) return false;

    return true
  }
}



interface recieverWithAddress {

  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  region: number,
  zipCode: number,
  cityName: string,
  street: string,
  houseNumber: number
}
