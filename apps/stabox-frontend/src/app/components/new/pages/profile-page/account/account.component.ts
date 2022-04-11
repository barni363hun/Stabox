import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { SnackbarService, UserService } from '../../../../../services';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'stabox-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  mobileWidth: string = '100%';
  mobileHeight: string = '85%';
  desktopWidth: string = '75%';
  desktopHeight: string = '85%';

  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.userService.refreshUserData();
  }

  openSnackBar() {
    this.snackbarService.show(3000, 'Success.', 'success');
  }

  openApplyAsCourierDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: this.desktopWidth,
      height: this.desktopHeight,
      data: {
        title: 'Would you like to apply as a courier?',
        showUnderline: true,
        showVehicles: false,
        description: null,
        confirmButtonText: 'Apply',
        cancelButtonText: 'Cancel',
      },
    });

    const smallDialogSubscription = this.isExtraSmall.subscribe((size) => {
      if (size.matches) {
        dialogRef.updateSize(this.mobileWidth, this.mobileHeight);
      } else {
        dialogRef.updateSize(this.desktopWidth, this.desktopHeight);
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      smallDialogSubscription.unsubscribe();
      if (result) {
        this.userService.beShipper();
      }
    });
  }

  openCourierVehiclesDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: this.desktopWidth,
      height: this.desktopHeight,
      data: {
        title: 'Your vehicles',
        showUnderline: true,
        showVehicles: true,
        description: null,
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel',
      },
    });

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
