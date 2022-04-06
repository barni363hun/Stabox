import { Component, OnInit } from '@angular/core';
import { AddressService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  constructor(public addressService: AddressService) { }

  ngOnInit(): void {
  }

}
