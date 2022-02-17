import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address-service';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {

  package: any = {
    fragile: false,
    fromAddressId: 1,
    size: '',
    weight: '',
    name:'',
  }
  addresses:any[]=[];

  constructor(private packageService:PackageService, private addressService:AddressService) { }

  ngOnInit(): void {
    this.addressService.getMyAddresses().subscribe({
      next:(res)=>this.addresses=res,
      error:(err)=>this.addresses=err}
    )
  }

  addPackage() {
    console.log('asdsad');

      console.log('amogus');
      this.packageService.addPackage({...this.package});
    
  }

  //TODO? normális hibaüzenetek az input mezőkre
  checkInputs(): boolean {
    if (!this.package.name.trim()) return false;
    if (!this.package.size.trim()) return false;
    if (!this.package.weight.trim()) return false;

    return true
  }
}
interface packageInterface {
  name:string
  fromAddress: addressInterface,
  size: string,
  weight: string,
  fragile: boolean,
}
interface addressInterface {
  
  region: string
  zipCode: number,
  city: string,
  street: string,
  houseNumber: number

}
