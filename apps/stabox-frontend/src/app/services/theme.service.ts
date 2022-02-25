import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  theme: any;
  light: any;

  setTheme(theme: string) {
    if (theme != null) {
      this.theme = theme;
      localStorage.clear();
      localStorage.setItem('theme', this.theme);
      this.getTheme();
    }
  }

  getTheme() {
    this.theme = localStorage.getItem('theme');
    if (this.theme == 'light') {
      this.light = true;
    } else {
      this.light = false;
    }
  }
}
