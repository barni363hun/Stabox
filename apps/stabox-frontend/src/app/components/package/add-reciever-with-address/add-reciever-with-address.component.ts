import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecieverService } from '../../../services/reciever.service';

@Component({
  selector: 'stabox-add-reciever-with-address',
  templateUrl: './add-reciever-with-address.component.html',
  styleUrls: ['./add-reciever-with-address.component.scss'],
})
export class AddRecieverWithAddressComponent implements OnInit {
  reciever: recieverWithAddress = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    zipCode: 0,
    cityName: '',
    street: '',
    houseNumber: 0,
  };

  constructor(
    private http: HttpClient,
    private recieverService: RecieverService
  ) {}

  ngOnInit(): void {}

  addToDB() {
    console.log(this.reciever);

    if (this.checkInputs()) {
      this.recieverService.addReciever(this.reciever);
    }
  }

  checkInputs(): boolean {
    // if (!this.reciever.cityName.trim()) return false;
    // if (!this.reciever.houseNumber && typeof this.reciever.houseNumber == 'number') return false;
    // if (!this.reciever.region&& typeof this.reciever.region == 'number') return false;
    // if (!this.reciever.street.trim()) return false;
    // if (!this.reciever.zipCode && typeof this.reciever.zipCode == 'number') return false;
    // if (!this.reciever.firstName.trim()) return false;
    // if (!this.reciever.lastName.trim()) return false;
    // if (!this.reciever.phoneNumber.trim()) return false;
    // if (!this.reciever.email.trim()) return false;

    return true;
  }
}

interface recieverWithAddress {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  zipCode: number;
  cityName: string;
  street: string;
  houseNumber: number;
}
