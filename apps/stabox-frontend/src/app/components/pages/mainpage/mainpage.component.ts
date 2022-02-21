import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  lightMode = false;
  theme = 'dark';

  constructor() {
    if (localStorage.getItem('theme') == 'light') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

  ngOnInit(): void {
  }

  getLightModeToggle(data: any) {
    if (data == 'light') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

}
