import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {

  package: packageInterface = {
    fragile: false,
    fromAddress: {
      city: '',
      houseNumber: 0,
      region: 'asd',
      street: '',
      zipCode: 0
    },
    size: '',
    weight: '',
    name:'',
  }

  constructor(private packageService:PackageService) { }

  ngOnInit(): void {
  }

  asd() {
    console.log(this.package)
    console.log(this.checkInputs())

  }

  addPackage() {
    console.log('asdsad')
    if (this.checkInputs()) {
      this.packageService.addPackage({...this.package})
    }
  }

  //TODO? normális hibaüzenetek az input mezőkre
  checkInputs(): boolean {
    if (!this.package.fromAddress.city.trim()) return false;
    if (!this.package.fromAddress.houseNumber && typeof this.package.fromAddress.houseNumber == 'number') return false;
    if (!this.package.fromAddress.region.trim()) return false;
    if (!this.package.fromAddress.street.trim()) return false;
    if (!this.package.fromAddress.zipCode && typeof this.package.fromAddress.zipCode == 'number') return false;
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
