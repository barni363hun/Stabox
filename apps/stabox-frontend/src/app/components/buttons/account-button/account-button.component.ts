import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.scss']
})
export class AccountButtonComponent implements OnInit {

  @Input() lightMode = false;
  showMenu = false;

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  toggleMenu(): any {
    if (this.showMenu == true) {
      this.showMenu = false;
    }
    else {
      this.showMenu = true;
    }
  }
}
