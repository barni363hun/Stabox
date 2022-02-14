import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {
  @Input() package: packageInterface = {
    address: {
      city: "city",
      region: "region",
      street: "street",
      zipCode: 1111,
      houseNumber: 1
    },
    size: "size",
    weight: "sok g",
    fragile: true
  }
  isAvailable: boolean = false

  constructor() { }

  ngOnInit(): void {

  }




}

interface packageInterface {
  address: addressInterface,
  size: string,
  weight: string,
  fragile: boolean
}
interface addressInterface {
  region: string
  zipCode: number,
  city: string,
  street: string,
  houseNumber: number

}
