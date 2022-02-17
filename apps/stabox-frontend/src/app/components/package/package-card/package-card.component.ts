import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})

export class PackageCardComponent implements OnInit {
  @Input() package!: any;
  // packageInterface
  //   = {
  //   address: {
  //     city: "city",
  //     region: "region",
  //     street: "street",
  //     zipCode: 1111,
  //     houseNumber: 1
  //   },
  //   size: "size",
  //   weight: "sok g",
  //   fragile: true
  // }
  isAvailable: boolean = false

  constructor() { }

  ngOnInit(): void {

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
