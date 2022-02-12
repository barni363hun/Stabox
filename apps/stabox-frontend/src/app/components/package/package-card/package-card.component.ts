import { Component, Input, OnInit } from '@angular/core';
import { packageInterface } from 'libs/stabox-lib/src/index'
@Component({
  selector: 'stabox-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {
  @Input() package!: packageInterface

  constructor() { }

  ngOnInit(): void {

  }




}



