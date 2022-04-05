import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'stabox-snackbar-basic',
  templateUrl: './snackbar-basic.component.html',
  styleUrls: ['./snackbar-basic.component.scss'],
})
export class SnackbarBasicComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    private eRef: ElementRef,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.snackBar.dismiss();
    }
  }
}
