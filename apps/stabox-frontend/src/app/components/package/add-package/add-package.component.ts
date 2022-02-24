import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
})
export class AddPackageComponent implements OnInit {
  myAddress: addressInterface = {
    id: 0,
    userId: '',
    name: '',
    country: '',
    zipCode: 0,
    cityName: '',
    street: '',
    houseNumber: '',
  };
  @Input() isReciever = true;
  @Output() saveAddressEvent = new EventEmitter<addressInterface>();
  constructor() {}

  ngOnInit(): void {}

  save() {
    this.saveAddressEvent.emit(this.myAddress);
  }

  placeChangedCallback(place: any) {
    console.log('change');
    const addressFrom = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      sublocality_level_1: 'sublocality_level_1',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name',
    };
    place.address_components.forEach((add: any) => {
      add.types.forEach((addType: any) => {
        console.log(addType);

        console.log(add);

        if (addType == 'street_number')
          this.myAddress.houseNumber = add.short_name;
        if (addType == 'route') this.myAddress.street = add.long_name;
        if (addType == 'locality' || addType == 'sublocality_level_1')
          this.myAddress.cityName = add.long_name;
        if (addType == 'postal_code') this.myAddress.zipCode = add.long_name;
        if (addType == 'country') this.myAddress.country = add.long_name;
      });
    });
  }
}
