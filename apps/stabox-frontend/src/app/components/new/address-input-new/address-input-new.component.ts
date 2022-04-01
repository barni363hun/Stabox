import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';

@Component({
  selector: 'stabox-address-input-new',
  templateUrl: './address-input-new.component.html',
  styleUrls: ['./address-input-new.component.scss'],
})
export class AddressInputNewComponent implements OnInit {
  search: Boolean = false;

  @Input() myAddress: addressInterface = {
    id: 0,
    userId: '',
    name: '',
    country: '',
    zipCode: 0,
    cityName: '',
    street: '',
    houseNumber: '',
  };
  @Input() isReciever = false;
  @Output() saveAddressEvent = new EventEmitter<addressInterface>();

  constructor() {}

  ngOnInit(): void {}

  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
    }
  }

  save() {
    this.saveAddressEvent.emit(this.myAddress);
  }

  placeChangedCallback(place: any) {
    place.address_components.forEach((add: any) => {
      add.types.forEach((addType: any) => {
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
