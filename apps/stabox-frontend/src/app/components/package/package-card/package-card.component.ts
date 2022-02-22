import { Component, Input, OnInit } from '@angular/core';
import { ExchangeDateService, UserService, VehicleService } from '../../../services';
import { PackageService } from '../../../services/package.service';
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})

export class PackageCardComponent implements OnInit {
  @Input() package!: any;
  isAvailable: boolean = false;
  state: 'notShipper' | 'finished' | 'shippable' | 'finishable' = 'finished';
  user: any;

  vehicles: any[] = []
  selectedVehicle:number=0;

  exchangeDates:any[]=[];
  selectedExchangeDate:number=0;

  constructor(
    private userService: UserService,
     private packageService: PackageService,
     private vehicleService:VehicleService,
     private exchangeDateSercice:ExchangeDateService
     ) { }
  
  ngOnInit(): void {
    this.updateState()
    this.vehicles = this.vehicleService.vehicles
    this.exchangeDateSercice.getExchangeDateByPackageId(this.package.userId).subscribe({
      next:(res)=>{
        console.log('exchangeDates')
        console.log(res)
        this.exchangeDates=res},
      error:(err)=>console.log(err),
    })
  }
  selectPostDate() {
    let date = new Date(Date.now()).toISOString();
    if (!this.selectedVehicle){
      console.log('NO vehicle selected')
    }
    else if(!this.selectedExchangeDate){
      console.log('No exchangeDate selected')
    }
    else{
      this.packageService.postPackage(this.package.id, Number(this.selectedVehicle), date);
    }

    this.updateState();
  }
  finishShipping() {
    this.packageService.finishPackage(this.package.id);
    this.updateState();
  }
  updateState() {
    if (!this.userService.user['https://www.stabox.hu/roles'].includes('shipper')) {
      this.state = 'notShipper';
    }
    else if (!this.package.vehicleId) {
      this.state = 'shippable';
    }
    else if (!this.package.shippingDate) {
      this.state = 'finishable';
    }
    else {
      this.state = 'finished';
    }
    // console.log('state: '+this.state)
  }

}

// interface packageInterface {
//   fromAddress: addressInterface,
//   size: string,
//   weight: string,
//   fragile: boolean,
//   price: number
// }
// interface addressInterface {
//   region: string
//   zipCode: number,
//   cityName: string,
//   street: string,
//   houseNumber: number
// }
