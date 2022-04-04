import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recieverWithAddress } from '@stabox/stabox-lib';
import { SnackbarService, ThemeService, RecieverService } from '../../../../services';

@Component({
  selector: 'stabox-add-reciever-with-address',
  templateUrl: './add-reciever-with-address.component.html',
  styleUrls: ['./add-reciever-with-address.component.scss'],
})
export class AddRecieverWithAddressComponent implements OnInit {
  reciever: recieverWithAddress = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'Hungary',
    zipCode: 0,
    cityName: '',
    street: '',
    houseNumber: 0,
  };

  @Output() doneEvent = new EventEmitter();

  constructor(
    private http: HttpClient,
    private recieverService: RecieverService,
    private snackbarService: SnackbarService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}

  done() {
    this.doneEvent.emit();
  }

  async addToDB() {
    const { phoneNumber, ...checkReceiver } = this.reciever;
    if (
      this.snackbarService.checkAllValueOfAnObject(checkReceiver)
    ) {
      if (!this.snackbarService.validateEmail(this.reciever.email)){
        this.snackbarService.showErrorSnackbar('email field must contain an email')
      }
      else if (!this.snackbarService.validatePhoneNumber(this.reciever.phoneNumber)) {
        this.snackbarService.showErrorSnackbar('Phone number field must contain a phone number')
      }
      else {
        await this.recieverService.addReciever(this.reciever);
        this.recieverService.refreshUserRecievers();
        this.doneEvent.emit();
      }
    }
  }
}
