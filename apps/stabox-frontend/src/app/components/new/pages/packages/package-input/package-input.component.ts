import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ExchangeDateService,
  PackageService,
  VehicleService,
} from 'apps/stabox-frontend/src/app/services';
import { Observable } from 'rxjs';
import { NewPackageComponent } from '../new-package/new-package.component';

@Component({
  selector: 'stabox-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.scss'],
})
export class PackageInputComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  mobileWidth: string = '100%';
  mobileHeight: string = '85%';
  desktopWidth: string = '75%';
  desktopHeight: string = '85%';


  showMyPackages = true;
  showAcceptedPackages = false;
  showToDeliver = false;

  addPackageMode = false;
  addRecieverMode = false;

  constructor(
    public packageService: PackageService,
    public vehicleService: VehicleService,
    public exchangeDateService: ExchangeDateService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {}

  filterMyPackages() {
    this.showMyPackages = true;
    this.showAcceptedPackages = false;
    this.showToDeliver = false;

    this.packageService.update('/package/myPackages');
  }

  filterAcceptedPackages() {
    this.showMyPackages = false;
    this.showAcceptedPackages = true;
    this.showToDeliver = false;

    this.packageService.update('/package/accepted');
  }

  filterToDeliver() {
    this.showMyPackages = false;
    this.showAcceptedPackages = false;
    this.showToDeliver = true;

    this.vehicleService.getVehicles();
    this.exchangeDateService.getExchangeDates();
    this.packageService.update('/package/acceptable');
  }

  openNewPackageDialog() {
    const dialogRef = this.dialog.open(NewPackageComponent, {
      width: this.desktopWidth,
      height: this.desktopHeight,
      data: {
        title: 'New package',
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
