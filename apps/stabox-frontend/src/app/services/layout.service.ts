import { Injectable } from '@angular/core';
import { SnackbarService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  layout: any;

  constructor(private snackbarService: SnackbarService) { }

  setLayout(layout: string) {
    if (layout != null) {
      this.layout = layout;
      localStorage.setItem('layout', layout);
      this.snackbarService.new = true
      if (this.layout == 'new') {
        this.snackbarService.new = true;
      }
      else {
        this.snackbarService.new = false;
      }
    }
  }

  getLayout() {
    this.layout = localStorage.getItem('layout');
    if (this.layout == 'new') {
      this.snackbarService.new = true;
    }
    else {
      this.snackbarService.new = false;
    }
  }
}
