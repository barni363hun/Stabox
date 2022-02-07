import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-my-packages-page',
  templateUrl: './my-packages-page.component.html',
  styleUrls: ['./my-packages-page.component.scss']
})
export class MyPackagesPageComponent implements OnInit {

  _filterMyPackages: boolean = false;
  _filterAllPackages: boolean = false;
  _filterToDeliver: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
