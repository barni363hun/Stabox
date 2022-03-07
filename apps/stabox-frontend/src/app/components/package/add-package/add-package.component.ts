import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';
import {
  AddressService,
  PackageService,
  RecieverService,
  ThemeService,
} from '../../../services';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
})
export class AddPackageComponent implements OnInit {
  package: packageInterface = {
    fragile: true,
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

  @Output() doneEvent = new EventEmitter();
  @Output() newRecieverEvent = new EventEmitter<string>();

  constructor(
    private packageService: PackageService,
    private addressService: AddressService,
    public recieverService: RecieverService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    //get user's addresses
    this.addressService.getMyAddresses().subscribe({
      next: (res: any) => {
        this.addresses = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    this.recieverService.refreshUserRecievers();
  }

  addReciever() {
    this.newRecieverEvent.emit();
  }

  done() {
    this.doneEvent.emit();
  }

  addPackage() {
    console.log('addpackage()');
    if (this.package.name.trim()) {
      this.package.size = this.sizeX + 'x' + this.sizeY + 'x' + this.sizeZ;
      this.package.weight = this.myWeight + this.selectedWeight;
      console.log(this.package);
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
