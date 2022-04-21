import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SnackbarService, ThemeService, UserService } from '../../../services';

@Component({
  selector: 'stabox-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(
    public snackbarService: SnackbarService,
    public themeService: ThemeService,
    public userService: UserService,
    private eRef: ElementRef
  ) {}

  ngOnInit(): void {}

  getResult(result: boolean) {
    if (result) {
      this.userService.beShipper();
      location.reload();
    }
    this.snackbarService.showConfirm = false;
  }
}
