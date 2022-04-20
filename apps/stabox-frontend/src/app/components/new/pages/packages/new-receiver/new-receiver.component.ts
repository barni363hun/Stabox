import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { recieverWithAddress } from '@stabox/stabox-lib';
import { RecieverService, SnackbarService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.scss']
})
export class NewReceiverComponent implements OnInit {
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public snackbarService: SnackbarService,
    public recieverService: RecieverService,
    private dialogRef: MatDialogRef<NewReceiverComponent>
  ) { }

  ngOnInit(): void {
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
        this.dialogRef.close();
      }
    }
  }
}
