import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addressInterface } from '@stabox/stabox-lib';
import { Observable } from 'rxjs';
import {
  AddressService,
  PackageService,
  RecieverService,
  SnackbarService,
} from '../../../../../services';
import { NewReceiverComponent } from '../new-receiver/new-receiver.component';

interface packageInterface {
  name: string;
  size: string;
  weight: string;
  fragile: boolean;
}

@Component({
  selector: 'stabox-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.scss']
})
export class NewPackageComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );
  mobileWidth: string = '100%';
  mobileHeight: string = '85%';
  desktopWidth: string = '75%';
  desktopHeight: string = '85%';

  package: packageInterface = {
    name: '',
    size: '',
    weight: '',
    fragile: true,
  };

  sizeX = 0;
  sizeY = 0;
  sizeZ = 0;
  myWeight = 0;
  selectedWeight = 'g';

  selectedReciever = 0;
  selectedAddress = 0;

  addresses: addressInterface[] = [];

  constructor(
    private packageService: PackageService,
    private addressService: AddressService,
    private snackbarService: SnackbarService,
    public recieverService: RecieverService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewPackageComponent>,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.addressService.getMyAddresses().subscribe({
      next: (res: any) => {
        this.addresses = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    this.recieverService.refreshUserRecievers();
  }

  addPackage() {
    if (
      this.snackbarService.checkInput(this.package.name.trim(), "Please add a nickname to this package!") &&
      this.snackbarService.checkInput(this.sizeX, "Please fill all the data about the size of the package!") &&
      this.snackbarService.checkInput(this.sizeY, "Please fill all the data about the size of the package!") &&
      this.snackbarService.checkInput(this.sizeZ, "Please fill all the data about the size of the package!") &&
      this.snackbarService.checkInput(this.myWeight, "Please fill the data about the weight of the package!") &&
      this.snackbarService.checkInput(this.selectedAddress, "Please select where do you want to send the package from!") &&
      this.snackbarService.checkInput(this.selectedReciever, "Please select where do you want to send your package!")
    ) {
      this.package.size = this.sizeX + 'x' + this.sizeY + 'x' + this.sizeZ;
      this.package.weight = this.myWeight + this.selectedWeight;

      this.packageService.addPackage({
        ...this.package,
        recieverId: Number(this.selectedReciever),
        fromAddressId: Number(this.selectedAddress),
      }).then(succ => {
        if (succ) {
          this.snackbarService.show(3000, `Package '${this.package.name}' added, waiting for courier!`, 'success');
          this.snackbarService.showSuccessSnackbar(this.package.name + " added, waiting for a shipper!");
          this.dialogRef.close();
        }
        else {
          this.snackbarService.show(3000, "You don't have enough stabucks to post this package", 'error');
          this.snackbarService.showErrorSnackbar("You dont have enough stabucks to post this package")
        }
      },
        err => {
          this.snackbarService.show(3000, 'Unexpected server error', 'error');
          this.snackbarService.showErrorSnackbar('Unexpected Server error')
        }
      );

    }
  }

  openNewReceiverDialog() {
    const dialogRef = this.dialog.open(NewReceiverComponent, {
      width: this.desktopWidth,
      height: this.desktopHeight,
      data: {
        title: 'New receiver',
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel',
      },
    })

    const smallDialogSubscription = this.isExtraSmall.subscribe((size) => {
      if (size.matches) {
        dialogRef.updateSize(this.mobileWidth, this.mobileHeight);
      } else {
        dialogRef.updateSize(this.desktopWidth, this.desktopHeight);
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      smallDialogSubscription.unsubscribe();
    });
  }
}
