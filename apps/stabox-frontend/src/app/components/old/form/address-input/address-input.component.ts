import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addressInterface } from '@stabox/stabox-lib';
import { ThemeService } from '../../../../services';
@Component({
  selector: 'stabox-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss'],
})
export class AddressInputComponent implements OnInit {
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

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  save() {
    //console.log(this.myAddress);
    this.saveAddressEvent.emit(this.myAddress);
  }

  placeChangedCallback(place: any) {
    //console.log('change');
    place.address_components.forEach((add: any) => {
      add.types.forEach((addType: any) => {
        // console.log(addType);
        // console.log(add);
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
