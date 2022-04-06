import { Component, OnInit } from '@angular/core';
import {
  AddressService,
  ExchangeDateService,
} from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  constructor(
    public exchangeDateService: ExchangeDateService,
    public addressService: AddressService
  ) {}

  ngOnInit(): void {}
}
