import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recieverWithAddress } from '@stabox/stabox-lib';
import { SnackbarService, ThemeService } from '../../../services';
import { RecieverService } from '../../../services/reciever.service';

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
    // console.log("rec:");
    // console.log(this.reciever);
    const { phoneNumber, ...checkReceiver } = this.reciever;
    if (
      this.snackbarService.checkAllValueOfAnObject(checkReceiver)
      ) {
      await this.recieverService.addReciever(this.reciever);
      this.recieverService.refreshUserRecievers();
    }
  }
}
