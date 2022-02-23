import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
})
export class AddPackageComponent implements OnInit {
  street_number = '';
  address = '';
  city = '';
  country = '';
  region = '';
  constructor() {}

  ngOnInit(): void {}

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

        if (addType == 'street_number') this.street_number = add.short_name;
        if (addType == 'route') this.address = add.long_name;
        if (addType == 'locality' || addType == 'sublocality_level_1')
          this.city = add.long_name;
        if (addType == 'country') this.country = add.long_name;
        if (addType == 'postal_code') this.region = add.long_name;
      });
    });
  }
}
