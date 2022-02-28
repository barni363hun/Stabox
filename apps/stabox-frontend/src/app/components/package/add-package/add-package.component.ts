import { Component, OnInit } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';
import { AddressService, PackageService, RecieverService } from '../../../services';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
})
export class AddPackageComponent implements OnInit {
  package: packageInterface = {
    fragile: false,
    size: '',
    weight: '',
    name: '',
  };

  selectedReciever = 0;
  selectedAddress = 0;

  addresses: addressInterface[] = [];
  recievers: recieverInterface[] = [];

  constructor(
    private packageService: PackageService,
    private addressService: AddressService,
    private recieverService: RecieverService
  ) {}

  ngOnInit(): void {
    //get user's addresses
    this.addressService.getMyAddresses().subscribe({
      next: (res:any) => {
        this.addresses = res;
        console.log(res);
      },
      error: (err:any) => {
        console.log(err);
      },
    });

    //get user's recievers
    this.recieverService.getRecievers().subscribe({
      next: (res) => {
        this.recievers = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addPackage() {
    console.log('addpackage()');
    if (this.checkInputs()) {
      console.log('inputs checked');
      this.packageService.addPackage({
        ...this.package,
        recieverId: Number(this.selectedReciever),
        fromAddressId: Number(this.selectedAddress),
      });
    }
  }

  //TODO? normális hibaüzenetek az input mezőkre
  checkInputs(): boolean {
    if (!this.package.name.trim()) return false;
    if (!this.package.size.trim()) return false;
    if (!this.package.weight.trim()) return false;

    return true;
  }
}
interface packageInterface {
  name: string;
  size: string;
  weight: string;
  fragile: boolean;
}
interface recieverInterface {
  addressId: number;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
}
