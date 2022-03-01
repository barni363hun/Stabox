import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';
import {
  AddressService,
  PackageService,
  RecieverService,
} from '../../../services';

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

  sizeX = 0;
  sizeY = 0;
  sizeZ = 0;
  myWeight = 0;
  selectedWeight = 'gramm';

  selectedReciever = 0;
  selectedAddress = 0;

  addresses: addressInterface[] = [];
  recievers: recieverInterface[] = [];

  @Output() doneEvent = new EventEmitter();
  @Output() newRecieverEvent = new EventEmitter<string>();

  constructor(
    private packageService: PackageService,
    private addressService: AddressService,
    private recieverService: RecieverService
  ) {}

  ngOnInit(): void {
    //get user's addresses
    this.addressService.getMyAddresses().subscribe({
      next: (res: any) => {
        this.addresses = res;
        console.log(res);
      },
      error: (err: any) => {
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

  addReciever() {
    this.newRecieverEvent.emit();
  }

  done() {
    this.doneEvent.emit();
  }

  addPackage() {
    console.log('addpackage()');
    if (!this.package.name.trim()) {
      this.package.size = this.sizeX + 'x' + this.sizeY + 'x' + this.sizeZ;
      this.package.weight = this.myWeight + this.selectedWeight;
      this.packageService.addPackage({
        ...this.package,
        recieverId: Number(this.selectedReciever),
        fromAddressId: Number(this.selectedAddress),
      });
    }
    this.done();
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
