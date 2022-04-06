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

  mobileWidth: string = '95%';
  mobileHeight: string = '95%';
  desktopWidth: string = '75%';
  desktopHeight: string = '95%';

  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {}

  openSnackBar() {
    this.snackbarService.show(3000, 'Success.', 'success');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: this.desktopWidth,
      height: this.desktopHeight,
      data: {
        title: 'Would you like to apply as a courier?',
        showUnderline: true,
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
      console.log(`Dialog result: ${result}`);
    });
  }
}
