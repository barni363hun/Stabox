import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.scss']
})
export class AccountButtonComponent implements OnInit {

  @Input() lightMode = false;

  name: string | undefined = this.userService.authUser.name;
  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.authUserInit.subscribe((u) => {
      this.name = u?.name;
    });
  }
}
