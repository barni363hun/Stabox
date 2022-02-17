import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'stabox-my-packages-page',
  templateUrl: './my-packages-page.component.html',
  styleUrls: ['./my-packages-page.component.scss'],
})
export class MyPackagesPageComponent implements OnInit {
  packages: packageInterface[] =[]
  // = [
  //   {
  //     fragile: false,
  //     fromAddress: {
  //       city: 'asdasd',
  //       houseNumber: 0,
  //       region: 'asd',
  //       street: '423',
  //       zipCode: 0,
  //     },
  //     size: 'kléklélk',
  //     weight: 'kléklé',
  //     price: 100,
  //   },
  //   {
  //     fragile: false,
  //     fromAddress: {
  //       city: 'dgg',
  //       houseNumber: 0,
  //       region: 'asd',
  //       street: 'jhg',
  //       zipCode: 0,
  //     },
  //     size: 'zui',
  //     weight: 'oiu',
  //     price: 100,
  //   },
  //   {
  //     fragile: false,
  //     fromAddress: {
  //       city: ',m.-.m,-',
  //       houseNumber: 0,
  //       region: 'asd',
  //       street: 'm,.-m,.-',
  //       zipCode: 0,
  //     },
  //     size: 'm,.-,.m',
  //     weight: ',-.,m-',
  //     price: 200,
  //   },
  // ];

  _filterMyPackages: boolean = false;
  _filterAllPackages: boolean = false;
  _filterToDeliver: boolean = false;

  constructor( private packageService:PackageService) {}

  ngOnInit(): void {
    this.packageService.getMypackages().subscribe({
      next:(res)=>{
        this.packages = res;
        console.log(res);
      }
    });
    console.log(this.packages);
    
  }

  filterAllPackages() {
    this._filterAllPackages = true;
    this._filterMyPackages = false;
    this._filterToDeliver = false;
  }

  filterMyPackages() {
    this._filterAllPackages = false;
    this._filterMyPackages = true;
    this._filterToDeliver = false;
  }

  filterToDeliver() {
    this._filterAllPackages = false;
    this._filterMyPackages = false;
    this._filterToDeliver = true;
  }
}

interface packageInterface {
  fromAddress: addressInterface;
  size: string;
  weight: string;
  fragile: boolean;
  price: number;
}
interface addressInterface {
  region: string;
  zipCode: number;
  city: string;
  street: string;
  houseNumber: number;
}
